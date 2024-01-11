import css from './ImageGalleryItem.module.css';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const ImageGalleryItem = ({ id, webformatURL, largeImageURL }) => {
  const [togleModal, setTogleModal] = useState(false);

  const handleToggleModal = () => {
    setTogleModal(!togleModal);
  };

  return (
    <>
      <li className={css.ImageGalleryItem} key={id}>
        <img
          className={css.ImageGalleryItem_image}
          key={id}
          src={webformatURL}
          alt=""
          onClick={handleToggleModal}
        />
      </li>
      {togleModal && (
        <Modal largeImageURL={largeImageURL} onClose={handleToggleModal} />
      )}
    </>
  );
};
export default ImageGalleryItem;
