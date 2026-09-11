/* ============================================================
   FRAICHE · app.js
   Une el router con la barra superior, el menú y el buscador.
   ============================================================ */

(function(){
  const contenido   = document.getElementById("contenido");
  const barraMarca  = document.getElementById("barra-marca");
  const migas       = document.getElementById("ruta");
  const btnRegresar = document.getElementById("btn-regresar");
  const btnMenu     = document.getElementById("btn-menu");
  const btnCerrar   = document.getElementById("btn-cerrar-menu");
  const menu        = document.getElementById("menu");
  const velo        = document.getElementById("velo");
  const menuLista   = document.getElementById("menu-lista");
  const pieEntregas = document.getElementById("pie-entregas");

  let destinoRegreso = "";

  /* ── Menú: se construye desde CATEGORIAS ───────────────── */
  function construirMenu(){
    let html = enlaceMenu("#/inicio", "Inicio", "");

    CATEGORIAS.forEach(c => {
      html += enlaceMenu("#/" + c.id, c.nombre, c.subcategorias.length ? c.subcategorias.length + " líneas" : "");
      if (c.subcategorias.length){
        html += '<li><ul class="menu__sub">' +
          c.subcategorias.map(s => enlaceMenu("#/" + c.id + "/" + s.id, s.nombre, "")).join("") +
          "</ul></li>";
      }
    });

    html += enlaceMenu("#/buscador", "Buscar", "");
    html += enlaceMenu("#/contacto", "Contacto", "");
    menuLista.innerHTML = html;
  }

  function enlaceMenu(destino, texto, nota){
    return '<li><a class="menu__enlace" href="' + destino + '">' + esc(texto) +
      (nota ? "<em>" + esc(nota) + "</em>" : "") + "</a></li>";
  }

  function abrirMenu(){
    menu.hidden = false;
    velo.hidden = false;
    requestAnimationFrame(() => menu.classList.add("abierto"));
    btnMenu.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function cerrarMenu(){
    menu.classList.remove("abierto");
    velo.hidden = true;
    btnMenu.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    setTimeout(() => { if (!menu.classList.contains("abierto")) menu.hidden = true; }, 220);
  }

  btnMenu.addEventListener("click", abrirMenu);
  btnCerrar.addEventListener("click", cerrarMenu);
  velo.addEventListener("click", cerrarMenu);
  menu.addEventListener("click", e => { if (e.target.closest("a")) cerrarMenu(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") cerrarMenu(); });

  /* ── Botón de regreso ──────────────────────────────────── */
  btnRegresar.addEventListener("click", () => {
    if (history.length > 1) history.back();
    else if (destinoRegreso) Router.ir(destinoRegreso);
  });

  /* ── Barra superior y migas de pan ─────────────────────── */
  function actualizarBarra(vista){
    destinoRegreso = vista.regreso;
    btnRegresar.hidden = !vista.regreso;

    barraMarca.textContent = vista.ruta.length ? vista.titulo : CONFIG.marca;

    migas.innerHTML = vista.ruta.map((m, i) => {
      const sep = i ? "<span>/</span>" : "";
      return sep + (m.destino
        ? '<a href="' + m.destino + '">' + esc(m.texto) + "</a>"
        : esc(m.texto));
    }).join("");

    const actual = window.location.hash || "#/inicio";
    menuLista.querySelectorAll(".menu__enlace").forEach(a => {
      if (a.getAttribute("href") === actual) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }

  /* ── Buscador: se enlaza solo cuando esa vista está montada ─ */
  function enlazarBuscador(segmentos){
    if (segmentos[0] !== "buscador") return;

    const campo = document.getElementById("campo-busqueda");
    const botones = Array.from(document.querySelectorAll(".filtro"));
    let filtro = "todo";

    pintarResultados("", filtro);

    campo.addEventListener("input", () => pintarResultados(campo.value, filtro));

    botones.forEach(b => {
      b.addEventListener("click", () => {
        filtro = b.dataset.filtro;
        botones.forEach(o => o.setAttribute("aria-pressed", String(o === b)));
        pintarResultados(campo.value, filtro);
      });
    });

    campo.focus({ preventScroll: true });
  }

  /* ── Arranque ──────────────────────────────────────────── */
  pieEntregas.textContent = CONFIG.entregas;
  construirMenu();

  Router.iniciar(contenido, (vista, segmentos) => {
    actualizarBarra(vista);
    enlazarBuscador(segmentos);
  });
})();
