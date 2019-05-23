import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // debugger
        return (
            <li >
                <Link to="/pokemon/:pokemonId"> 
                    <h3>{this.props.name}</h3>
                    <img src={this.props.image_url} alt="pokey_img"></img> 
                </Link>
            </li>
        );
    }
}

export default PokemonIndexItem;