import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
import { GetContext } from 'components/App';
export default function ImageGalleryItem({ id, smallImage, largeImageURL }) {
  const { handleId } = GetContext();
  return (
    <GalleryItem
      className="gallery-item"
      id={id}
      onClick={() => handleId(largeImageURL)}
    >
      <GalleryImage src={smallImage} alt={id} />
    </GalleryItem>
  );
}
ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  smallImage: PropTypes.string.isRequired,
};
