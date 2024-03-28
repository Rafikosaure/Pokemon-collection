import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [pokemons, setPokemons] = useState([])
 
  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/151")
    .then(response => response.json())
    .then((data) => {
      setPokemons(data);
    })
    console.log(pokemons)
  }, [pokemons]);

  return (
    <div className="App">
      {pokemons.map((pokemon) => 
      <div className='card' key={pokemon.id}>
        <h2>{pokemon.name}</h2>
        <div className='image-container'>
          <img src={pokemon.image} alt="Pokémon" />
        </div>
        <div className='stats'>
          <p>Points de vie : {pokemon.stats.HP}</p>
          <p>Attaque : {pokemon.stats.attack}</p>
          <p>Défense : {pokemon.stats.defense}</p>
          <div>
            {pokemon.apiTypes.map((type) =>
              <p className='type-name'>Type : {type.name}<img className='type-image' src={type.image} alt="type de pokemon" /></p>
            )}
          </div>
        </div> 
      </div>)}
      
    </div>
  )
}

export default App;
