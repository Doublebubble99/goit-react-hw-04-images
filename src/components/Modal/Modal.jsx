import { useEffect } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';
import PropTypes from 'prop-types';
export default function Modal({ isClosed, largeImage, title }) {
  useEffect(() => {
    const closeModalbyEsc = evt => {
      if (evt.key === 'Escape') {
        isClosed(false);
      }
    };
    document.addEventListener('keydown', closeModalbyEsc);
    return () => {
      document.removeEventListener('keydown', closeModalbyEsc);
    };
  }, [isClosed]);

  const closeModal = evt => {
    if (evt.currentTarget === evt.target) {
      isClosed(false);
    }
  };
  return (
    <Overlay className="overlay" onClick={closeModal}>
      <ModalWindow className="modal">
        <img src={largeImage} alt={title} />
      </ModalWindow>
    </Overlay>
  );
}
Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isClosed: PropTypes.func.isRequired,
};
