/* ============================================================
   FRAICHE · vistas.js
   Cada función devuelve { titulo, ruta, regreso, html }.
   - titulo  : texto que aparece en la barra superior
   - ruta    : migas de pan [{ texto, destino }]
   - regreso : hash al que lleva el botón de regresar ("" = oculto)
   ============================================================ */

/* ── Utilidades de plantilla ─────────────────────────────── */
const esc = (t) => String(t == null ? "" : t)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;")
  .replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const glifo = (nombre, clase) =>
  '<svg class="' + clase + '" viewBox="0 0 32 32" aria-hidden="true">' + (GLIFOS[nombre] || "") + "</svg>";

const marco = (nombreGlifo, etiqueta, clase) =>
  '<div class="marco ' + (clase || "") + '">' +
    glifo(nombreGlifo, "marco__glifo") +
    (etiqueta ? '<span class="marco__etiqueta">' + esc(etiqueta) + "</span>" : "") +
  "</div>";

/* Tarjeta de producto usada en todas las grillas */
function tarjetaProducto(p){
  const cat = Datos.categoria(p.categoria);
  return '<a class="producto" href="#/producto/' + esc(p.id) + '">' +
    marco(cat ? cat.glifo : "frasco", "Foto pendiente") +
    '<div class="producto__cuerpo">' +
      '<h3 class="producto__nombre">' + esc(p.nombre) + "</h3>" +
      '<p class="producto__inspiracion">' + (p.inspiracion ? "Inspirada en " + esc(p.inspiracion) : "Referencia pendiente") + "</p>" +
      '<p class="producto__precio">' + esc(Datos.precio(p.precio)) + "</p>" +
      '<p class="producto__ver">Ver producto</p>' +
    "</div>" +
  "</a>";
}

/* Espacios reservados: muestran dónde entrarán los productos reales */
function ranuras(cantidad){
  let html = "";
  for (let i = 0; i < cantidad; i++){
    html += '<div class="ranura" aria-hidden="true">Espacio de producto</div>';
  }
  return html;
}

function cabezaSeccion(titulo, texto){
  return '<div class="seccion__cabeza">' +
    '<h1 class="seccion__titulo">' + esc(titulo) + "</h1>" +
    '<div class="regla"></div>' +
    (texto ? '<p class="seccion__texto">' + esc(texto) + "</p>" : "") +
  "</div>";
}

/* ── INICIO ──────────────────────────────────────────────── */
function vistaInicio(){
  const tarjetas = CATEGORIAS.map(c =>
    '<a class="categoria' + (c.destacada ? " categoria--ancha" : "") + '" href="#/' + c.id + '">' +
      glifo(c.glifo, "categoria__glifo") +
      "<div>" +
        '<h3 class="categoria__nombre">' + esc(c.nombre) + "</h3>" +
        '<p class="categoria__nota">' + esc(c.nota) + "</p>" +
      "</div>" +
    "</a>"
  ).join("");

  const html =
    '<section class="portada">' +
      '<h1 class="portada__marca">' + esc(CONFIG.marca) + "</h1>" +
      '<p class="portada__linea">' + esc(CONFIG.lema) + "</p>" +
      '<p class="portada__texto">Catálogo para consultar productos, precios y presentaciones. Los pedidos se cierran por WhatsApp.</p>' +
    "</section>" +

    '<div class="atajos">' +
      '<a class="atajo" href="#/buscador">' + glifo("lupa", "") + "Buscar</a>" +
      '<a class="atajo" href="#/contacto">' + glifo("sobre", "") + "Contacto</a>" +
      '<a class="atajo atajo--whats" href="' + Datos.enlaceWhatsApp() + '" target="_blank" rel="noopener">' +
        glifo("whatsapp", "") + "WhatsApp</a>" +
    "</div>" +

    '<section class="bloque">' +
      '<h2 class="bloque__titulo">Categorías</h2>' +
      '<div class="categorias">' + tarjetas + "</div>" +
    "</section>" +

    '<section class="bloque">' +
      '<div class="entrega">' + glifo("camion", "") +
        "<span>" + esc(CONFIG.entregas) + "</span>" +
      "</div>" +
    "</section>";

  return { titulo: CONFIG.marca, ruta: [], regreso: "", html: html };
}

/* ── FRAGANCIAS (índice de subcategorías) ────────────────── */
function vistaFragancias(){
  const cat = Datos.categoria("fragancias");

  const filas = cat.subcategorias.map(s =>
    '<a class="subcategoria" href="#/fragancias/' + s.id + '">' +
      glifo(s.glifo, "subcategoria__glifo") +
      "<div>" +
        '<h3 class="subcategoria__nombre">' + esc(s.nombre) + "</h3>" +
        '<p class="subcategoria__nota">' + esc(s.nota) + "</p>" +
      "</div>" +
      '<svg class="subcategoria__flecha" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg>' +
    "</a>"
  ).join("");

  const html =
    cabezaSeccion("Fragancias", "Elige una línea para ver los productos disponibles.") +
    '<div class="subcategorias">' + filas + "</div>";

  return {
    titulo: "Fragancias",
    ruta: [{ texto: "Inicio", destino: "#/inicio" }, { texto: "Fragancias" }],
    regreso: "#/inicio",
    html: html
  };
}

/* ── LISTA DE PRODUCTOS (categoría o subcategoría) ───────── */
function vistaLista(idCat, idSub){
  const cat = Datos.categoria(idCat);
  if (!cat) return vistaNoEncontrada();

  const sub = idSub ? Datos.subcategoria(idCat, idSub) : null;
  if (idSub && !sub) return vistaNoEncontrada();

  const titulo = sub ? (sub.titulo || cat.nombre + " " + sub.nombre) : cat.nombre;
  const items = Datos.porCategoria(idCat, idSub);

  const descripcion = sub
    ? "Aquí se cargará el catálogo de " + sub.nombre.toLowerCase() + "."
    : "Sección preparada para sus subcategorías y productos.";

  const html =
    cabezaSeccion(titulo, descripcion) +
    '<div class="aviso"><strong>Catálogo pendiente.</strong> Esta vista ya está lista para recibir los productos reales. Por ahora muestra ' +
      (items.length ? "registros de prueba y " : "") + "los espacios donde entrarán las fichas.</div>" +
    '<div class="productos" style="margin-top:var(--paso-3)">' +
      items.map(tarjetaProducto).join("") +
      ranuras(items.length ? 4 : 6) +
    "</div>";

  const ruta = [{ texto: "Inicio", destino: "#/inicio" }];
  if (sub){
    ruta.push({ texto: cat.nombre, destino: "#/" + cat.id });
    ruta.push({ texto: sub.nombre });
  } else {
    ruta.push({ texto: cat.nombre });
  }

  return {
    titulo: titulo,
    ruta: ruta,
    regreso: sub ? "#/" + cat.id : "#/inicio",
    html: html
  };
}

/* ── FICHA INDIVIDUAL DE PRODUCTO ────────────────────────── */
function vistaProducto(id){
  const p = Datos.producto(id);
  if (!p) return vistaNoEncontrada();

  const cat = Datos.categoria(p.categoria);
  const sub = p.subcategoria ? Datos.subcategoria(p.categoria, p.subcategoria) : null;
  const destinoRegreso = sub ? "#/" + cat.id + "/" + sub.id : "#/" + cat.id;

  const etiquetas = [cat ? cat.nombre : "", p.genero, p.presentacion]
    .filter(Boolean)
    .map(t => '<span class="marca">' + esc(t) + "</span>")
    .join("");

  const bloqueInspiracion = p.inspiracion
    ? '<div class="inspiracion">' +
        marco("frasco", "") +
        "<div>" +
          '<h3 class="inspiracion__titulo">Inspirada en ' + esc(p.inspiracion) + "</h3>" +
          '<p class="inspiracion__texto">Aquí irá la referencia visual de la fragancia original.</p>' +
        "</div>" +
      "</div>"
    : '<div class="aviso" style="margin-top:var(--paso-4)"><strong>Inspiración.</strong> Cuando el producto esté inspirado en una fragancia original, aquí aparecerá su nombre y su imagen de referencia.</div>';

  const html =
    '<div class="ficha">' +
      '<div class="ficha__media">' + marco(cat ? cat.glifo : "frasco", "Imagen principal pendiente", "marco--ficha") + "</div>" +
      "<div>" +
        '<div class="ficha__cabeza">' +
          '<h1 class="ficha__nombre">' + esc(p.nombre) + "</h1>" +
          '<div class="ficha__meta">' + etiquetas + "</div>" +
          '<p class="ficha__precio">' + esc(Datos.precio(p.precio)) + "</p>" +
          '<p class="ficha__presentacion">Presentación: ' + esc(p.presentacion || "por definir") + "</p>" +
        "</div>" +

        '<div class="ficha__acciones">' +
          '<a class="boton boton--whats" href="' +
            Datos.enlaceWhatsApp("Hola, me interesa " + p.nombre + " del catálogo " + CONFIG.marca + ".") +
            '" target="_blank" rel="noopener">' + glifo("whatsapp", "") + "Pedir por WhatsApp</a>" +
        "</div>" +

        '<div class="entrega">' + glifo("camion", "") + "<span>" + esc(CONFIG.entregas) + "</span></div>" +

        '<div class="datos">' +
          fila("Categoría", cat ? cat.nombre : "—") +
          fila("Género", p.genero || "—") +
          fila("Presentación", p.presentacion || "—") +
          fila("Descripción", p.descripcion || "Pendiente.") +
        "</div>" +

        bloqueInspiracion +
      "</div>" +
    "</div>";

  const ruta = [{ texto: "Inicio", destino: "#/inicio" }];
  if (cat) ruta.push({ texto: cat.nombre, destino: "#/" + cat.id });
  if (sub) ruta.push({ texto: sub.nombre, destino: "#/" + cat.id + "/" + sub.id });
  ruta.push({ texto: "Producto" });

  return { titulo: p.nombre, ruta: ruta, regreso: destinoRegreso, html: html };
}

function fila(clave, valor){
  return '<div class="datos__fila"><span class="datos__clave">' + esc(clave) + "</span><span>" + esc(valor) + "</span></div>";
}

/* ── BUSCADOR ────────────────────────────────────────────── */
function vistaBuscador(){
  const filtros = [{ id: "todo", nombre: "Todo" }]
    .concat(CATEGORIAS.map(c => ({ id: c.id, nombre: c.nombre })))
    .map((f, i) =>
      '<button class="filtro" type="button" data-filtro="' + f.id + '" aria-pressed="' + (i === 0) + '">' +
        esc(f.nombre) + "</button>"
    ).join("");

  const html =
    cabezaSeccion("Buscar", "Escribe el nombre de un producto o la fragancia que lo inspira.") +
    '<div class="busqueda">' +
      '<svg viewBox="0 0 32 32" aria-hidden="true">' + GLIFOS.lupa + "</svg>" +
      '<label class="oculto-visual" for="campo-busqueda">Buscar en el catálogo</label>' +
      '<input id="campo-busqueda" type="search" autocomplete="off" placeholder="Buscar en el catálogo">' +
    "</div>" +
    '<div class="filtros" role="group" aria-label="Filtrar por categoría">' + filtros + "</div>" +
    '<div class="resultados" id="resultados"></div>';

  return {
    titulo: "Buscar",
    ruta: [{ texto: "Inicio", destino: "#/inicio" }, { texto: "Buscar" }],
    regreso: "#/inicio",
    html: html
  };
}

/* Resultados: se redibuja al escribir, sin recargar la vista */
function pintarResultados(texto, filtro){
  const caja = document.getElementById("resultados");
  if (!caja) return;

  if (!String(texto).trim()){
    caja.innerHTML = '<div class="aviso">Escribe al menos una palabra para ver resultados. ' +
      "Durante la Fase 1 solo hay registros de prueba cargados.</div>";
    return;
  }

  const encontrados = Datos.buscar(texto, filtro);

  if (!encontrados.length){
    caja.innerHTML = '<div class="aviso"><strong>Sin resultados para “' + esc(texto) + '”.</strong> ' +
      "Prueba con otra palabra o revisa las categorías desde el menú.</div>";
    return;
  }

  caja.innerHTML =
    '<p class="resultados__conteo">' + encontrados.length +
      (encontrados.length === 1 ? " resultado" : " resultados") + "</p>" +
    '<div class="productos">' + encontrados.map(tarjetaProducto).join("") + "</div>";
}

/* ── CONTACTO ────────────────────────────────────────────── */
function vistaContacto(){
  const html =
    cabezaSeccion("Contacto", "Pedidos, disponibilidad y entregas a domicilio.") +

    '<a class="boton boton--whats" href="' + Datos.enlaceWhatsApp() + '" target="_blank" rel="noopener">' +
      glifo("whatsapp", "") + "Escribir por WhatsApp</a>" +

    '<div class="contacto__lista">' +
      contactoFila("camion", "Entregas", CONFIG.entregas) +
      contactoFila("reloj", "Horario", CONFIG.horario) +
      contactoFila("sobre", "Correo", CONFIG.correo) +
    "</div>" +

    '<div class="aviso" style="margin-top:var(--paso-4)"><strong>Pendiente.</strong> ' +
      "El número de WhatsApp y los datos de contacto se configuran en un solo lugar: <code>assets/js/datos.js</code>.</div>";

  return {
    titulo: "Contacto",
    ruta: [{ texto: "Inicio", destino: "#/inicio" }, { texto: "Contacto" }],
    regreso: "#/inicio",
    html: html
  };
}

function contactoFila(nombreGlifo, clave, valor){
  return '<div class="contacto__fila">' +
    glifo(nombreGlifo, "") +
    "<div>" +
      '<p class="contacto__clave">' + esc(clave) + "</p>" +
      '<p class="contacto__valor">' + esc(valor) + "</p>" +
    "</div>" +
  "</div>";
}

/* ── RUTA INEXISTENTE ────────────────────────────────────── */
function vistaNoEncontrada(){
  return {
    titulo: "No encontrado",
    ruta: [{ texto: "Inicio", destino: "#/inicio" }, { texto: "No encontrado" }],
    regreso: "#/inicio",
    html: cabezaSeccion("Esa página no existe", "La dirección no corresponde a ninguna sección del catálogo.") +
      '<a class="boton boton--linea" href="#/inicio">Ir al inicio</a>'
  };
}
