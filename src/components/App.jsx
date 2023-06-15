import { useEffect, useState } from 'react';
import { Container } from './App.styled';
import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import { getImages } from '../services/QueryGallery';
export default function App() {
  const [page, setPage] = useState(null);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [showBtn, setShowBtn] = useState('');
  const [largeImage, setLargeImage] = useState('');
  useEffect(() => {
    if (query !== '' || page !== null) {
      setIsLoading(true);
      getImages(query, page)
        .then(response => {
          setImages(prevState => [...prevState, ...response.hits]);
          setShowBtn(page < Math.ceil(response.totalHits / 12));
        })
        .catch(error => error.message)
        .finally(() => setIsLoading(false));
    }
  }, [page, query]);

  const getQuery = data => {
    setQuery(data);
    setPage(1);
    setImages([]);
  };
  const fetchImages = () => {
    setPage(prevState => prevState + 1);
  };
  const handleId = largeImageURL => {
    setIsOpen(true);
    setLargeImage(largeImageURL);
  };
  const closeModal = close => {
    setIsOpen(close);
  };
  return (
    <Container>
      <SearchBar onSubmit={getQuery} />
      {images && <ImageGallery images={images} openModal={handleId} />}
      {showBtn && <Button onClick={fetchImages} />}
      {isLoading && <Loader />}
      {isOpen && (
        <Modal largeImage={largeImage} isClosed={closeModal} title={query} />
      )}
    </Container>
  );
}
