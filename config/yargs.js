const opts = {
    base: {
        demandOption: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime la tabla de multiplicar en consola', opts)
    .command('crear', 'Crea un archivo con la tabla de multiplicar de la base enviada', opts)
    .help()
    .argv;

module.exports = { argv }