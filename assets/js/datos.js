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

/* ── Clasificación comercial para "Explorar fragancias" ──── */
/* Estructura oficial de la interfaz. "valor" es el texto exacto que se
   guarda en producto.clasificacion; "todas" no filtra. */
const FILTROS_EXPLORAR = [
  { id: "todas",            nombre: "Todas" },
  { id: "tendencias",       nombre: "Tendencias",       valor: "Tendencias" },
  { id: "edicion-limitada", nombre: "Edición Limitada", valor: "Edición Limitada" },
  { id: "clasicas",         nombre: "Clásicas",         valor: "Clásicas" },
  { id: "esencias-master",  nombre: "Esencias Master",  valor: "Esencias Master" }
];

/* ── Casas de inspiración (Fase B/C) ─────────────────────── */
/* Catálogo maestro real: Catalogo_Maestro_Inspiraciones_Dama_2026.json
   (75 casas). NO se editan nombres ni referencias aquí a mano; para
   actualizar se reemplaza este arreglo completo desde la fuente maestra. */
const CASAS_INSPIRACION = [
  { id: "paco-rabanne", nombre: "Paco Rabanne", referencias: ["1 Million Gold for Her","Lady Million","Olympea"] },
  { id: "burberry", nombre: "Burberry", referencias: ["Her Parfum","Her Elixir / Her LXR","Her","Goddess"] },
  { id: "nicola-porcella-l-nea-fraiche", nombre: "Nicola Porcella / línea Fraiche", referencias: ["D1 X Ciento"] },
  { id: "carolina-herrera", nombre: "Carolina Herrera", referencias: ["212","212 H2O","212 Heroes Forever Young","Carolina Herrera","212 VIP Rosé","212 VIP Rosé I Love New York","CH Pasion","212 VIP Wins Women","CH Wild Love","212 Sexy","CH Woman / Hot Hot","212 VIP","212 VIP Rosé Rodeo","CH Carolina Herrera","La Bomba","Good Girl Superstars","Good Girl","Good Girl Midnight","Good Girl Velvet Fatale","Good Girl Blush Elixir","Good Girl Dazzling Garden","Good Girl Blush","Very Good Girl","Very Good Girl Elixir"] },
  { id: "escada", nombre: "Escada", referencias: ["Candy Love","Sorbetto Rosso","Party Love","Tropical Punch"] },
  { id: "prada", nombre: "Prada", referencias: ["Candy","Paradoxe"] },
  { id: "dkny", nombre: "DKNY", referencias: ["24/7","Be Delicious","DKNY Be 100% Delicious / Be Deli","Red Delicious","Red Door"] },
  { id: "perry-ellis", nombre: "Perry Ellis", referencias: ["360","360 Red","Perry Ellis"] },
  { id: "chanel", nombre: "Chanel", referencias: ["Chance Eau Splendide","Nº5","Coco Mademoiselle","Coco","Chance","Chance Eau Tendre","Chance Eau Fraîche"] },
  { id: "issey-miyake", nombre: "Issey Miyake", referencias: ["L'Eau d'Issey"] },
  { id: "mugler", nombre: "Mugler", referencias: ["Alien Goddess","Angel","Angel Fantasm"] },
  { id: "ariana-grande", nombre: "Ariana Grande", referencias: ["Cloud","Cloud Pink","Angel Kiss","Ari","God Is A Woman","Moonlight","Thank U, Next / Next Girlfriend","Sweet Like Candy","Thank U, Next","R.E.M.","R.E.M. Cherry Eclipse"] },
  { id: "khlo-kardashian", nombre: "Khloé Kardashian", referencias: ["Almost Always"] },
  { id: "givenchy", nombre: "Givenchy", referencias: ["Amarige","Ange ou Démon Le Secret","Ange ou Démon","Organza"] },
  { id: "coach", nombre: "Coach", referencias: ["Sunset Dreams"] },
  { id: "cacharel", nombre: "Cacharel", referencias: ["Amor Amor"] },
  { id: "davidoff", nombre: "Davidoff", referencias: ["Cool Water"] },
  { id: "kylie-jenner", nombre: "Kylie Jenner", referencias: ["Cosmic"] },
  { id: "melanie-martinez", nombre: "Melanie Martinez", referencias: ["Cry Baby"] },
  { id: "animale", nombre: "Animale", referencias: ["Animale"] },
  { id: "versace", nombre: "Versace", referencias: ["Crystal Noir","Bright Crystal Parfum","Bright Crystal","Eros","Versace","Versense"] },
  { id: "giorgio-armani", nombre: "Giorgio Armani", referencias: ["Acqua di Giò","Acqua di Gioia","Emporio Armani","My Way","My Way Nectar","My Way Ylang / Sunny Vanilla"] },
  { id: "marc-jacobs", nombre: "Marc Jacobs", referencias: ["Daisy","Daisy Eau So Fresh","Daisy Eau So Intense","Daisy Love","Decadence","Perfect Elixir","Perfect"] },
  { id: "kim-kardashian", nombre: "Kim Kardashian", referencias: ["Bae","BFF","Kimoji Cherry"] },
  { id: "dolce-gabbana", nombre: "Dolce & Gabbana", referencias: ["Devotion","Light Blue","The Only One"] },
  { id: "yves-saint-laurent", nombre: "Yves Saint Laurent", referencias: ["Black Opium","Black Opium Eau de Toilette","Black Opium Glitter","Libre Berry Crush","Libre","Libre Absolu Platine"] },
  { id: "victoria-s-secret", nombre: "Victoria's Secret", referencias: ["Bombshell Nights","Tease Crème Cloud / Tease","Pink by Pink","Royal Secret"] },
  { id: "viktor-rolf", nombre: "Viktor&Rolf", referencias: ["Bonbon","Flowerbomb"] },
  { id: "valentino", nombre: "Valentino", referencias: ["Born in Roma Pink","Voce Viva"] },
  { id: "avnaclehnotilnioa", nombre: "AVNaCleHnOtiLnIoA", referencias: ["Born in Roma Purple Melancholia"] },
  { id: "hugo-boss", nombre: "Hugo Boss", referencias: ["Boss Orange","The Scent Elixir","Hugo"] },
  { id: "paris-hilton", nombre: "Paris Hilton", referencias: ["Can Can","Love Rush","Gold Rush","Heiress","Paris Hilton"] },
  { id: "calvin-klein", nombre: "Calvin Klein", referencias: ["Eternity","Euphoria","Euphoria Eau de Parfum"] },
  { id: "dior", nombre: "Dior", referencias: ["J'adore","Miss Dior Eau de Parfum","Miss Dior Essence","Miss Dior Parfum","Miss Dior Blooming Bouquet","Poison Girl","Poison"] },
  { id: "jean-paul-gaultier", nombre: "Jean Paul Gaultier", referencias: ["Classique","La Belle Flower","La Belle Paradise Garden","Scandal Absolu","Scandal"] },
  { id: "britney-spears", nombre: "Britney Spears", referencias: ["Jungle Fantasy","Fantasy","Midnight Fantasy"] },
  { id: "coty", nombre: "Coty", referencias: ["Exclamation"] },
  { id: "lady-gaga", nombre: "Lady Gaga", referencias: ["Fame Couture","Fame in Love","Fame Parfum","Fame"] },
  { id: "kenzo", nombre: "Kenzo", referencias: ["Amour","Kenzo World","Flower"] },
  { id: "katy-perry", nombre: "Katy Perry", referencias: ["Killer Queen","Mad Love","Meow","Purr"] },
  { id: "lacoste", nombre: "Lacoste", referencias: ["L.12.12 Natural","Lacoste Pour Femme"] },
  { id: "ferrioni", nombre: "Ferrioni", referencias: ["Green Tea"] },
  { id: "gucci", nombre: "Gucci", referencias: ["Flora Gorgeous Gardenia","Flora Gorgeous Magnolia","Flora Gorgeous Orchid","Bamboo","Gucci Bloom Intense","Rush"] },
  { id: "lanc-me", nombre: "Lancôme", referencias: ["La Vie Est Belle","Idôle","Poême"] },
  { id: "moschino", nombre: "Moschino", referencias: ["Funny!","I Love Love","Toy 2","Toy 2 Bubble Gum"] },
  { id: "tous", nombre: "Tous", referencias: ["Gems Party","LoveMe","LoveMe The Onyx / Elixir","More More Pink","Tesoro","Tous","Tous H2O"] },
  { id: "jennifer-lopez", nombre: "Jennifer Lopez", referencias: ["Limitless"] },
  { id: "gloria-vanderbilt", nombre: "Gloria Vanderbilt", referencias: ["Vanderbilt"] },
  { id: "sofia-vergara", nombre: "Sofia Vergara", referencias: ["Love"] },
  { id: "lcuatreolina-herrera", nombre: "LCUaTrEolina Herrera", referencias: ["Good Girl Jasmine Absolute"] },
  { id: "est-e-lauder", nombre: "Estée Lauder", referencias: ["Modern Muse Blush","Modern Muse Vanilla","Pleasures"] },
  { id: "guess", nombre: "Guess", referencias: ["Guess Girl"] },
  { id: "guerlain", nombre: "Guerlain", referencias: ["Mon Guerlain","Mon Guerlain / Mon Paris Couture","Samsara"] },
  { id: "j-del-pozo", nombre: "J. del Pozo", referencias: ["Halloween","Halloween Blossom","Halloween Hypnotic"] },
  { id: "jovan", nombre: "Jovan", referencias: ["Musk"] },
  { id: "narciso-rodriguez", nombre: "Narciso Rodriguez", referencias: ["Narciso 4 Her Forever","Narciso 4 Her Intense","Narciso Eau de Parfum Cristal"] },
  { id: "s40ol-de-janeiro", nombre: "S40ol de Janeiro", referencias: ["Cheirosa 40"] },
  { id: "s68ol-de-janeiro", nombre: "S68ol de Janeiro", referencias: ["Cheirosa 68"] },
  { id: "solo-ella", nombre: "Solo Ella /?", referencias: ["Solo Ella Elixir"] },
  { id: "bvlgari", nombre: "Bvlgari", referencias: ["Omnia Crystalline"] },
  { id: "tory-burch", nombre: "Tory Burch", referencias: ["Sublime"] },
  { id: "paloma-picasso", nombre: "Paloma Picasso", referencias: ["Paloma Picasso"] },
  { id: "sabrina-carpenter", nombre: "Sabrina Carpenter", referencias: ["Sweet Tooth","Sweet Tooth Cherry","Sweet Tooth Espresso","Sweet Tooth Caramel"] },
  { id: "one-direction", nombre: "One Direction", referencias: ["That Moment"] },
  { id: "tommy-hilfiger", nombre: "Tommy Hilfiger", referencias: ["Tommy Girl"] },
  { id: "benetton", nombre: "Benetton", referencias: ["Tribù"] },
  { id: "ariana-quinta", nombre: "Ariana? / Quinta", referencias: [] },
  { id: "ralph-lauren", nombre: "Ralph Lauren", referencias: ["Ralph","Ralph Fresh","Romance"] },
  { id: "juicy-couture", nombre: "Juicy Couture", referencias: ["Viva La Juicy Rose"] },
  { id: "elizabeth-taylor", nombre: "Elizabeth Taylor", referencias: ["White Diamonds"] },
  { id: "wicked-glinda", nombre: "Wicked / Glinda", referencias: ["Glinda"] },
  { id: "rihanna", nombre: "Rihanna", referencias: ["Riri"] },
  { id: "chopard", nombre: "Chopard?", referencias: ["Wish Pink"] },
  { id: "christina-aguilera", nombre: "Christina Aguilera", referencias: ["Christina Aguilera"] },
  { id: "shakira", nombre: "Shakira", referencias: ["S Kiss"] }
];

/* ── Esquema de producto ─────────────────────────────────── */
/*
  {
    id: "frg-001",              // único, nunca se repite — identificador interno
    clave: "",                  // clave corta de catálogo, visible al cliente (ej. "01/03627A")
    nombre: "",                 // nombre comercial
    categoria: "fragancias",    // id de CATEGORIAS
    subcategoria: "mujer",      // id de subcategoría, o "" si no aplica
    genero: "Mujer",            // Mujer | Hombre | Unisex | ""
    presentacion: "100 ml",
    precio: 0,                  // número, sin símbolo
    imagen: "",                 // ruta a la foto; vacío = placeholder
    inspiracion: "",            // casa/marca de inspiración (ej. "Chanel") — ver CASAS_INSPIRACION
    referenciaInspiracion: null, // perfume específico de esa casa (ej. "Coco Mademoiselle"); null si aún no se determina
    imagenInspiracion: "",      // ruta a la referencia visual
    aroma: "",                  // nota o aroma principal (ej. "Vainilla")
    familiaOlfativa: "",        // familia olfativa (ej. "Floral", "Amaderada")
    momento: "",                // Día | Noche | ""
    descripcion: "",
    disponible: true,

    // Los dos campos siguientes son de CLASIFICACIÓN COMERCIAL (Fase A).
    // Para Dama (subcategoria "mujer") se asignan automáticamente por
    // CLAVE al final de este archivo — no se escriben a mano aquí.
    clasificacion: "Pendiente de clasificación", // Tendencias | Edición Limitada | Clásicas | Esencias Master | Pendiente de clasificación
    subclasificacionTendencia: null              // "Tendencia Nicola" | "Nueva Tendencia" | null
  }
*/

/* Mujer/Dama (268 registros) usa el catálogo maestro real, cargado más
   abajo. Hombre, Unisex y Cuidado personal todavía usan registros de
   demostración — NO son productos reales, se eliminan cuando lleguen
   sus catálogos definitivos. */
const PRODUCTOS = [
  /* ── Catálogo real Dama (268 registros) ──────────────────
     Fuente: Catalogo_Maestro_Inspiraciones_Dama_2026.json.
     NO se editan claves, nombres, inspiraciones ni referencias aquí a
     mano — este bloque se regenera completo desde la fuente maestra. */
  { id: "dama-1", clave: "01/03627A", nombre: "D1 MILLION GOLDHER", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Paco Rabanne", referenciaInspiracion: "1 Million Gold for Her", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-2", clave: "01/04178A", nombre: "DBURBERRY HER PARFUM", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Burberry", referenciaInspiracion: "Her Parfum", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-3", clave: "01/03616", nombre: "D1 X CIENTO", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Nicola Porcella / línea Fraiche", referenciaInspiracion: "D1 X Ciento", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-4", clave: "01/00001A", nombre: "D212", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Carolina Herrera", referenciaInspiracion: "212", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-5", clave: "01/02607A", nombre: "DCANDY LOVE ESC", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Escada", referenciaInspiracion: "Candy Love", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-6", clave: "01/00005B", nombre: "D212 H2O", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Carolina Herrera", referenciaInspiracion: "212 H2O", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-7", clave: "01/02043A", nombre: "DCANDY PRADA", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Prada", referenciaInspiracion: "Candy", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-8", clave: "01/02852A", nombre: "D212 HEROES FOREV", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Carolina Herrera", referenciaInspiracion: "212 Heroes Forever Young", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-9", clave: "01/00025A", nombre: "DCAROLINAH", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Carolina Herrera", referenciaInspiracion: "Carolina Herrera", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-10", clave: "01/01598A", nombre: "D212 VIP ROSE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Carolina Herrera", referenciaInspiracion: "212 VIP Rosé", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-11", clave: "01/03063A", nombre: "D212 VIP ROSE ILNY", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Carolina Herrera", referenciaInspiracion: "212 VIP Rosé I Love New York", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-12", clave: "01/03124A", nombre: "DCH PASION HER", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Carolina Herrera", referenciaInspiracion: "CH Pasion", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-13", clave: "01/02854A", nombre: "D212 VIP WINS WOM", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Carolina Herrera", referenciaInspiracion: "212 VIP Wins Women", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-14", clave: "01/04104A", nombre: "DCH WILD LOVE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Carolina Herrera", referenciaInspiracion: "CH Wild Love", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-15", clave: "01/00165B", nombre: "D212SEXY", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Carolina Herrera", referenciaInspiracion: "212 Sexy", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-16", clave: "01/02901A", nombre: "DCH WOMAN HOT HOT", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Carolina Herrera", referenciaInspiracion: "CH Woman / Hot Hot", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-17", clave: "01/01169A", nombre: "D212VIP", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Carolina Herrera", referenciaInspiracion: "212 VIP", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-18", clave: "01/03800A", nombre: "D212VIPROSE RODEO", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Carolina Herrera", referenciaInspiracion: "212 VIP Rosé Rodeo", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-19", clave: "01/03695A", nombre: "D24 7 DKN", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "DKNY", referenciaInspiracion: "24/7", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-20", clave: "01/00002A", nombre: "D360", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Perry Ellis", referenciaInspiracion: "360", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-21", clave: "01/03854A", nombre: "DCHANCEEAUSPLENDID", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Chanel", referenciaInspiracion: "Chance Eau Splendide", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-22", clave: "01/00006A", nombre: "D360 RED", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Perry Ellis", referenciaInspiracion: "360 Red", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-23", clave: "01/00738B", nombre: "DCHANEL5", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Chanel", referenciaInspiracion: "Nº5", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-24", clave: "01/00746A", nombre: "DAIRESDELT", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Issey Miyake", referenciaInspiracion: "L'Eau d'Issey", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-25", clave: "01/03513A", nombre: "DCHILL AND SOLE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "", referenciaInspiracion: null, imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-26", clave: "01/02885A", nombre: "DALIEN GODDESS TM", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Mugler", referenciaInspiracion: "Alien Goddess", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-27", clave: "01/02375A", nombre: "DCLOUD ARIANAGDE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Ariana Grande", referenciaInspiracion: "Cloud", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-28", clave: "01/04140A", nombre: "DALMOST ALWAYS KHLOE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Khloé Kardashian", referenciaInspiracion: "Almost Always", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-29", clave: "01/03146A", nombre: "DCLOUDPINK", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Ariana Grande", referenciaInspiracion: "Cloud Pink", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-30", clave: "01/00739A", nombre: "DAMARIGE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Givenchy", referenciaInspiracion: "Amarige", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-31", clave: "01/02771A", nombre: "DCOACHSUNSETDREAMS", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Coach", referenciaInspiracion: "Sunset Dreams", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-32", clave: "01/00010A", nombre: "DAMOR AMOR", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Cacharel", referenciaInspiracion: "Amor Amor", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-33", clave: "01/00779B", nombre: "DCOCO MADEMOISELLE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Chanel", referenciaInspiracion: "Coco Mademoiselle", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-34", clave: "01/00752A", nombre: "DANAISANAI", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "", referenciaInspiracion: null, imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-35", clave: "01/00744A", nombre: "DCOCOCHANE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Chanel", referenciaInspiracion: "Coco", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-36", clave: "01/01090A", nombre: "DANGDEMONLESECRECT", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Givenchy", referenciaInspiracion: "Ange ou Démon Le Secret", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-37", clave: "01/00741B", nombre: "DCOOL WATE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Davidoff", referenciaInspiracion: "Cool Water", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-38", clave: "01/00760B", nombre: "DANGE OU DEMON", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Givenchy", referenciaInspiracion: "Ange ou Démon", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-39", clave: "01/03823", nombre: "DCOSMIC 20", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "", referenciaInspiracion: null, imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-40", clave: "01/00756A", nombre: "DANGEL", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Mugler", referenciaInspiracion: "Angel", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-41", clave: "01/03469A", nombre: "DCOSMIC KYLIE JENN", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Kylie Jenner", referenciaInspiracion: "Cosmic", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-42", clave: "01/03428A", nombre: "DANGEL FANTASM", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Mugler", referenciaInspiracion: "Angel Fantasm", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-43", clave: "01/03950A", nombre: "DCRY BABY", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Melanie Martinez", referenciaInspiracion: "Cry Baby", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-44", clave: "01/03500A", nombre: "DANGEL KISS ARIANA", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Ariana Grande", referenciaInspiracion: "Angel Kiss", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-45", clave: "01/04130A", nombre: "DCRYSTAL EMERALD", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "", referenciaInspiracion: null, imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-46", clave: "01/00013A", nombre: "DANIMAL", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Animale", referenciaInspiracion: "Animale", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-47", clave: "01/03506A", nombre: "DCRYSTAL NOIR VERS", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Versace", referenciaInspiracion: "Crystal Noir", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-48", clave: "01/00743B", nombre: "DAQUA GIO", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Giorgio Armani", referenciaInspiracion: "Acqua di Giò", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-49", clave: "01/02348A", nombre: "DDAISY", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Marc Jacobs", referenciaInspiracion: "Daisy", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-50", clave: "01/01191A", nombre: "DAQUADIGIOGIA", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Giorgio Armani", referenciaInspiracion: "Acqua di Gioia", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-51", clave: "01/02842A", nombre: "DDAISY EAUSOFRESH", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Marc Jacobs", referenciaInspiracion: "Daisy Eau So Fresh", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-52", clave: "01/01792A", nombre: "DARI ARIANA GRANDE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Ariana Grande", referenciaInspiracion: "Ari", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-53", clave: "01/02832A", nombre: "DDAISY EAUSOINTENS", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Marc Jacobs", referenciaInspiracion: "Daisy Eau So Intense", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-54", clave: "01/04146A", nombre: "DAUDACE EDP", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "", referenciaInspiracion: null, imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-55", clave: "01/02846A", nombre: "DDAISY LOVE S", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Marc Jacobs", referenciaInspiracion: "Daisy Love", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-56", clave: "01/01404A", nombre: "DAZLEE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "", referenciaInspiracion: null, imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-57", clave: "01/01866A", nombre: "DDECADENCE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Marc Jacobs", referenciaInspiracion: "Decadence", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-58", clave: "01/02459A", nombre: "DBAE KIM KW", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Kim Kardashian", referenciaInspiracion: "Bae", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-59", clave: "01/03226A", nombre: "DDEVOTION DOL GABB", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Dolce & Gabbana", referenciaInspiracion: "Devotion", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-60", clave: "01/03650A", nombre: "DBALI PARADISE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "", referenciaInspiracion: null, imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-61", clave: "01/00174A", nombre: "DBEDELICDKNY", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "DKNY", referenciaInspiracion: "Be Delicious", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-62", clave: "01/02452A", nombre: "DBFF KIM KW", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Kim Kardashian", referenciaInspiracion: "BFF", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-63", clave: "01/01803A", nombre: "DBLACK OPIUM", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Yves Saint Laurent", referenciaInspiracion: "Black Opium", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-64", clave: "01/03102A", nombre: "DBLACKOPIUMEDT", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Yves Saint Laurent", referenciaInspiracion: "Black Opium Eau de Toilette", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-65", clave: "01/03610A", nombre: "DBLACKOPIUMGLITTER", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Yves Saint Laurent", referenciaInspiracion: "Black Opium Glitter", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-66", clave: "01/02149A", nombre: "DBOMBSHELL NIGHTS", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Victoria's Secret", referenciaInspiracion: "Bombshell Nights", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-67", clave: "01/01601A", nombre: "DBONBON", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Viktor&Rolf", referenciaInspiracion: "Bonbon", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-68", clave: "01/03191A", nombre: "DBORN IN ROMA PINK", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Valentino", referenciaInspiracion: "Born in Roma Pink", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-69", clave: "01/04222A", nombre: "DBORN ROMA PURPLE MEL", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "AVNaCleHnOtiLnIoA", referenciaInspiracion: "Born in Roma Purple Melancholia", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-70", clave: "01/01001A", nombre: "DBOSS ORANGE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Hugo Boss", referenciaInspiracion: "Boss Orange", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-71", clave: "01/03686A", nombre: "DBOSSTHESCENTELIXI", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Hugo Boss", referenciaInspiracion: "The Scent Elixir", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-72", clave: "01/03138A", nombre: "DBRBRY HER LXR EDP", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Burberry", referenciaInspiracion: "Her Elixir / Her LXR", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-73", clave: "01/03389A", nombre: "DBRIGHT CRYST PARF", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Versace", referenciaInspiracion: "Bright Crystal Parfum", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-74", clave: "01/01305A", nombre: "DBRIGHT CRYSTAL", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Versace", referenciaInspiracion: "Bright Crystal", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-75", clave: "01/02388A", nombre: "DBURBERRY HER", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Burberry", referenciaInspiracion: "Her", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-76", clave: "01/04178A", nombre: "DBURBERRY HER PARFUM", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Burberry", referenciaInspiracion: "Her Parfum", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-77", clave: "01/00522A", nombre: "DCANCAN P HILTON", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Paris Hilton", referenciaInspiracion: "Can Can", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-78", clave: "01/02607A", nombre: "DCANDY LOVE ESC", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Escada", referenciaInspiracion: "Candy Love", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-79", clave: "01/02043A", nombre: "DCANDY PRADA", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Prada", referenciaInspiracion: "Candy", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-80", clave: "01/00025A", nombre: "DCAROLINAH", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Carolina Herrera", referenciaInspiracion: "Carolina Herrera", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-81", clave: "01/00493A", nombre: "DCH CAROLINA HERRE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Carolina Herrera", referenciaInspiracion: "CH Carolina Herrera", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-82", clave: "01/03124A", nombre: "DCH PASION HER", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Carolina Herrera", referenciaInspiracion: "CH Pasion", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-83", clave: "01/04104A", nombre: "DCH WILD LOVE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Carolina Herrera", referenciaInspiracion: "CH Wild Love", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-84", clave: "01/02901A", nombre: "DCH WOMAN HOT HOT", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Carolina Herrera", referenciaInspiracion: "CH Woman / Hot Hot", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-85", clave: "01/00733B", nombre: "DCHANCE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Chanel", referenciaInspiracion: "Chance", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-86", clave: "01/02756A", nombre: "DCHANCE EAU TENDRE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Chanel", referenciaInspiracion: "Chance Eau Tendre", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-87", clave: "01/02752A", nombre: "DCHANCE EAUFRAICHE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Chanel", referenciaInspiracion: "Chance Eau Fraîche", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-88", clave: "01/03854A", nombre: "DCHANCEEAUSPLENDID", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Chanel", referenciaInspiracion: "Chance Eau Splendide", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-89", clave: "01/00738B", nombre: "DCHANEL5", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Chanel", referenciaInspiracion: "Nº5", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-90", clave: "01/03513A", nombre: "DCHILL AND SOLE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "", referenciaInspiracion: null, imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-91", clave: "01/00747A", nombre: "DEMPORIO A", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Giorgio Armani", referenciaInspiracion: "Emporio Armani", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-92", clave: "01/01703C", nombre: "DEROS VERSACE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Versace", referenciaInspiracion: "Eros", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-93", clave: "01/00044A", nombre: "DETERNITY", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Calvin Klein", referenciaInspiracion: "Eternity", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-94", clave: "01/00035B", nombre: "DJÁDORE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Dior", referenciaInspiracion: "J'adore", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-95", clave: "01/00763B", nombre: "DEUPHORIA", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Calvin Klein", referenciaInspiracion: "Euphoria", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-96", clave: "01/00065A", nombre: "DJEANPAULG", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Jean Paul Gaultier", referenciaInspiracion: "Classique", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-97", clave: "01/03274A", nombre: "DEUPHORIA EDP CK", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Calvin Klein", referenciaInspiracion: "Euphoria Eau de Parfum", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-98", clave: "01/03178A", nombre: "DJUNGLE FANTASY BS", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Britney Spears", referenciaInspiracion: "Jungle Fantasy", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-99", clave: "01/00045A", nombre: "DEXCLAMACI", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Coty", referenciaInspiracion: "Exclamation", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-100", clave: "01/04162A", nombre: "DK OS MUSE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "DKNY", referenciaInspiracion: "DKNY Be 100% Delicious / Be Deli", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-101", clave: "01/03630A", nombre: "DFAME COUTURE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Lady Gaga", referenciaInspiracion: "Fame Couture", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-102", clave: "01/00196A", nombre: "DKENZO AMOUR", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Kenzo", referenciaInspiracion: "Amour", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-103", clave: "01/04175A", nombre: "DFAME IN LOVE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Lady Gaga", referenciaInspiracion: "Fame in Love", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-104", clave: "01/04074A", nombre: "DKENZO WORLD 16", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Kenzo", referenciaInspiracion: "Kenzo World", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-105", clave: "01/03289A", nombre: "DFAME PARFFUM PR", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Lady Gaga", referenciaInspiracion: "Fame Parfum", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-106", clave: "01/01518A", nombre: "DKILLER QUEEN", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Katy Perry", referenciaInspiracion: "Killer Queen", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-107", clave: "01/02874", nombre: "DFAME PR", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Lady Gaga", referenciaInspiracion: "Fame", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-108", clave: "01/02373A", nombre: "DKIMOJI CHERRY", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Kim Kardashian", referenciaInspiracion: "Kimoji Cherry", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-109", clave: "01/01837A", nombre: "DFANTASY BRITNET S", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Britney Spears", referenciaInspiracion: "Fantasy", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-110", clave: "01/01861C", nombre: "DL1212 NATURAL", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Lacoste", referenciaInspiracion: "L.12.12 Natural", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-111", clave: "01/01741A", nombre: "DFARE FOLLIE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "", referenciaInspiracion: null, imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-112", clave: "01/03916A", nombre: "DLA BELLE FLOWER", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Jean Paul Gaultier", referenciaInspiracion: "La Belle Flower", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-113", clave: "01/01931B", nombre: "DFERRIONI GREEN T", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Ferrioni", referenciaInspiracion: "Green Tea", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-114", clave: "01/03383A", nombre: "DLA BELLE PARADISE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Jean Paul Gaultier", referenciaInspiracion: "La Belle Paradise Garden", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-115", clave: "01/02783A", nombre: "DFLORA GORGEOUS G", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Gucci", referenciaInspiracion: "Flora Gorgeous Gardenia", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-116", clave: "01/03860A", nombre: "DLA BOMBA", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Carolina Herrera", referenciaInspiracion: "La Bomba", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-117", clave: "01/03216A", nombre: "DFLORAGORG MAGNOLI", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Gucci", referenciaInspiracion: "Flora Gorgeous Magnolia", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-118", clave: "01/00753B", nombre: "DLACOSTE FEMME", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Lacoste", referenciaInspiracion: "Lacoste Pour Femme", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-119", clave: "01/03450A", nombre: "DFLORAGORGEORCHID", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Gucci", referenciaInspiracion: "Flora Gorgeous Orchid", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-120", clave: "01/01216A", nombre: "DLADYMILLION PR", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Paco Rabanne", referenciaInspiracion: "Lady Million", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-121", clave: "01/01741A", nombre: "DFARE FOLLIE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "", referenciaInspiracion: null, imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-122", clave: "01/03916A", nombre: "DLA BELLE FLOWER", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Jean Paul Gaultier", referenciaInspiracion: "La Belle Flower", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-123", clave: "01/01931B", nombre: "DFERRIONI GREEN T", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Ferrioni", referenciaInspiracion: "Green Tea", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-124", clave: "01/03383A", nombre: "DLA BELLE PARADISE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Jean Paul Gaultier", referenciaInspiracion: "La Belle Paradise Garden", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-125", clave: "01/02783A", nombre: "DFLORA GORGEOUS G", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Gucci", referenciaInspiracion: "Flora Gorgeous Gardenia", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-126", clave: "01/03860A", nombre: "DLA BOMBA", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Carolina Herrera", referenciaInspiracion: "La Bomba", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-127", clave: "01/03216A", nombre: "DFLORAGORG MAGNOLI", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Gucci", referenciaInspiracion: "Flora Gorgeous Magnolia", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-128", clave: "01/00753B", nombre: "DLACOSTE FEMME", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Lacoste", referenciaInspiracion: "Lacoste Pour Femme", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-129", clave: "01/03450A", nombre: "DFLORAGORGEORCHID", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Gucci", referenciaInspiracion: "Flora Gorgeous Orchid", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-130", clave: "01/01216A", nombre: "DLADYMILLION PR", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Paco Rabanne", referenciaInspiracion: "Lady Million", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-131", clave: "01/00118A", nombre: "DFLOWER", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Kenzo", referenciaInspiracion: "Flower", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-132", clave: "01/01500A", nombre: "DLAVIEBELLE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Lancôme", referenciaInspiracion: "La Vie Est Belle", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-133", clave: "01/01786A", nombre: "DFLOWERBOMB", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Viktor&Rolf", referenciaInspiracion: "Flowerbomb", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-134", clave: "01/04149A", nombre: "DLIBRE BERRY CRUSH", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Yves Saint Laurent", referenciaInspiracion: "Libre Berry Crush", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-135", clave: "01/01919B", nombre: "DFUNNY MOSCHINO", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Moschino", referenciaInspiracion: "Funny!", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-136", clave: "01/02483A", nombre: "DLIBRE YSL", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Yves Saint Laurent", referenciaInspiracion: "Libre", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-137", clave: "01/02762A", nombre: "DGEMS PARTY TOUS", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Tous", referenciaInspiracion: "Gems Party", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-138", clave: "01/03328A", nombre: "DLIBREABSOLUPLATIN", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Yves Saint Laurent", referenciaInspiracion: "Libre Absolu Platine", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-139", clave: "01/03539A", nombre: "DGIRL FOREVER", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "", referenciaInspiracion: null, imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-140", clave: "01/00151B", nombre: "DLIGHT BLUE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Dolce & Gabbana", referenciaInspiracion: "Light Blue", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-141", clave: "01/03580A", nombre: "DGIRL SUMM VIBR 24", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "", referenciaInspiracion: null, imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-142", clave: "01/03503A", nombre: "DLIMITLESS JLO", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Jennifer Lopez", referenciaInspiracion: "Limitless", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-143", clave: "01/00056A", nombre: "DGLORIAVAN", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Gloria Vanderbilt", referenciaInspiracion: "Vanderbilt", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-144", clave: "02/01904A", nombre: "DLOVE ME TOUS", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Tous", referenciaInspiracion: "LoveMe", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-145", clave: "01/02803A", nombre: "DGOD IS A WOMAN", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Ariana Grande", referenciaInspiracion: "God Is A Woman", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-146", clave: "01/03172A", nombre: "DLOVE RUSH PARIS H", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Paris Hilton", referenciaInspiracion: "Love Rush", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-147", clave: "01/03213A", nombre: "DGODDESS BURBERRY", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Burberry", referenciaInspiracion: "Goddess", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-148", clave: "01/01830B", nombre: "DLOVE SOFIAVERGARA", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Sofia Vergara", referenciaInspiracion: "Love", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-149", clave: "01/01938A", nombre: "DGOLD RUSH PARIS H", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Paris Hilton", referenciaInspiracion: "Gold Rush", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-150", clave: "01/03219A", nombre: "DLOVEME EME ELIXIR", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Tous", referenciaInspiracion: "LoveMe The Onyx / Elixir", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-151", clave: "01/02805A", nombre: "DGOOD G SUPERSTARS", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Carolina Herrera", referenciaInspiracion: "Good Girl Superstars", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-152", clave: "01/01913A", nombre: "DMADLOVE KATYPERRY", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Katy Perry", referenciaInspiracion: "Mad Love", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-153", clave: "01/01912C", nombre: "DGOOD GIRL CH", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Carolina Herrera", referenciaInspiracion: "Good Girl", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-154", clave: "01/02721B", nombre: "DFLOR DE CACTUS", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "", referenciaInspiracion: null, imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-155", clave: "01/04167A", nombre: "DGOOD GIRL JASMINE ABSO", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "LCUaTrEolina Herrera", referenciaInspiracion: "Good Girl Jasmine Absolute", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-156", clave: "01/01370A", nombre: "DMEOW KATY PERRY", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Katy Perry", referenciaInspiracion: "Meow", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-157", clave: "01/02997A", nombre: "DGOOD GIRL MIDNIGH", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Carolina Herrera", referenciaInspiracion: "Good Girl Midnight", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-158", clave: "01/02416C", nombre: "DMIAMI BLOSSOM", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "", referenciaInspiracion: null, imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-159", clave: "01/02614A", nombre: "DGOOD GIRL VELVET", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Carolina Herrera", referenciaInspiracion: "Good Girl Velvet Fatale", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-160", clave: "01/00736A", nombre: "DMIDNIGHT FANTASY", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Britney Spears", referenciaInspiracion: "Midnight Fantasy", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-161", clave: "01/03477A", nombre: "DGOODGIRL B ELIXIR", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Carolina Herrera", referenciaInspiracion: "Good Girl Blush Elixir", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-162", clave: "01/02769A", nombre: "DMISS DIOR EDP", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Dior", referenciaInspiracion: "Miss Dior Eau de Parfum", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-163", clave: "01/03210A", nombre: "DGOODGIRL DAZZLING", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Carolina Herrera", referenciaInspiracion: "Good Girl Dazzling Garden", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-164", clave: "01/04023A", nombre: "DMISS DIOR ESSENCE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Dior", referenciaInspiracion: "Miss Dior Essence", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-165", clave: "01/03112A", nombre: "DGOODGIRLBLUSH", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Carolina Herrera", referenciaInspiracion: "Good Girl Blush", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-166", clave: "01/02080A", nombre: "DMISS DIOR PERFUM", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Dior", referenciaInspiracion: "Miss Dior Parfum", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-167", clave: "01/03254A", nombre: "DGREEN CACTUS HER", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "", referenciaInspiracion: null, imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-168", clave: "01/01600A", nombre: "DMISSDIOR BLOOMING", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Dior", referenciaInspiracion: "Miss Dior Blooming Bouquet", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-169", clave: "01/01771A", nombre: "DGUCCI BAMBOO", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Gucci", referenciaInspiracion: "Bamboo", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-170", clave: "01/03346A", nombre: "DMISSDIOR PARFUM24", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Dior", referenciaInspiracion: "Miss Dior Parfum", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-171", clave: "01/03142A", nombre: "DGUCCI BLOOM INT", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Gucci", referenciaInspiracion: "Gucci Bloom Intense", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-172", clave: "01/03039A", nombre: "DMOD BLUSH", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Estée Lauder", referenciaInspiracion: "Modern Muse Blush", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-173", clave: "01/00125A", nombre: "DGUCCI RUS", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Gucci", referenciaInspiracion: "Rush", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-174", clave: "01/03014A", nombre: "DMOD VANILLA", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Estée Lauder", referenciaInspiracion: "Modern Muse Vanilla", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-175", clave: "01/01552C", nombre: "DGUESS GIRL", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Guess", referenciaInspiracion: "Guess Girl", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-176", clave: "01/01981A", nombre: "DMON GUERLAIN", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Guerlain", referenciaInspiracion: "Mon Guerlain", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-177", clave: "01/00133A", nombre: "DHALLOWEN", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "J. del Pozo", referenciaInspiracion: "Halloween", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-178", clave: "01/02252A", nombre: "DMON PARIS COUTURE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Guerlain", referenciaInspiracion: "Mon Guerlain / Mon Paris Couture", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-179", clave: "01/02881A", nombre: "DHALLOWEN BLOSSOM", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "J. del Pozo", referenciaInspiracion: "Halloween Blossom", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-180", clave: "01/02117C", nombre: "DMOONLIGHT ARIANA", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Ariana Grande", referenciaInspiracion: "Moonlight", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-181", clave: "01/00737B", nombre: "DHEIRESS PARIS HIL", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Paris Hilton", referenciaInspiracion: "Heiress", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-182", clave: "01/03131A", nombre: "DMOREMOREPINKTOUS", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Tous", referenciaInspiracion: "More More Pink", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-183", clave: "01/00132A", nombre: "DHIPNOTICP", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "J. del Pozo", referenciaInspiracion: "Halloween Hypnotic", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-184", clave: "01/00071A", nombre: "DMUSKJOVAN", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Jovan", referenciaInspiracion: "Musk", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-185", clave: "01/00061A", nombre: "DHUGO", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Hugo Boss", referenciaInspiracion: "Hugo", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-186", clave: "01/02609A", nombre: "DMY WAY GIOARM", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Giorgio Armani", referenciaInspiracion: "My Way", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-187", clave: "01/03943A", nombre: "DICONIC", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "", referenciaInspiracion: null, imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-188", clave: "01/03343A", nombre: "DMY WAY NECTAR G", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Giorgio Armani", referenciaInspiracion: "My Way Nectar", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-189", clave: "01/02473A", nombre: "DIDOLE LANCOME", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Lancôme", referenciaInspiracion: "Idôle", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-190", clave: "01/04185A", nombre: "DMY WAY SUNNY VANILLA", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Giorgio Armani", referenciaInspiracion: "My Way Ylang / Sunny Vanilla", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-191", clave: "01/01678A", nombre: "DILOVELOVEMOSCHINO", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Moschino", referenciaInspiracion: "I Love Love", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-192", clave: "01/03107A", nombre: "DNARCISO4HERFOREVR", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Narciso Rodriguez", referenciaInspiracion: "Narciso 4 Her Forever", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-193", clave: "01/03760A", nombre: "DNARCISO4HERINTENS", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Narciso Rodriguez", referenciaInspiracion: "Narciso 4 Her Intense", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-194", clave: "01/03464A", nombre: "DSISTER GOLD VANIL", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "", referenciaInspiracion: null, imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-195", clave: "01/02933A", nombre: "DNARCISOEDPCRISTAL", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Narciso Rodriguez", referenciaInspiracion: "Narciso Eau de Parfum Cristal", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-196", clave: "01/03431C", nombre: "DSOL DE JANEIRO CHEIROSA", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "S40ol de Janeiro", referenciaInspiracion: "Cheirosa 40", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-197", clave: "01/01580A", nombre: "DNEXT GIRLFRIEND", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Ariana Grande", referenciaInspiracion: "Thank U, Next / Next Girlfriend", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-198", clave: "01/03963", nombre: "DSOL DE JANEIRO CHEIROSA", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "S68ol de Janeiro", referenciaInspiracion: "Cheirosa 68", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-199", clave: "01/01782A", nombre: "DOLYMPEA PACORABAN", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Paco Rabanne", referenciaInspiracion: "Olympea", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-200", clave: "01/03268B", nombre: "DSOLO ELLA ELIXIR", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Solo Ella /?", referenciaInspiracion: "Solo Ella Elixir", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-201", clave: "01/01519", nombre: "DOMBREROSE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "", referenciaInspiracion: null, imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-202", clave: "01/02147A", nombre: "DSORBETTO ROSSO", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Escada", referenciaInspiracion: "Sorbetto Rosso", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-203", clave: "01/03583A", nombre: "DOMNIA CRYSTALLINE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Bvlgari", referenciaInspiracion: "Omnia Crystalline", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-204", clave: "01/03666A", nombre: "DSUBLIME TORYBURCH", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Tory Burch", referenciaInspiracion: "Sublime", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-205", clave: "01/00082A", nombre: "DORGANZA", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Givenchy", referenciaInspiracion: "Organza", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-206", clave: "01/02708C", nombre: "DSUMMER FESTIVAL", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "", referenciaInspiracion: null, imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-207", clave: "01/00086A", nombre: "DPALOMAPIC", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Paloma Picasso", referenciaInspiracion: "Paloma Picasso", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-208", clave: "01/02064A", nombre: "DSWEET LIKE CANDY", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Ariana Grande", referenciaInspiracion: "Sweet Like Candy", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-209", clave: "01/03286A", nombre: "DPARADOXE PRADA", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Prada", referenciaInspiracion: "Paradoxe", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-210", clave: "01/03295A", nombre: "DSWEET TOOTH SCARP", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Sabrina Carpenter", referenciaInspiracion: "Sweet Tooth", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-211", clave: "01/00087A", nombre: "DPARIS", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "", referenciaInspiracion: null, imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-212", clave: "01/03757A", nombre: "DSWEETTOOTH CHERRY", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Sabrina Carpenter", referenciaInspiracion: "Sweet Tooth Cherry", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-213", clave: "01/00734B", nombre: "DPARIS/H", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Paris Hilton", referenciaInspiracion: "Paris Hilton", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-214", clave: "01/03814A", nombre: "DSWEETTOOTH ESPRES", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Sabrina Carpenter", referenciaInspiracion: "Sweet Tooth Espresso", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-215", clave: "01/03168A", nombre: "DPARTY LOVE ESCADA", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Escada", referenciaInspiracion: "Party Love", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-216", clave: "01/03416A", nombre: "DSWEETTOOTHCARAMEL", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Sabrina Carpenter", referenciaInspiracion: "Sweet Tooth Caramel", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-217", clave: "01/00740B", nombre: "DPASSION", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "", referenciaInspiracion: null, imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-218", clave: "01/03175A", nombre: "DTEASE C SORIEE VS", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Victoria's Secret", referenciaInspiracion: "Tease Crème Cloud / Tease", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-219", clave: "01/03674A", nombre: "DPERFECT ELIXIR", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Marc Jacobs", referenciaInspiracion: "Perfect Elixir", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-220", clave: "01/00754B", nombre: "DTESORO", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Tous", referenciaInspiracion: "Tesoro", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-221", clave: "01/02605A", nombre: "DPERFECT MARCJAC", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Marc Jacobs", referenciaInspiracion: "Perfect", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-222", clave: "01/02489C", nombre: "DTHANK YOU NEXT", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Ariana Grande", referenciaInspiracion: "Thank U, Next", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-223", clave: "01/00150C", nombre: "DPERLASNEG", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "", referenciaInspiracion: null, imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-224", clave: "01/01608A", nombre: "DTHAT MOMENT ONEDI", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "One Direction", referenciaInspiracion: "That Moment", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-225", clave: "01/00715A", nombre: "DPERRY ELLIS", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Perry Ellis", referenciaInspiracion: "Perry Ellis", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-226", clave: "01/02377A", nombre: "DTHE ONLY ONE DG", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Dolce & Gabbana", referenciaInspiracion: "The Only One", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-227", clave: "01/03352A", nombre: "DPINK BY PINK VS", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Victoria's Secret", referenciaInspiracion: "Pink by Pink", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-228", clave: "01/00107A", nombre: "DTOMMY GIR", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Tommy Hilfiger", referenciaInspiracion: "Tommy Girl", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-229", clave: "01/03653", nombre: "DPINK WOODS", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "", referenciaInspiracion: null, imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-230", clave: "01/00568A", nombre: "DTOUS", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Tous", referenciaInspiracion: "Tous", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-231", clave: "01/00762A", nombre: "DPLEASURES", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Estée Lauder", referenciaInspiracion: "Pleasures", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-232", clave: "01/01088A", nombre: "DTOUS H20", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Tous", referenciaInspiracion: "Tous H2O", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-233", clave: "01/04035A", nombre: "DPLUSH VANILLA", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "", referenciaInspiracion: null, imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-234", clave: "01/02436A", nombre: "DTOY 2", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Moschino", referenciaInspiracion: "Toy 2", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-235", clave: "01/00751A", nombre: "DPOEME", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Lancôme", referenciaInspiracion: "Poême", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-236", clave: "01/02672A", nombre: "DTOY 2 BUBBLE GUM", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Moschino", referenciaInspiracion: "Toy 2 Bubble Gum", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-237", clave: "01/01887A", nombre: "DPOISON GIRL", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Dior", referenciaInspiracion: "Poison Girl", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-238", clave: "01/00109A", nombre: "DTRIBU", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Benetton", referenciaInspiracion: "Tribù", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-239", clave: "01/00742A", nombre: "DPOISSON", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Dior", referenciaInspiracion: "Poison", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-240", clave: "01/00127A", nombre: "DTROPICAL PUNCH", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Escada", referenciaInspiracion: "Tropical Punch", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-241", clave: "01/01243A", nombre: "DPURR BYKATIEPERRY", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Katy Perry", referenciaInspiracion: "Purr", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-242", clave: "01/00112A", nombre: "DULTRAVIOL", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "", referenciaInspiracion: null, imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-243", clave: "01/03016A", nombre: "DQ", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "", referenciaInspiracion: null, imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-244", clave: "01/00773A", nombre: "DVERSACE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Versace", referenciaInspiracion: "Versace", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-245", clave: "01/00094C", nombre: "DQUINTA AV", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Ariana? / Quinta", referenciaInspiracion: null, imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-246", clave: "01/01002A", nombre: "DVERSENSE VERSACE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Versace", referenciaInspiracion: "Versense", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-247", clave: "01/00095A", nombre: "DRALPH", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Ralph Lauren", referenciaInspiracion: "Ralph", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-248", clave: "01/02698A", nombre: "DVERY GOOD GIRL", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Carolina Herrera", referenciaInspiracion: "Very Good Girl", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-249", clave: "01/01736A", nombre: "DRALPH FRESH", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Ralph Lauren", referenciaInspiracion: "Ralph Fresh", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-250", clave: "01/03828A", nombre: "DVERYGOODGIRLELIXI", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Carolina Herrera", referenciaInspiracion: "Very Good Girl Elixir", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-251", clave: "01/00192A", nombre: "DRED DELICIOUS WOM", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "DKNY", referenciaInspiracion: "Red Delicious", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-252", clave: "01/01867A", nombre: "DVIVALAJUICY ROSE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Juicy Couture", referenciaInspiracion: "Viva La Juicy Rose", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-253", clave: "01/00750B", nombre: "DRED DOOR", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "DKNY", referenciaInspiracion: "Red Door", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-254", clave: "01/02754A", nombre: "DVOCE VIVA", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Valentino", referenciaInspiracion: "Voce Viva", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-255", clave: "01/02576A", nombre: "DREM ARI GDE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Ariana Grande", referenciaInspiracion: "R.E.M.", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-256", clave: "01/00758A", nombre: "DWDIAMONDS", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Elizabeth Taylor", referenciaInspiracion: "White Diamonds", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-257", clave: "01/03857A", nombre: "DREM CHERRYECLIPSE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Ariana Grande", referenciaInspiracion: "R.E.M. Cherry Eclipse", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-258", clave: "03/01059A", nombre: "DWICKED GLINDA", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Wicked / Glinda", referenciaInspiracion: "Glinda", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-259", clave: "01/01854A", nombre: "DRIRI RIHANNA", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Rihanna", referenciaInspiracion: "Riri", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-260", clave: "01/01168A", nombre: "DWISH PINK", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Chopard?", referenciaInspiracion: "Wish Pink", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-261", clave: "01/00761A", nombre: "DROMANCE", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Ralph Lauren", referenciaInspiracion: "Romance", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-262", clave: "01/03207A", nombre: "DXTINA CRIST AGUI", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Christina Aguilera", referenciaInspiracion: "Christina Aguilera", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-263", clave: "01/00757A", nombre: "DROYALSECR", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Victoria's Secret", referenciaInspiracion: "Royal Secret", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-264", clave: "01/03456A", nombre: "DS KISS SHAKIRA", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Shakira", referenciaInspiracion: "S Kiss", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-265", clave: "01/02869A", nombre: "DYOUR POWERS", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "", referenciaInspiracion: null, imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-266", clave: "01/00100A", nombre: "DSAMSARA", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Guerlain", referenciaInspiracion: "Samsara", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-267", clave: "01/03487B", nombre: "DSCANDAL ABSOLU", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Jean Paul Gaultier", referenciaInspiracion: "Scandal Absolu", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
  { id: "dama-268", clave: "01/02053C", nombre: "DSCANDAL GAULTIER", categoria: "fragancias", subcategoria: "mujer", genero: "Mujer", presentacion: "", precio: 0, imagen: "", inspiracion: "Jean Paul Gaultier", referenciaInspiracion: "Scandal", imagenInspiracion: "", aroma: "", familiaOlfativa: "", momento: "", descripcion: "", disponible: true },
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
    familiaOlfativa: "",
    momento: "",
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
    familiaOlfativa: "",
    momento: "",
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
    familiaOlfativa: "",
    momento: "",
    descripcion: "Registro de prueba fuera de fragancias, para comprobar los filtros del buscador.",
    disponible: true
  }
];

/* ── Clasificación comercial — Dama (Fase A) ─────────────── */
/* Mapa oficial proporcionado por el negocio: clave exacta → clasificación.
   NO se editan claves aquí a mano; para actualizar la clasificación se
   edita esta lista y clasificarDama() la vuelve a aplicar. */
const CLASIFICACION_DAMA = (function(){
  const TENDENCIA_NICOLA = [
    "01/03627A","01/04178A","01/02852A","01/00025A","01/01598A","01/00493A","01/03800A","01/02756A",
    "01/03695A","01/02752A","01/00006A","01/00738B","01/00752A","01/00744A","01/01090A","01/00741B",
    "01/03500A","01/04130A","01/01792A","01/02832A","01/02459A","01/03226A","01/03650A","01/03953A",
    "01/02452A","01/02817A","01/01803A","01/01896A","01/03610A","01/00036B","01/01601A","01/03413A",
    "01/03191A","01/03105A","01/03686A","01/03117A","01/03138A","01/02696A","01/01305A","01/00866B",
    "01/02903A","01/02574A","01/01703C","01/03301A","01/03274A","01/03178A","01/03289A","01/01518A",
    "01/01741A","01/03916A","01/01931B","01/03383A","01/03450A","01/01216A","01/01786A","01/04149A",
    "01/03539A","01/00151B","01/03580A","01/03503A","01/03213A","01/01830B","01/01938A","01/03219A",
    "01/01912C","01/02721B","01/02997A","01/02416C","01/03477A","01/02769A","01/03210A","01/04023A",
    "01/03112A","01/03254A","01/01600A","01/01771A","01/03346A","01/03142A","01/03039A","01/00125A",
    "01/03014A","01/03943A","01/03343A","01/02473A","01/04185A","01/01678A","01/03107A","01/01580A",
    "01/03963",  "01/01782A","01/03268B","01/00082A","01/02708C","01/03286A","01/03295A","01/00087A",
    "01/03757A","01/03168A","01/03416A","01/03674A","01/00754B","01/00715A","01/02377A","01/03653",
    "01/00568A","01/00762A","01/01088A","01/04035A","01/02436A","01/00751A","01/02672A","01/01243A",
    "01/00112A","01/01736A","01/03828A","01/00750B","01/02754A","01/03857A","03/01059A","01/00761A",
    "01/03207A","01/00757A","01/01499A","01/03456A","01/02869A","01/03487B","01/01685A","01/00128A",
    "01/02210",  "01/00774A","01/02858",  "01/03115A","01/01096"
  ];

  const NUEVA_TENDENCIA = [
    "01/04140A","01/03146A","01/04146A","01/02846A","01/04222A",
    "01/04041A","01/04175A","01/04074A","01/04167A","01/01370A"
  ];

  const EDICION_LIMITADA = [
    "01/03616",  "01/00522A","01/03063A","01/03124A","01/02854A","01/04104A","01/02885A","01/02375A",
    "01/01001A","01/04191A","01/02762A","01/03328A","01/02805A","01/01913A","01/02614A","01/00736A",
    "01/01552C","01/01981A","01/02881A","01/02117C","01/03016A","01/00773A","01/00192A","01/01867A",
    "01/02576A","01/00758A"
  ];

  const CLASICAS = [
    "01/00001A","01/02607A","01/00005B","01/02043A","01/00165B","01/02901A","01/01169A","01/00733B",
    "01/00002A","01/03854A","01/00746A","01/03513A","01/00739A","01/02771A","01/00010A","01/00779B",
    "01/00760B","01/03823",  "01/00756A","01/03469A","01/00013A","01/03506A","01/00743B","01/02348A",
    "01/01191A","01/02842A","01/01404A","01/01866A","01/00174A","01/03453A","01/02149A","01/03133A",
    "01/03389A","01/01673A","01/02388A","01/00647A","01/00747A","01/00748A","01/00044A","01/00035B",
    "01/00763B","01/00065A","01/00045A","01/04162A","01/02874",  "01/02373A","01/01837A","01/01861C",
    "01/00118A","01/01500A","01/01919B","01/02483A","01/00056A","02/01904A","01/02803A","01/03172A",
    "01/00133A","01/02252A","01/00737B","01/03131A","01/00132A","01/00071A","01/00061A","01/02609A",
    "01/01519",  "01/02147A","01/00086A","01/02064A","01/00734B","01/03814A","01/00740B","01/03175A",
    "01/02605A","01/02489C","01/00150C","01/01608A","01/03352A","01/00107A","01/01887A","01/00109A",
    "01/00742A","01/00127A","01/00094C","01/01002A","01/00095A","01/02698A","01/01854A","01/01168A",
    "01/00100A","01/02053C","01/00749B","01/01860A","01/01564A","01/02861"
  ];

  const ESENCIAS_MASTER = [
    "01/03428A","01/03950A","01/03102A","01/03831A","01/03630A","01/00196A","01/02783A","01/03860A",
    "01/03216A","01/00753B","01/03760A","01/03464A","01/02933A","01/03431C","01/03583A","01/03666A",
    "01/02925A"
  ];

  const mapa = new Map();
  const registrar = (lista, clasificacion, sub) => {
    lista.forEach(clave => mapa.set(clave, { clasificacion: clasificacion, subclasificacionTendencia: sub || null }));
  };
  registrar(TENDENCIA_NICOLA, "Tendencias", "Tendencia Nicola");
  registrar(NUEVA_TENDENCIA, "Tendencias", "Nueva Tendencia");
  registrar(EDICION_LIMITADA, "Edición Limitada", null);
  registrar(CLASICAS, "Clásicas", null);
  registrar(ESENCIAS_MASTER, "Esencias Master", null);
  return mapa;
})();

/* Aplica la clasificación comercial a los registros Dama (subcategoria
   "mujer") existentes, comparando por CLAVE exacta. No crea productos,
   no agrega claves y no toca ningún otro dato del registro. Una clave
   que no está en el mapa queda "Pendiente de clasificación". */
function clasificarDama(){
  PRODUCTOS.forEach(p => {
    if (p.subcategoria !== "mujer") return;
    const info = CLASIFICACION_DAMA.get(p.clave);
    p.clasificacion = info ? info.clasificacion : "Pendiente de clasificación";
    p.subclasificacionTendencia = info ? info.subclasificacionTendencia : null;
  });
}
clasificarDama();

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

  /* Casa de inspiración por id, desde el catálogo maestro CASAS_INSPIRACION. */
  casaInspiracion(id){
    return CASAS_INSPIRACION.find(c => c.id === id) || null;
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
  /* Catálogo filtrable de una subcategoría de Fragancias (hoy: Mujer).
     criterios = { texto, etiqueta, inspiracion, referencia, aroma }, todos
     opcionales y combinables entre sí sobre el mismo conjunto de productos.
     "inspiracion" es el nombre exacto de la casa; "referencia" el nombre
     exacto de la referencia específica dentro de esa casa. */
  explorar(idSub, criterios){
    criterios = criterios || {};
    const texto = String(criterios.texto || "").trim().toLowerCase();
    const etiqueta = criterios.etiqueta || "todas";
    const inspiracion = criterios.inspiracion || "";
    const referencia = criterios.referencia || "";
    const aroma = criterios.aroma || "";

    return PRODUCTOS.filter(p => {
      if (p.categoria !== "fragancias" || p.subcategoria !== idSub) return false;
      if (etiqueta !== "todas"){
        const filtro = FILTROS_EXPLORAR.find(f => f.id === etiqueta);
        if (!filtro || p.clasificacion !== filtro.valor) return false;
      }
      if (inspiracion && p.inspiracion !== inspiracion) return false;
      if (referencia && p.referenciaInspiracion !== referencia) return false;
      if (aroma && p.aroma !== aroma) return false;
      if (texto){
        const campos = (p.nombre + " " + (p.clave || "") + " " + p.inspiracion + " " + (p.referenciaInspiracion || "")).toLowerCase();
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
