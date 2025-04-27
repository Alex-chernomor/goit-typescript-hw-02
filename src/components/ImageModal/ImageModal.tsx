import css from './ImageModal.module.css';
import React, { FC } from 'react';
import Modal from 'react-modal';

interface ImageModalProps {
  isOpen: boolean;
  image: string | null; 
  closeModal: () => void;
}

const ImageModal: FC<ImageModalProps> = ({ isOpen, image, closeModal }) => {
  if (!image) return null;

  return (
    <Modal
     isOpen={isOpen} 
     onRequestClose={closeModal}
     >
      <div>
        <img src={image} alt="Large view" className={css.modalImage} />
        <button onClick={closeModal} className={css.closeBtn}>Close</button>
      </div>
    </Modal>
  );
};

export default ImageModal;