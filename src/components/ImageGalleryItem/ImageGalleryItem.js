import css from './ImageGalleryItem.module.css';
import { Component } from 'react';
import  Modal  from '../Modal/Modal';

class ImageGalleryItem extends Component {
    state = {
        toggleModal: false,
      };
    
      toggleModal = (e, largeImageURL) => {
        this.setState({ toggleModal: !this.state.toggleModal, largeImageURL });
      };

    render() {

    const { id, webformatURL, largeImageURL } = this.props;
    const { toggleModal } = this.state;

        return (
        <>
         <li className ={css.ImageGalleryItem} key={id}>
            <img key={id} src ={webformatURL} alt ="" onClick={e => this.toggleModal(e, largeImageURL)}/>
         </li>
         {toggleModal && (
          <Modal largeImageURL={largeImageURL} onClose={this.toggleModal} />
        )}
        </>
     );
 }
}
export default ImageGalleryItem;