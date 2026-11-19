import { vistaInicio } from "./secciones/inicio";

const contenedor = document.getElementById('app');

const rutas = {
    'inicio': vistaInicio,
    /*'Unidad 1: Fundamentos, Sintaxis e Integración': vistaUnidad1*/
};

export function navegar(nombreVista) {
    const vista = rutas[nombreVista] || vistaInicio;
    
    localStorage.setItem('vistaActual', nombreVista);
    
    contenedor.innerHTML = '';
    vista(contenedor, navegar);
}

const vistaGuardada = localStorage.getItem('vistaActual') || 'inicio';
navegar(vistaGuardada);
