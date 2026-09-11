/* ============================================================
   FRAICHE · datos.js
   Única fuente de datos del catálogo.
   En la Fase 2 solo se edita ESTE archivo para cargar productos.
   ============================================================ */

/* ── Configuración del negocio ───────────────────────────── */
const CONFIG = {
  marca: "Fraiche",
  lema: "Perfumería y cuidado",
  // TODO Fase 2: sustituir por el número real, formato internacional sin signos.
  whatsapp: "520000000000",
  entregas: "Entregas a domicilio en la ciudad. Pedidos y disponibilidad por WhatsApp.",
  horario: "Lunes a sábado, 10:00 a 19:00",
  correo: "hola@fraiche.mx",
  moneda: "MXN"
};

/* ── Glifos (SVG en línea, sin archivos de imagen) ───────── */
const GLIFOS = {
  frasco:   '<path d="M13 3h6v4h-6z"/><path d="M11 7h10a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3z"/><path d="M8 14h16"/>',
  gota:     '<path d="M16 3c5 6.5 8 10.6 8 14.4A8 8 0 0 1 8 17.4C8 13.6 11 9.5 16 3z"/><path d="M12.5 18.5a3.5 3.5 0 0 0 3.5 3.5"/>',
  difusor:  '<path d="M12 13h8v14a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z"/><path d="M14 13V9h4v4"/><path d="M16 9V3"/><path d="M13 5.5 10 3.5M19 5.5 22 3.5"/>',
  hogar:    '<path d="M5 14 16 5l11 9"/><path d="M8 13v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V13"/><path d="M14 28v-7h4v7"/>',
  cosmetico:'<path d="M12 12h8v15a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z"/><path d="M13 12V6a3 3 0 0 1 6 0v6"/><path d="M12 17h8"/>',
  lupa:     '<circle cx="14" cy="14" r="8"/><path d="M20 20l7 7"/>',
  sobre:    '<rect x="4" y="7" width="24" height="18" rx="2"/><path d="m4 9 12 9 12-9"/>',
  whatsapp: '<path d="M16 3a13 13 0 0 0-11.2 19.5L3 29l6.7-1.8A13 13 0 1 0 16 3zm7.5 18.3c-.3.9-1.8 1.7-2.5 1.8-.7.1-1.5.1-2.4-.2-.6-.2-1.3-.4-2.2-.8-3.9-1.7-6.4-5.6-6.6-5.9-.2-.3-1.6-2.1-1.6-4s1-2.8 1.4-3.2c.4-.4.8-.5 1.1-.5h.8c.3 0 .6 0 .9.7l1.3 3c.1.2.2.5 0 .8l-.5.7-.5.5c-.2.2-.4.4-.2.8.2.4.9 1.6 2 2.5 1.4 1.2 2.5 1.6 2.9 1.8.4.2.6.1.8-.1l1.2-1.4c.3-.3.5-.2.8-.1l2.9 1.4c.3.2.6.3.7.4.1.3.1 1-.2 1.8z"/>',
  camion:   '<path d="M3 8h16v14H3z"/><path d="M19 12h5l4 4v6h-9"/><circle cx="9" cy="25" r="2.5"/><circle cx="23" cy="25" r="2.5"/>',
  reloj:    '<circle cx="16" cy="16" r="12"/><path d="M16 9v7l5 3"/>',
  pin:      '<path d="M16 29s9-8.2 9-14a9 9 0 1 0-18 0c0 5.8 9 14 9 14z"/><circle cx="16" cy="15" r="3.4"/>'
};

/* ── Árbol de categorías ─────────────────────────────────── */
/* Agregar una categoría nueva = agregar un objeto a esta lista. */
const CATEGORIAS = [
  {
    id: "fragancias",
    nombre: "Fragancias",
    nota: "Mujer · Hombre · Unisex",
    glifo: "frasco",
    destacada: true,
    subcategorias: [
      { id: "mujer",  nombre: "Mujer",            nota: "Fragancias femeninas",        glifo: "frasco" },
      { id: "hombre", nombre: "Hombre",           nota: "Fragancias masculinas",       glifo: "frasco" },
      { id: "unisex", nombre: "Unisex",           nota: "Para cualquier persona",      glifo: "frasco" },
      { id: "otras",  nombre: "Otras categorías", nota: "Espacio para nuevas líneas",  glifo: "frasco", titulo: "Otras categorías" }
    ]
  },
  { id: "cuidado-personal", nombre: "Cuidado personal", nota: "Cuerpo y piel",        glifo: "gota",      subcategorias: [] },
  { id: "aromatizantes",    nombre: "Aromatizantes",    nota: "Ambientes y autos",    glifo: "difusor",   subcategorias: [] },
  { id: "hogar",            nombre: "Hogar",            nota: "Aromas para la casa",  glifo: "hogar",     subcategorias: [] },
  { id: "cosmeticos",       nombre: "Cosméticos",       nota: "Maquillaje y belleza", glifo: "cosmetico", subcategorias: [] }
];

/* ── Clasificaciones para "Explorar fragancias" ──────────── */
/* Lista fija de la interfaz. Un producto puede tener varias, o ninguna. */
const FILTROS_EXPLORAR = [
  { id: "todas",            nombre: "Todas" },
  { id: "tendencias",       nombre: "Tendencias" },
  { id: "nuevas",           nombre: "Nuevas" },
  { id: "edicion-limitada", nombre: "Edición limitada" },
  { id: "clasicas",         nombre: "Clásicas" },
  { id: "esencias-master",  nombre: "Esencias Master" }
];

/* ── Esquema de producto ─────────────────────────────────── */
/*
  {
    id: "frg-001",              // único, nunca se repite — identificador interno
    clave: "",                  // clave corta de catálogo, visible al cliente (ej. "MUJ-014")
    nombre: "",                 // nombre comercial
    categoria: "fragancias",    // id de CATEGORIAS
    subcategoria: "mujer",      // id de subcategoría, o "" si no aplica
    genero: "Mujer",            // Mujer | Hombre | Unisex | ""
    presentacion: "100 ml",
    precio: 0,                  // número, sin símbolo
    imagen: "",                 // ruta a la foto; vacío = placeholder
    inspiracion: "",            // fragancia original que inspira, si aplica
    imagenInspiracion: "",      // ruta a la referencia visual
    aroma: "",                  // nota o aroma principal (ej. "Vainilla")
    clasificacion: "",          // familia olfativa (ej. "Floral", "Amaderada")
    momento: "",                // Día | Noche | ""
    etiquetas: [],              // ids de FILTROS_EXPLORAR que aplican (sin incluir "todas")
    descripcion: "",
    disponible: true
  }
*/

/* Datos mínimos de demostración para comprobar navegación, buscador y,
   en Mujer, el explorador de catálogo. NO son productos reales: se
   eliminan al incorporar las 95 fragancias reales. */
const PRODUCTOS = [
  {
    id: "demo-01",
    clave: "MUJ-DEMO-01",
    nombre: "Demostración 01",
    categoria: "fragancias",
    subcategoria: "mujer",
    genero: "Mujer",
    presentacion: "100 ml",
    precio: 0,
    imagen: "",
    inspiracion: "Referencia de prueba A",
    imagenInspiracion: "",
    aroma: "Aroma de prueba 1",
    clasificacion: "Floral",
    momento: "Día",
    etiquetas: ["tendencias", "nuevas"],
    descripcion: "Registro de prueba. Sirve para verificar que la ficha individual abre y regresa correctamente.",
    disponible: true
  },
  {
    id: "demo-05",
    clave: "MUJ-DEMO-02",
    nombre: "Demostración 05",
    categoria: "fragancias",
    subcategoria: "mujer",
    genero: "Mujer",
    presentacion: "50 ml",
    precio: 0,
    imagen: "",
    inspiracion: "Referencia de prueba B",
    imagenInspiracion: "",
    aroma: "Aroma de prueba 2",
    clasificacion: "Amaderada",
    momento: "Noche",
    etiquetas: ["clasicas"],
    descripcion: "Registro de prueba para comprobar una segunda familia de inspiración y de aroma.",
    disponible: true
  },
  {
    id: "demo-06",
    clave: "MUJ-DEMO-03",
    nombre: "Demostración 06",
    categoria: "fragancias",
    subcategoria: "mujer",
    genero: "Mujer",
    presentacion: "100 ml",
    precio: 0,
    imagen: "",
    inspiracion: "Referencia de prueba A",
    imagenInspiracion: "",
    aroma: "Aroma de prueba 1",
    clasificacion: "Oriental",
    momento: "Noche",
    etiquetas: ["edicion-limitada", "esencias-master"],
    descripcion: "Registro de prueba para comprobar varias clasificaciones activas a la vez.",
    disponible: true
  },
  {
    id: "demo-02",
    clave: "",
    nombre: "Demostración 02",
    categoria: "fragancias",
    subcategoria: "hombre",
    genero: "Hombre",
    presentacion: "100 ml",
    precio: 0,
    imagen: "",
    inspiracion: "",
    imagenInspiracion: "",
    aroma: "",
    clasificacion: "",
    momento: "",
    etiquetas: [],
    descripcion: "Registro de prueba para la vista de fragancias de hombre.",
    disponible: true
  },
  {
    id: "demo-03",
    clave: "",
    nombre: "Demostración 03",
    categoria: "fragancias",
    subcategoria: "unisex",
    genero: "Unisex",
    presentacion: "50 ml",
    precio: 0,
    imagen: "",
    inspiracion: "",
    imagenInspiracion: "",
    aroma: "",
    clasificacion: "",
    momento: "",
    etiquetas: [],
    descripcion: "Registro de prueba para la vista unisex y para el buscador.",
    disponible: true
  },
  {
    id: "demo-04",
    clave: "",
    nombre: "Demostración 04",
    categoria: "cuidado-personal",
    subcategoria: "",
    genero: "",
    presentacion: "250 ml",
    precio: 0,
    imagen: "",
    inspiracion: "",
    imagenInspiracion: "",
    aroma: "",
    clasificacion: "",
    momento: "",
    etiquetas: [],
    descripcion: "Registro de prueba fuera de fragancias, para comprobar los filtros del buscador.",
    disponible: true
  }
];

/* ── Consultas ───────────────────────────────────────────── */
const Datos = {
  categoria(id){
    return CATEGORIAS.find(c => c.id === id) || null;
  },

  subcategoria(idCat, idSub){
    const cat = this.categoria(idCat);
    if (!cat) return null;
    return cat.subcategorias.find(s => s.id === idSub) || null;
  },

  producto(id){
    return PRODUCTOS.find(p => p.id === id) || null;
  },

  porCategoria(idCat, idSub){
    return PRODUCTOS.filter(p =>
      p.categoria === idCat && (!idSub || p.subcategoria === idSub)
    );
  },

  /* Catálogo filtrable de una subcategoría de Fragancias (hoy: Mujer).
     criterios = { texto, etiqueta, inspiracion, aroma }, todos opcionales
     y combinables entre sí sobre el mismo conjunto de productos. */
  explorar(idSub, criterios){
    criterios = criterios || {};
    const texto = String(criterios.texto || "").trim().toLowerCase();
    const etiqueta = criterios.etiqueta || "todas";
    const inspiracion = criterios.inspiracion || "";
    const aroma = criterios.aroma || "";

    return PRODUCTOS.filter(p => {
      if (p.categoria !== "fragancias" || p.subcategoria !== idSub) return false;
      if (etiqueta !== "todas" && !(p.etiquetas || []).includes(etiqueta)) return false;
      if (inspiracion && p.inspiracion !== inspiracion) return false;
      if (aroma && p.aroma !== aroma) return false;
      if (texto){
        const campos = (p.nombre + " " + (p.clave || "") + " " + p.inspiracion).toLowerCase();
        if (!campos.includes(texto)) return false;
      }
      return true;
    });
  },

  /* Valores únicos de un campo dentro de una lista, con conteo — usado por
     "Explorar por inspiración" y "Explorar por aroma". Crece solo con los datos:
     si una familia tiene 10 productos aparece con 10; si luego tiene 15, con 15. */
  valoresUnicos(lista, campo){
    const conteo = new Map();
    lista.forEach(p => {
      const v = p[campo];
      if (!v) return;
      conteo.set(v, (conteo.get(v) || 0) + 1);
    });
    return Array.from(conteo, ([valor, cantidad]) => ({ valor: valor, cantidad: cantidad }))
      .sort((a, b) => a.valor.localeCompare(b.valor, "es"));
  },

  /* Búsqueda por nombre e inspiración. Se ampliará en la Fase 2. */
  buscar(texto, idCat){
    const q = String(texto || "").trim().toLowerCase();
    if (!q) return [];
    return PRODUCTOS.filter(p => {
      const coincideCat = !idCat || idCat === "todo" || p.categoria === idCat;
      const campos = (p.nombre + " " + p.inspiracion + " " + p.genero).toLowerCase();
      return coincideCat && campos.includes(q);
    });
  },

  precio(valor){
    if (!valor) return "Precio por confirmar";
    return "$" + Number(valor).toLocaleString("es-MX") + " " + CONFIG.moneda;
  },

  enlaceWhatsApp(mensaje){
    const texto = encodeURIComponent(mensaje || ("Hola, vi el catálogo " + CONFIG.marca + " y quiero información."));
    return "https://wa.me/" + CONFIG.whatsapp + "?text=" + texto;
  }
};
