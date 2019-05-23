import {RECEIVE_POKEMON} from '../actions/pokemon_actions';

const itemsReducer = (state = {}, action) =>{
    const oldState = Object.freeze(state);
    switch (action.type){
        case RECEIVE_POKEMON:
            return Object.assign({},oldState,action.pokemon.items);
        default:
            return state;
    }
};

export default itemsReducer;


