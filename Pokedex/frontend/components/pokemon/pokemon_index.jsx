import React from 'react';
import PokemonIndexItem from './pokemon_index_item';


class PokemonIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        // debugger
        const { requestAllPokemon } = this.props;
        requestAllPokemon();
    }
    
    render() {
        const allPokemon = this.props.pokemon.map((poke, index) => {
           return <PokemonIndexItem 
                key={index} 
                name={poke.name} 
                image_url={poke.image_url} 
            />
        });
        // debugger
        return (
            <section className="pokedex">
                <ul>
                    <h1>Hello pokemon</h1>
                    { allPokemon }
                </ul>
            </section>
        );
    }
} 

export default PokemonIndex;