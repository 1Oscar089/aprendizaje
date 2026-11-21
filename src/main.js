import { header } from "./layout/js/header.js";
import { sidebar } from "./layout/js/sidebar.js";
import { footer } from "./layout/js/footer.js";
import { content } from "./layout/js/content.js";

header();
sidebar();
content();
footer();

const contenedor = '';


/*const rutas = {
    'inicio': vistaInicio,
    /*'Unidad 1: Fundamentos, Sintaxis e Integración': vistaUnidad1*/
/*};

export function navegar(nombreVista) {
    const vista = rutas[nombreVista] || vistaInicio;
    
    localStorage.setItem('vistaActual', nombreVista);
    
    contenedor.innerHTML = '';
    vista(contenedor, navegar);
}

const vistaGuardada = localStorage.getItem('vistaActual') || 'inicio';
navegar(vistaGuardada);
*/