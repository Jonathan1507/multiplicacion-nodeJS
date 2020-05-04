// REQUIREDS
// const fs = require('fs');
// const fs = require('express');
// const fs = require('./fs');
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.blue(archivo)))
            .catch(error => console.log(error))
        break;

    default:
        console.log('Comando no reconocido')
        break;
}

//let base = 'abc';

//PARA ESCRIBIR LA BASE EN CONSOLA
//let argv2 = process.argv;
//console.log('limite', argv.limite)
// let parametro = argv[2];
// let base = parametro.split('=')[1]


// let tabla = '';

// for (let i = 1; i <= 10; i++) {
//     tabla += `${base} * ${i} = ${base * i}\n`;
// }

// const data = new Uint8Array(Buffer.from(tabla));
// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${base}.txt ha sido creado y guardado`);
// });


