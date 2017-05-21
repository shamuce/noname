import React from "react";
import { connect } from "react-redux";
import { RouteTransition } from "react-router-transition";
import PokemonList from "../../components/PokemonList/PokemonList";
import Search from "../../components/Search/Search";
import SocialShare from "../../components/SocialShare/SocialShare";
import {
  fetchPokemon,
  filterPokemon,
  infiniteLoader
} from "../../reducers/entity";
import styles from "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.loadingMore = this.loadingMore.bind(this);
  }

  loadingMore(e) {
    this.props.infiniteLoader();
    this.props.fetchPokemon(
      this.props.pokemon.data.length + 1,
      this.props.pokemon.data.length + 6
    );
  }

  render() {
    const {
      isFetching,
      isError,
      data,
      searchList,
      infiniteLoaderItem
    } = this.props.pokemon;

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
        <SocialShare />
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
            pokemonlist={data}
            filterlist={this.props.filterPokemon}
            valueinput={infiniteLoaderItem}
          />
          <PokemonList data={searchList ? searchList : data} />

          {searchList.length == 0
            ? <h1 className={styles.error}>No Found</h1>
            : <button onClick={this.loadingMore} className={styles.loadmore}>
                Load more
              </button>}

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
