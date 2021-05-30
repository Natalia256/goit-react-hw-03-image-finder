import { Component }  from "react";
import styles from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    query: " ",
  };
  handleChange = (event) => {
    this.setState({
      query: event.currentTarget.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };
  render() {
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchFormbutton}>
            <span className={styles.SearchFormbuttonlabel}></span>
          </button>

          <input
            value={this.state.query}
            onChange={this.handleChange}
            className={styles.SearchForminput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

