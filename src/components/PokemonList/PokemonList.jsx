import React from "react";
import PokemonListItem from "../PokemonListItem/PokemonListItem";
import styles from "./PokemonList.scss";

class PokemonList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener("scroll", e => {
      if ( window.pageYOffset ==  document.body.scrollHeight - window.innerHeight ) {
        this.props.infiniteLoaderSwitch();
        this.props.fetch(this.props.infinitescroll+1, this.props.infinitescroll+6);
      }
    });
  }

  render() {
    const { data } = this.props;
    const listItems = data.map((index, i) => {
      return (
        <PokemonListItem
          key={i}
          url={index.sprites.back_default}
          id={index.id}
          name={index.name}
          height={index.height}
          weight={index.weight}
          types={index.types}
        />
      );
    });

    if (listItems.length <= 0) {
      return <h1 className={styles.error}>No Found</h1>;
    }

    return (
      <div className={styles.list}>

        {listItems}

      </div>
    );
  }
}

export default PokemonList;
