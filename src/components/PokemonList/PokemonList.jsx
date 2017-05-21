import React from "react";
import PokemonListItem from "../PokemonListItem/PokemonListItem";
import styles from "./PokemonList.scss";

class PokemonList extends React.Component {
  constructor(props) {
    super(props);
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

    return (
      <div className={styles.list}>

        {listItems}

      </div>
    );
  }
}

export default PokemonList;
