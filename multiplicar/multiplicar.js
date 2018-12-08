const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => { //limite sera 10 cuando no se le envie un valor

    console.log('==========='.green);
    console.log(`tabla de ${base}`.green);
    console.log('==========='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`)
    }

}

//let crearArchivo = (base) => {
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            //reject('No es un numero');
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        //for (let i = 1; i <= 10; i++) {
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        //fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
}

//para que la funcion pueda ser usada globalmente
module.exports = {
    crearArchivo,
    listarTabla
}