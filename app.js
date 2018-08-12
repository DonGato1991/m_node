const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchicvo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Crear');
        crearArchicvo(argv.base, argv.limite).then(archivo => console.log('Archivo creado:' + colors.green(`${archivo}`)))
            .catch(err => console.log(`Error al generar archivo: ${err}`));
        break;
    case 'listar':
        console.log('Listar'.rainbow);
        listarTabla(argv.base, argv.limite);
        break;

    default:
        console.log('No es un comando reconocido');
        break;
}

//let argumento = argv[2];
//let base = argumento.split('=')[1];
//console.log(base);

//crearArchicvo(base).then(archivo => console.log(`Archivo creado: ${archivo}`))
//    .catch(err => console.log(`Error al generar archivo: ${err}`));