import './../css/layout.css';
import { vistaInicio } from './../../secciones/inicio.js';
import { vistaCss } from '../../secciones/css.js';
import { vista } from './sidebar.js';

const listaVistas = [vistaInicio, vistaCss];

// 1. Creamos el contenedor una sola vez
const contenedor = document.createElement('main');

// 2. Función encargada de limpiar y pintar la vista correspondiente
function actualizarPantalla(indice) {
    contenedor.replaceChildren();
    
    if (listaVistas[indice]) {
        listaVistas[indice](contenedor);
    }
}

// 3. Escuchamos los clics del sidebar
document.addEventListener('cambioVista', (e) => {
    actualizarPantalla(e.detail);
});

// 4. Función inicial que monta el <main> y carga la vista guardada
export function content() {
    actualizarPantalla(vista);
    document.body.appendChild(contenedor);
}
