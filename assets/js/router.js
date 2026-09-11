/* ============================================================
   FRAICHE · router.js
   Navegación por hash. Cada ruta es una interfaz independiente.

   #/inicio
   #/fragancias
   #/fragancias/mujer | hombre | unisex | otras
   #/cuidado-personal | aromatizantes | hogar | cosmeticos
   #/buscador
   #/contacto
   #/producto/{id}
   ============================================================ */

const Router = {
  contenedor: null,
  alCambiar: null,   // callback que app.js usa para actualizar barra y menú

  iniciar(contenedor, alCambiar){
    this.contenedor = contenedor;
    this.alCambiar = alCambiar;
    window.addEventListener("hashchange", () => this.resolver());
    this.resolver();
  },

  /* Devuelve los segmentos de la ruta actual: "#/fragancias/mujer" → ["fragancias","mujer"] */
  segmentos(){
    const bruto = window.location.hash.replace(/^#\/?/, "").replace(/\/+$/, "");
    if (!bruto) return ["inicio"];
    return bruto.split("/").filter(Boolean).map(decodeURIComponent);
  },

  resolver(){
    const s = this.segmentos();
    const vista = this.vistaPara(s);

    this.contenedor.innerHTML = vista.html;
    this.contenedor.classList.remove("vista--entra");
    void this.contenedor.offsetWidth;          // reinicia la animación de entrada
    this.contenedor.classList.add("vista--entra");

    window.scrollTo(0, 0);
    document.title = vista.titulo + " · " + CONFIG.marca;

    if (typeof this.alCambiar === "function") this.alCambiar(vista, s);
  },

  vistaPara(s){
    const raiz = s[0];

    if (raiz === "inicio")   return vistaInicio();
    if (raiz === "buscador") return vistaBuscador();
    if (raiz === "contacto") return vistaContacto();

    if (raiz === "producto"){
      return s[1] ? vistaProducto(s[1]) : vistaNoEncontrada();
    }

    if (raiz === "fragancias"){
      return s[1] ? vistaLista("fragancias", s[1]) : vistaFragancias();
    }

    /* Resto de categorías: una interfaz independiente por cada una */
    if (Datos.categoria(raiz)){
      return vistaLista(raiz, s[1] || null);
    }

    return vistaNoEncontrada();
  },

  ir(destino){
    window.location.hash = destino;
  }
};
