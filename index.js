const lib = require('./lib.js'); //tradisonal way
const express = require('express');
console.log('Hellow ');
const server = express();
server.listen(8080);
// nb/

// import { sum, sub } from './lib.js';
//reade the file Node is a server we can not stopt the server
const fs = require('fs');
// const txt = fs.readFileSync('demo.txt', 'utf-8');
// console.log(performance.now());
// fs.readFile('demo.txt', 'utf-8', (error, text) => {
//   console.log(text);
// });
// // console.log(txt);
// console.log(lib.sum(4, 5));
// console.log(performance.now());
// console.log(lib.sub(3, 6));

/* but now ES module */

/*
 */
