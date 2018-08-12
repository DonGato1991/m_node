const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    for (let index = 1; index <= limite; index++) {
        console.log(`${base} * ${index} = ${base * index}`);
    }
}

let crearArchicvo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`La base ${base} no es un número`);
            return;
        }

        for (let index = 1; index <= limite; index++) {
            data = data + `${base} * ${index} = ${base * index} \n`;
        }

        let filename = `Tabla_del_${base}_al_${limite}.txt`;
        fs.writeFile('tablas/' + filename, data, 'utf-8', (err) => {
            if (err) reject(err);
            else resolve(filename);
            //console.log(`Archivo creado: ${filename}`);
        });
    });
}

module.exports = {
    crearArchicvo,
    listarTabla
}