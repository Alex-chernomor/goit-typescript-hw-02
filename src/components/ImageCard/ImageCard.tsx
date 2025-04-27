import React, {FC} from 'react';
import css from './ImageCard.module.css';
import { ImageTS } from '../../types/types';

interface ImageCardProps {
  item: ImageTS;
  openModal: (imageUrl: string) => void;
}

const ImageCard: FC<ImageCardProps> = ({ item, openModal }) => {
  return (
    <div className={css.container}>
      <img 
        className={css.image} 
        src={item.urls.small} 
        alt={item.alt_description}
        onClick={() => openModal(item.urls.regular)} 
      />
    </div>
  );
}

export default ImageCard;