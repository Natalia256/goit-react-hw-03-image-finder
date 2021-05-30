import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css";

  
const ImageGallery = ({ items, onClick, children }) => {
  return (
    <>
      <ul className={styles.ImageGallery}>
        {items.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            onClick={onClick}
            key={id}
            src={webformatURL}
            srcLarge={largeImageURL}
          />
        ))}
      </ul>
      {children}
    </>
  );
};
export default ImageGallery;