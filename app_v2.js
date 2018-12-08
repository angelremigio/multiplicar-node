//requireds van al inicio

//tenemos este tipo de require que es uno de un proyecto propio de node, es decir que esa libreria ya existe y simplemente la definimos
const fs = require('fs');
//estos paquetes no son nativos de node pero son expansiones o codigos de otras personas que hicieron por nosotros
//const fs = require('express');
//tenemos los archivos o los require de archivos que nosotros creamos en el proyecto, se identifican con ./
//const fs = require('./fs');

let base = 6;
let data = '';

for (let i = 1; i <= 10; i++) {
    //console.log(`${base} * ${i} = ${base*i}`);
    data += `${base} * ${i} = ${base*i}\n`;
}

//const data = new Uint8Array(Buffer.from('Hola Mundo'));
//fs.writeFile('tabla-2.txt', data, (err) => {
fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base}.txt ha sido creado`);
});