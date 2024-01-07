import css from './ImageGallery.module.css';
import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
    render() {
        const { dataImages } = this.props;
        return (
        <>
         <ul className ={css.ImageGallery}>
            {dataImages.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              id={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
            />
          ))}
         </ul>
        </>
     )
 }
}
export default ImageGallery;