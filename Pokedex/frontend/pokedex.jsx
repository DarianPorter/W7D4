import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, requestAllPokemon, requestPokemon} from './actions/pokemon_actions';
import configureStore from './store/store';   
import { fetchAllPokemon, fetchPokemon } from './util/api_util';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root';
import { HashRouter,  Route } from 'react-router-dom';

document.addEventListener("DOMContentLoaded", ()=>{
    const store = configureStore();
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);

    window.getState = store.getState;
    window.dispatch = store.dispatch;
});

window.requestPokemon = requestPokemon;
// window.receiveAllPokemon = receiveAllPokemon;
window.fetchPokemon = fetchPokemon;
// window.selectAllPokemon = selectAllPokemon;