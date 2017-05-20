import React from "react";

import { Link } from "react-router-dom";
import { formatId, upperFirstCase } from "../../utils/utils.js";

import styles from "./MoreInfoPokemon.scss";

class MoreInfoPokemon extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(prevProps) {
    window.scrollTo(0, 0);
  }

  render() {
    const {
      url,
      id,
      name,
      height,
      weight,
      types,
      moves,
      gameindices,
      abilities
    } = this.props;

    const listTypes = types.map((index, i) => {
      return (
        <p key={i}>
          {upperFirstCase(index.type.name)}
        </p>
      );
    });
    const listMoves = moves.map((index, i) => {
      return (
        <p key={i}>
          {upperFirstCase(index.move.name)}
        </p>
      );
    });

    const listGameindices = gameindices.map((index, i) => {
      return (
        <p key={i}>
          {upperFirstCase(index.version.name)}
        </p>
      );
    });

    const listAbilities = abilities.map((index, i) => {
      return (
        <p key={i}>
          {upperFirstCase(index.ability.name)}
        </p>
      );
    });

    return (
      <div className={styles.pokemon__list}>
        <Link to="/">Exit</Link>
        <div className={styles.pokemon__top}>
          <div className={styles.pokemon__name}>
            <img src={url} />
            <p> {upperFirstCase(name)} {formatId(id)}</p>

          </div>
          <div className={styles.pokemon__description}>
            <div>
              <p>Height: {height}</p>
              <p>Weight: {weight}</p>
            </div>
            <div>
              <p className={styles.color__types}>Types: </p>
              {listTypes}
            </div>
          </div>
        </div>
        <div className={styles.pokemon__subdesc}>
          <div>
            <p className={styles.color__etc}>Moves: </p>
            {listMoves}
          </div>
          <div>
            <p className={styles.color__etc}>Game indices: </p>
            {listGameindices}
          </div>
          <div>
            <p className={styles.color__etc}> Abilities: </p>
            {listAbilities}
          </div>
        </div>
      </div>
    );
  }
}

export default MoreInfoPokemon;
