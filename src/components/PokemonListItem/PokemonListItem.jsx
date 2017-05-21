import React from "react";
import { Link } from "react-router-dom";
import { formatId, upperFirstCase } from "../../utils/utils.js";
import styles from "./PokemonListitem.scss";

class PokemonListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { url, id, name, height, weight, types } = this.props;
    const listTypes = types.map((index, i) => {
      return (
        <p className={styles.block_2__settings} key={i}>
          {upperFirstCase(index.type.name)}
        </p>
      );
    });

    return (
      <Link
        className={styles.item}
        to={`/pokemon/${id}`}
      >
        <div className={styles.container}>
          <div className={styles.img_size}>
            <img className={styles.img} src={url} />
          </div>
          <p className={styles.number}>{formatId(id)}</p>
          <p className={styles.name}>{upperFirstCase(name)}</p>
          <div className={styles.block_1}>
            <p className={styles.block_1__height}>Height: {height}</p>
            <p className={styles.block_1__weight}>Weight: {weight}</p>
          </div>
          <div className={styles.block_2}>
            {listTypes}
          </div>
        </div>
      </Link>
    );
  }
}

export default PokemonListItem;
