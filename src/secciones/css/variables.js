import { codeToHtml } from "shiki";

export async function variables(modalBody) {
  // 1. Título
  const titulo = document.createElement("h4");
  titulo.textContent = "Título del Tema";

  // 2. Explicación (opcional)
  const descripcion = document.createElement("p");
  descripcion.textContent = "Breve explicación de cómo funciona este concepto.";

  // 3. Bloque de código con Shiki
  const codigo = `/* Tu código CSS aquí */`;

  const htmlResaltado = await codeToHtml(codigo, {
    lang: "css",
    theme: "github-dark",
  });

  const bloqueCodigo = document.createElement("div");
  bloqueCodigo.innerHTML = htmlResaltado;

  // 4. Insertar todo en el contenedor del modal
  modalBody.append(titulo, descripcion, bloqueCodigo);
}
