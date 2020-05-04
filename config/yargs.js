const configuracion = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de mutiplicar', configuracion)
    .command('crear', 'Genera un archivo con la tabla de mutiplicar', configuracion)
    .help()
    .argv;


module.exports = {
    argv
}