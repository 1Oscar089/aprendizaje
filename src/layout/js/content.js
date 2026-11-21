import './../css/layout.css'
import {vistaInicio} from './../../secciones/inicio.js'
export function content(){
    const contenedor = document.createElement('main');
    vistaInicio(contenedor);
    //Agregar al body
    document.body.appendChild(contenedor)
}