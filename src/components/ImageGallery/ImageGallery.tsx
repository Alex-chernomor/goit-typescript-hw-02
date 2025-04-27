import React, { FC } from 'react';
import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGalley.module.css';
import { ImageTS } from "../../types/types"; 

interface ImageGalleryProps {
  items: ImageTS[];   
  openModal: (image: string) => void; 
}

const ImageGallery: FC<ImageGalleryProps> = ({ items, openModal }) => {
  return (
    <ul className={css.imageList}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard
            item={item}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
