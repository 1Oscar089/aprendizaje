import './../css/layout.css'

const palabras = ["Inicio","HTML", "Css", "Javascript"];
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
document.addEventListener('DOMContentLoaded', () => {
  const aside = document.querySelector('aside');

  if (aside) {
    // 1. Obtenemos todos los <li> del aside en una lista (array)
    const items = Array.from(aside.querySelectorAll('li'));

    // 2. Leemos el índice guardado (si no existe, usamos '0' que es el primero)
    const indiceGuardado = localStorage.getItem('menuActivo') ?? 0;

    // 3. Si el elemento existe en esa posición, le ponemos la clase 'activo'
    if (items[indiceGuardado]) {
      items[indiceGuardado].classList.add('activo');
    }

    // 4. Al hacer clic, actualizamos la clase y guardamos el nuevo índice
    aside.addEventListener('click', (e) => {
      const itemClickeado = e.target.closest('li');
      if (!itemClickeado || !aside.contains(itemClickeado)) return;

      const activoActual = aside.querySelector('li.activo');
      if (activoActual) {
        activoActual.classList.remove('activo');
      }

      itemClickeado.classList.add('activo');

      // Buscamos en qué posición (0, 1, 2...) está el <li> clickeado y lo guardamos
      const nuevoIndice = items.indexOf(itemClickeado);
      localStorage.setItem('menuActivo', nuevoIndice);
    });
  }
});
