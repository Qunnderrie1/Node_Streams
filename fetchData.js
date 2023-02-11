const fs = require("fs")
const fetch = require("isomorphic-fetch");
const path = require("path");


fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
.then((res) => res.json())
.then((data) => {

    const filePath = __dirname + "/MyPokemon.JSON";
    const writeStream = fs.createWriteStream(filePath);

    writeStream.write(JSON.stringify(data))


})
.catch((err) => console.log(err));