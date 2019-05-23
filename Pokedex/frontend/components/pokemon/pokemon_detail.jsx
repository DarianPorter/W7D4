import React from 'react';
import { Link } from 'react-router-dom'; 

class PokemonDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestPokemon(this.props.match.params.pokemonId);
    }
    render() {
        console.log(this.props);
        return (
        <>
            <p>{this.props.pokemon.name}</p>
            <img src={this.props.pokemon.image_url} alt="pokemon img"/>
            <Link to='/'>Back to Index</Link>
        </>
        )
    }
}

export default PokemonDetail;

