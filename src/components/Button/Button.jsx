import styles from "./Button.module.css";
const Button = ({ onClick, type = "button" }) => {
    return (
      <button onClick={onClick} className={styles.Button} type={type}>
        Load more
      </button>
    );
  };
  export default Button;