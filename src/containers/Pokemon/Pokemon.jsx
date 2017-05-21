import React from "react";
import { connect } from "react-redux";
import MoreInfoPokemon from "../../components/MoreInfoPokemon/MoreInfoPokemon";

import styles from "./Pokemon.scss";
import { RouteTransition } from "react-router-transition";

class ModalPokemon extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { data } = this.props.pokemon;
		const indexActive = data.map((index, i) => {
			if (this.props.match.params.id == index.id) {
				return (
					<div>
						<MoreInfoPokemon
							key={i}
							url={index.sprites.back_default}
							id={index.id}
							name={index.name}
							height={index.height}
							weight={index.weight}
							types={index.types}
							moves={index.moves}
							gameindices={index.game_indices}
							abilities={index.abilities}
						/>
					</div>
				);
			}
		});
		if (indexActive.length == 0) {
			return (
				<div className={styles.loader}>
					<div className={styles.dot} />
					<div className={styles.dot} />
					<div className={styles.dot} />
					<div className={styles.dot} />
					<div className={styles.dot} />
				</div>
			);
		}
		if (indexActive[this.props.match.params.id - 1] == undefined) {
			return (
				<h1 className={styles.error}>
					No Found pokemon № {this.props.match.params.id}
				</h1>
			);
		}

		return (
			<div className={styles.pokemon}>
				<RouteTransition
					pathname={this.props.location.pathname}
					atEnter={{ opacity: 0 }}
					atLeave={{ opacity: 0 }}
					atActive={{ opacity: 1 }}
				>
					{indexActive}
				</RouteTransition>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		pokemon: state.entity
	};
}

export default connect(mapStateToProps)(ModalPokemon);
