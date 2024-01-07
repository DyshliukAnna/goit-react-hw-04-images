import css from './Modal.module.css';
import { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = ({ key }) => {
    if (key !== 'Escape') {
      return;
    }

    this.props.onClose();
  };

  handleClickOutside = ({ target: { className } }) => {
    if (className !== 'overlay') {
      return;
    }

    this.props.onClose();
  };

  render() {
    return (
      <>
        <div className={css.Overlay}>
          <div className={css.Modal}>
            <img src="" alt="" />
          </div>
        </div>
      </>
    );
  }
}
export default Modal;
