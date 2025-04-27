import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGalley.module.css';
import { ImageTS } from "../../types/types";
import {FC} from 'react';

interface ImageGalleryProps {
  images: ImageTS[],
  onClick:()=> void,
}

export default function ImageGallery({items, openModal}) {
    
  return (
    <ul className={css.imageList}>
        {items.map((item)=>(

            <li key = {item.id}>
                <ImageCard 
                item={item}
                openModal={openModal}
                className={css.imageCard}/>
            </li>
        ))}
    </ul>
  )
}
