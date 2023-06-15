import { LoadButton } from './Button.styled';
import PropTypes from 'prop-types';
export default function Button({ onClick }) {
  return (
    <LoadButton type="button" onClick={onClick}>
      Load more
    </LoadButton>
  );
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
