import { connect } from 'react-redux';
import { requestPokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';
import { withRouter } from 'react-router-dom'; 

const msp = (state, ownProps) => {
    const pokemonId = ownProps.match.params.pokemonId;
    const pokemon = state.entities.pokemon[pokemonId] || {};
    return {
        pokemon
    }; 
};

const mdp = dispatch => ({
    requestPokemon: id => dispatch(requestPokemon(id))
});

export default withRouter(connect(msp, mdp)(PokemonDetail));
