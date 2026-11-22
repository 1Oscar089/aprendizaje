import "./css/styles.css";
import { variables } from "./css/variables.js";

const temasCss = {
  variables: variables,
};

export function vistaCss(contenedor) {
  const css = /*html*/ `
    <h2>Bienvenido</h2>
    <p>En esta página iré colocando mis aprendizajes sobre CSS</p>
    
    <span class="modal" id="variables">Variables</span>

    <dialog id="modal-css">
      <button id="cerrar-modal" class="btn-cerrar" aria-label="Cerrar">&times;</button>
      <div id="modal-body" class="modal-body"></div>
    </dialog>
  `;

  contenedor.innerHTML = css;

  const modalcss = contenedor.querySelector("#modal-css");
  const modalBody = contenedor.querySelector("#modal-body");
  const btnCerrar = contenedor.querySelector("#cerrar-modal");

  // Cerrar con la X
  btnCerrar.addEventListener("click", () => modalcss.close());

  // Cerrar al hacer clic fuera del modal (en el fondo oscuro)
  modalcss.addEventListener("click", (e) => {
    if (e.target === modalcss) modalcss.close();
  });

  // Abrir tema dinámico
  contenedor.addEventListener("click", async (e) => {
    if (e.target.classList.contains("modal")) {
      const cargarContenido = temasCss[e.target.id];
      if (cargarContenido) {
        modalBody.innerHTML = "";
        await cargarContenido(modalBody);
        modalcss.showModal();
      }
    }
  });
}
