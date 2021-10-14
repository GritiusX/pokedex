const poke_container = document.getElementById('poke_container');
const pokemon_number = 251;

//funciones
const fetchPokemons = async () => {
    for (let i = 1; i <= pokemon_number; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const res = await fetch(url);
    const pokemon = await res.json();
    CreatePokemonCard(pokemon);
}

function CreatePokemonCard(pokemon) {
    const pokemonElem = document.createElement('div');
    pokemonElem.classList.add('pokemon');
    pokemonElem.classList.add('hvr-fade');
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const image = pokemon.sprites.front_default;
    let types = [];
    types.push(...pokemon.types);
    let rowTypes = '';
    types.forEach(type => {
        rowTypes += `<h5 class="${type.type.name}">
        ${type.type.name[0].toUpperCase() + type.type.name.slice(1)}</h5>`;
    });

    const pokeInnerHTML = `
    <div class="img-container">
        <img src="${image}" alt="nombrePokemon">   
    </div>    
            <div class="info">
                <span>${pokemon.id}</span>
                <h3>${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h3>
                ${rowTypes}
            </div>`

    pokemonElem.innerHTML = pokeInnerHTML;
    poke_container.appendChild(pokemonElem);
}

fetchPokemons();