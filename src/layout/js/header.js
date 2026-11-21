import './../css/layout.css'
export function header(){
    const header = document.createElement('header');
    header.textContent = `Mis Practicas de Todo`;

    //Agregar al body
    document.body.appendChild(header)
}