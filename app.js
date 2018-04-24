const argv = require('./config/yargs').argv;
const color = require('colors');
 const porhacer = require('./config/por-hacer/por-hacer');

let  comando = argv._[0];



switch(comando){
    case 'crear':
    console.log( color.bgCyan('creando'));
    let  tarea =porhacer.creartarea(argv.descripcion);
    
    break;
    case 'listar':
    let  tareas = porhacer.listar();
    console.log(tareas);
    for (let tarea of tareas) {
        console.log( color.bgCyan('<-------------Lista de tareas------------->'));
        console.log( color.cyan('------TAREA------'));
        console.log('Descripción:  ' + color.blue(tarea.texto));
        console.log('Estado:   ' + color.yellow(tarea.completado));
        console.log( color.blue('<------------------------------------>'));
    }
   
    break;
    case 'actu':
    let  tarea2 =porhacer.actualizarregistro(argv.descripcion,argv.completado);
    console.log( color.bgMagenta('Actualizado'));
    console.log('completado');
    break;
    case 'borrar':
    let  tarea3 =porhacer.Borrar(argv.descripcion);
    console.log( color.bgMagenta('eliminacion de la tarea->', argv.descripcion));
    console.log('completado la eliminacion');
    break;
    default:
    break
}
