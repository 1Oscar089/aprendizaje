import './../css/layout.css'
export function header(){
    const header = document.createElement('header');
    header.innerHTML = /*html*/`
    <span><svg viewBox="0 0 64 64" width="60" height="20">
  <path d="M5 5 L59 5 M5 32 L59 32 M5 59 L59 59" fill="none" stroke="white" stroke-width="12"/>
</svg></span>
    <p>Mis Practicas de Todo</p>
    `;

    //Agregar al body
    document.body.appendChild(header)
}