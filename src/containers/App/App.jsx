import React from "react";
import { connect } from "react-redux";
import { RouteTransition } from "react-router-transition";
import PokemonList from "../../components/PokemonList/PokemonList";
import Search from "../../components/Search/Search";
import {
  fetchPokemon,
  filterPokemon,
  infiniteLoader
} from "../../reducers/entity";
import styles from "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isFetching, isError, data, searchList } = this.props.pokemon;

    if (!isFetching) {
      return <div className={styles.loader}>Loading...</div>;
    }

    if (isError) {
      return <div className={styles.error}>Error</div>;
    }

    return (
      <RouteTransition
        pathname={this.props.location.pathname}
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
      >
        <div
          className={
            this.props.pokemon.infiniteLoaderItem
              ? styles.infinite__loader__item__active
              : styles.infinite__loader__item
          }
        >
          <div className={styles.infinite__loader__spinner}>
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={styles.dot} />
          </div>
        </div>
        <div className={styles.page}>
          <Search
            pokemonlist={this.props.pokemon}
            filterlist={this.props.filterPokemon}
          />
          <PokemonList
            fetch={this.props.fetchPokemon}
            data={searchList ? searchList : data}
            infinitescroll={data.length}
            infiniteLoaderSwitch={this.props.infiniteLoader}
          />

        </div>
      </RouteTransition>
    );
  }
}
function mapStateToProps(state) {
  return {
    pokemon: state.entity
  };
}

export default connect(mapStateToProps, {
  fetchPokemon,
  filterPokemon,
  infiniteLoader
})(App);
