import React from "react";
import { Link } from "react-router-dom";
import styles from "./Search.scss";

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.filterpokemon = this.filterpokemon.bind(this);
		this.sortpokemon = this.sortpokemon.bind(this);
	}

	filterpokemon(e) {
		this.sortmethod("Lowest Number First");
		const value = e.target.value.toLowerCase();
		const pokeListData = this.props.pokemonlist.data;
		const filter = pokeListData.filter(user => {
			return user.name.toLowerCase().includes(value) ? 1 : 0;
		});
		this.props.filterlist(
			pokeListData.length == filter.length ? false : filter
		);
	}

	sortmethod(method) {
		let immutableData = [...this.props.pokemonlist.data];
		const sorting = immutableData.sort(function(a, b) {
			switch (method) {
				case "A-Z":
					return a.name.localeCompare(b.name);

				case "Z-A":
					return b.name.localeCompare(a.name);

				case "Lowest Number First":
					return a.id - b.id;

				case "Highest Number First":
					return b.id - a.id;
			}
		});

		this.props.filterlist(sorting);
	}

	sortpokemon(e) {
		this.refs.input.value = "";
		const method = e.target.innerHTML;
		this.sortmethod(method);
	}
	render() {
		return (
			<div className={styles.filter__block}>

				<input
					ref="input"
					className={styles.input}
					type="text"
					placeholder="Search pokemon"
					onChange={this.filterpokemon}
				/>
				<ul className={styles.sort__list}>
					<li onClick={this.sortpokemon}>A-Z</li>
					<li onClick={this.sortpokemon}>Z-A</li>
					<li onClick={this.sortpokemon}>
						Lowest Number First
					</li>
					<li onClick={this.sortpokemon}>
						Highest Number First
					</li>
				</ul>
			</div>
		);
	}
}

export default Search;
