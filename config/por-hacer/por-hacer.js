var colors = require('colors');
const fs = require('fs');


let dataporhacer = [];


const savedatabd = ()=>{
    
            let data1 = JSON.stringify(dataporhacer); 
            fs.writeFile( `data/tareas.json` , data1, (err) => {
                if (err) throw err;
                console.log(colors.bgMagenta('Has been saved!'));
              });
        }

const cargarDB = () => {

    try {
        dataporhacer = require('../../data/tareas');
    } catch (error) {
        dataporhacer = [];
    }


}


/** listar()
 * *muestra todas las tareas incluidas  en el json
 */

const listar = ()=>{

    cargarDB();
    return   dataporhacer;
}

let  creartarea =  ( texto = "nueva  tarea sin nombre") =>{

    /**cargar db */
   cargarDB();
    

    let porHacer ={
        texto,
        completado:false
    };

    dataporhacer.push (porHacer);
    savedatabd();

    return porHacer;

}

/** actualizarregistro
 * * esto actualiza el estado completado a true
*/
let  actualizarregistro = ( texto, completado = true) =>{

    /** carga de  base de datos */
    cargarDB();
    let  index = dataporhacer.findIndex(tarea => tarea.texto=== texto);
    console.log(index);
    if (index >=0){
    dataporhacer[index].completado = completado;
    savedatabd();
    return true;
    console.log('lograda actualizacion del campo');
    }
    
}
let Borrar = (texto)=>{
/** carga de  base de datos */
cargarDB();
 dataporhacer=dataporhacer.filter(tarea => tarea.texto != texto);
 savedatabd();
}


module.exports= {
    creartarea,
    listar,
    actualizarregistro,
    Borrar 
}