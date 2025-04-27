import css from './ImageModal.module.css';
import React, { FC } from 'react';
import Modal from 'react-modal';
import { ImageTS } from '../../types/types';

interface ImageModalProps {
  isOpen: boolean;
  image: ImageTS | null; 
  closeModal: () => void;
}

const ImageModal: FC<ImageModalProps> = ({ isOpen, image, closeModal }) => {
  if (!image) return null;

  return (
    <Modal
     isOpen={isOpen} 
     onRequestClose={closeModal}
     className={css.modal}
     overlayClassName={css.overlay}
     >
      <div>
        <img src={image.urls.regular} alt="Large view" className={css.modalImage} />
        <button onClick={closeModal} className={css.closeBtn}>Close</button>
      </div>
    </Modal>
  );
};

export default ImageModal;