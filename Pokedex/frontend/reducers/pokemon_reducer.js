import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';


const pokemonReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_POKEMON:
            return Object.assign({}, oldState, action.pokemon);
        case RECEIVE_POKEMON:
            return Object.assign({},oldState,action.pokemon);
        default: 
            return state; 
    }
};


export default pokemonReducer;