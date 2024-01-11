import css from './Modal.module.css';
import { useEffect } from 'react';

const Modal = ({ onClose, largeImageURL }) => {
  useEffect(() => {
    const handleKeyDown = ({ key }) => {
      if (key !== 'Escape') {
        return;
      }

      onClose();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleClickOutside = ({ target: { className } }) => {
    if (className !== 'Overlay') {
      return;
    }

    onClose();
  };
  return (
    <>
      <div className={css.Overlay} onClick={handleClickOutside}>
        <div className={css.Modal}>
          <img src={largeImageURL} alt="" width={750} height={550} />
        </div>
      </div>
    </>
  );
};

export default Modal;
