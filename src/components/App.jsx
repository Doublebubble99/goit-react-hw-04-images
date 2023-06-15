import { Component } from 'react';
import { Container } from './App.styled';
import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import { getImages } from '../services/QueryGallery';
export default class App extends Component {
  state = {
    key: '',
    page: null,
    images: [],
    isLoading: false,
    query: '',
    isOpen: false,
    showBtn: '',
    largeImage: '',
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.page !== page || prevState.query !== query) {
      this.setState({ isLoading: true });
      await getImages(query, page)
        .then(response =>
          this.setState(prevState => ({
            images: [...prevState.images, ...response.hits],
            showBtn: page < Math.ceil(response.totalHits / 12),
          }))
        )
        .catch(error => error.message)
        .finally(() => this.setState({ isLoading: false }));
    }
    return;
  }

  setQuery = data => {
    this.setState({
      query: data,
      page: 1,
      images: [],
    });
  };
  fetchImages = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  handleId = largeImageURL => {
    this.setState({
      isOpen: true,
      largeImage: largeImageURL,
    });
    return largeImageURL;
  };
  closeModal = close => {
    this.setState({
      isOpen: close,
    });
  };
  render() {
    const { images, isOpen, isLoading, query, showBtn, largeImage } =
      this.state;
    return (
      <Container>
        <SearchBar onSubmit={this.setQuery} />
        {images && <ImageGallery images={images} openModal={this.handleId} />}
        {showBtn && <Button onClick={this.fetchImages} />}
        {isLoading && <Loader />}
        {isOpen && (
          <Modal
            largeImage={largeImage}
            isClosed={this.closeModal}
            title={query}
          />
        )}
      </Container>
    );
  }
}
