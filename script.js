'use strict';

const fetch = require('node-fetch');
//import fetch from 'node-fetch';

/*const fs = require('fs');

let rawData = fs.readFileSync('words.json');
let words = JSON.parse(rawData);*/

let words = require('./test.json');

let word = words.shift();
fetch(`https://api.dictionary.dev/api/v2/entries/en/${word}`)
    .then(response => response.json())
    .then(data => console.log(data));

//console.log(word);
