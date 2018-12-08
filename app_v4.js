//requireds van al inicio

//tenemos este tipo de require que es uno de un proyecto propio de node, es decir que esa libreria ya existe y simplemente la definimos
//const fs = require('fs');
//estos paquetes no son nativos de node pero son expansiones o codigos de otras personas que hicieron por nosotros
//const fs = require('express');
//tenemos los archivos o los require de archivos que nosotros creamos en el proyecto, se identifican con ./
//const fs = require('./fs');

//const multiplicar = require('./multiplicar/multiplicar');
const { crearArchivo } = require('./multiplicar/multiplicar'); //se elije el objeto {} que quiero utilizar del exports de multiplicar.js

//let base = '5'; //'abc'; //7;
//let data = '';

//console.log(process);
//console.log(process.argv); //argumentos

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];

//console.log(base);

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));
//console.log(multiplicar);

//console.log(module);

//for (let i = 1; i <= 10; i++) {
//console.log(`${base} * ${i} = ${base*i}`);
//  data += `${base} * ${i} = ${base*i}\n`;
//}

//const data = new Uint8Array(Buffer.from('Hola Mundo'));
//fs.writeFile('tabla-2.txt', data, (err) => {
//fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//  if (err) throw err;
//console.log(`El archivo tabla-${base}.txt ha sido creado`);
//});

//crearArchivo(base)
//  .then(archivo => console.log(`Archivo creado: ${archivo}`))