var colors = require('colors/safe');

const argv = require('yargs')
.usage('$0 <cmd> [args]')

    .command('crear', 'genera una tabla de multiplicar',{
    descripcion  : {
        demand: true,
        alias: 'd',
        type: 'string',
        describe: 'descripcion por  tarea  por hacer '
         
    }})

    .command('listar', 'lista todas las tareas',{})

    .command('borrar', 'Eliminar Tarea',{
        descripcion  : {
            demand: true,
            alias: 'd',
            type: 'string',
            describe: 'para eliminat tarea '
             
        }
    })
    
    .command('actu', 'Actualizar descripcion',{
    descripcion  : {
        demand: true,
        alias: 'd',
        type: 'string',
        describe: 'descripcion por  tarea  por hacer '
         
    },
    completado  : {
        demand: true,
        alias: 'c',
        defauld: true,
    
         
    }

 })
.help().argv;

module.exports = {
    argv
}