import './inicio.css'

export function vistaInicio(contenedor){
  const html = /*html*/`
    <h2>Bienvenido</h2>
    <p>En esta página iré colocando mis aprendizajes sobre diferentes contenidos</p>
  `;
  contenedor.innerHTML = html;
}

/*const listado = [
  { nombre: 'CSS' },
  { nombre: 'HTML' },
  { nombre: 'JS' }
];

export function vistaInicio(contenedor, navegar) {
  // Establecer la lista no numerada
  const ul = document.createElement('ul');

  listado.forEach((item) => {
    let li = document.createElement('li');
    li.textContent = item.nombre;
    ul.appendChild(li);
  });

  // Agregar la lista no numerada al documento
  contenedor.appendChild(ul);
}
*/
