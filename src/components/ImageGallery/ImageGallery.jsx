import { ImageList } from './ImageGallery.styled';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { object } from 'prop-types';
export default function ImageGallery({ images, openModal }) {
  return (
    <ImageList className="gallery">
      {images.map((image, index) => (
        <ImageGalleryItem
          smallImage={image.webformatURL}
          id={index}
          key={index}
          largeImageURL={image.largeImageURL}
          openModal={openModal}
        />
      ))}
    </ImageList>
  );
}
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(object.isRequired).isRequired,
  openModal: PropTypes.func.isRequired,
};
