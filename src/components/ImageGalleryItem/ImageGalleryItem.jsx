import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
export default function ImageGalleryItem({
  id,
  smallImage,
  openModal,
  largeImageURL,
}) {
  return (
    <GalleryItem
      className="gallery-item"
      id={id}
      onClick={() => openModal(largeImageURL)}
    >
      <GalleryImage src={smallImage} alt={id} />
    </GalleryItem>
  );
}
ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  smallImage: PropTypes.string.isRequired,
};
