import { Component } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';
import PropTypes from 'prop-types';
export default class Modal extends Component {
  state = {
    isOpen: true,
  };
  componentDidMount() {
    document.addEventListener('keydown', this.closeModalbyEsc);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModalbyEsc);
  }
  closeModalbyEsc = evt => {
    if (evt.key === 'Escape') {
      this.props.isClosed(false);
    }
  };
  closeModal = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.isClosed(false);
    }
  };
  render() {
    return (
      <Overlay className="overlay" onClick={this.closeModal}>
        <ModalWindow className="modal">
          <img src={this.props.largeImage} alt={this.props.title} />
        </ModalWindow>
      </Overlay>
    );
  }
}
Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
