import './../css/layout.css'
export function sidebar(){
    const aside = document.createElement('aside');
    aside.textContent = `Sidebar`;

    //Agregar al body
    document.body.appendChild(aside);
}