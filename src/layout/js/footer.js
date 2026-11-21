import './../css/layout.css'
export function footer(){
    const footer = document.createElement('footer');
    footer.textContent = `Oscar Mejía - 2026`;

    //Agregar al body
    document.body.appendChild(footer)
}