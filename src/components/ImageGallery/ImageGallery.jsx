import { ImageList } from './ImageGallery.styled';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { object } from 'prop-types';
export default function ImageGallery({ images }) {
  return (
    <ImageList className="gallery">
      {images.map(({ webformatURL, largeImageURL }, index) => (
        <ImageGalleryItem
          smallImage={webformatURL}
          id={index}
          key={index}
          largeImageURL={largeImageURL}
        />
      ))}
    </ImageList>
  );
}
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(object.isRequired).isRequired,
};
