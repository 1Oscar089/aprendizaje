import './../css/layout.css'

const palabras = ["Inicio", "Css"];
const items = [
  palabras[0],
  ...palabras.slice(1).sort((a, b) => a.localeCompare(b))
];
export function sidebar(){
    const aside = document.createElement('aside');
    for (let i= 0; i < items.length; i++) {
        let li = document.createElement("li");
        li.className = "sidebar-item"
        li.textContent = items[i];

        aside.appendChild(li);
    }

    //Agregar al body
    document.body.appendChild(aside);
}

export let vista = Number(localStorage.getItem('menuActivo') ?? 0);

document.addEventListener('DOMContentLoaded', () => {
    const aside = document.querySelector('aside');
    if (!aside) return;

    const items = Array.from(aside.querySelectorAll('li'));
    if (items[vista]) items[vista].classList.add('activo');

    aside.addEventListener('click', (e) => {
        const itemClickeado = e.target.closest('li');
        if (!itemClickeado || !aside.contains(itemClickeado)) return;

        aside.querySelector('li.activo')?.classList.remove('activo');
        itemClickeado.classList.add('activo');

        const nuevoIndice = items.indexOf(itemClickeado);
        localStorage.setItem('menuActivo', nuevoIndice);
        vista = nuevoIndice;

        // Avisamos a toda la aplicación que la vista cambió
        document.dispatchEvent(new CustomEvent('cambioVista', { detail: vista }));
    });
});