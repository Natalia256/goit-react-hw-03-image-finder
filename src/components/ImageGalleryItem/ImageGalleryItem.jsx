import styles from "./ImageGalleryItem.module.css";
const ImageGalleryItem = ({ src, srcLarge, onClick }) => {
    return (
      <li className={caches.imageGalleryItem} onClick={onClick}>
        <img
          src={src}
          data-source={srcLarge}
          alt=""
          className={styles.imageGalleryItemimage}
        />
      </li>
    );
  };
  
  export default ImageGalleryItem;