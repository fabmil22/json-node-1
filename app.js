const argv = require('./config/yargs').argv;
const color = require('colors');


let  comando = argv._[0];



switch(comando){
    case 'crear':
    console.log( color.bgCyan('creando'));
    break;
    case 'listar':
    console.log( color.bgCyan('listando'));
    break;
    case 'actualizar':
    console.log( color.bgCyan('actualizando'));
    break;
    default:
    break
}