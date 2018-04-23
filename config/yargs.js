var colors = require('colors/safe');

const argv = require('yargs')
.usage('$0 <cmd> [args]')

.command('crear', 'genera una tabla de multiplicar',{
    descripcion  : {
        demand: true,
        alias: 'des',
        type: 'string',
        describe: 'descripcion por  tarea  por hacer '
         
    }})
 
 .command('Actualizar', 'Actualizar descripcion',{
    descripcion  : {
        demand: true,
        alias: 'des',
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