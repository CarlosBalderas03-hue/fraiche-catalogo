# Fraiche · Catálogo — Fase 1

Estructura, diseño, interfaces y navegación. Sin catálogo real, sin imágenes, sin carrito, sin pagos.

## Archivos

```
fraiche/
├── index.html                 Esqueleto: barra, menú, contenedor de vistas, pie
├── LEEME.md
└── assets/
    ├── css/estilos.css        Todos los estilos (tokens + 13 bloques comentados)
    └── js/
        ├── datos.js           Configuración, categorías y productos  ← se edita en Fase 2
        ├── vistas.js          Plantilla HTML de cada interfaz
        ├── router.js          Rutas internas por hash
        └── app.js             Barra, menú, migas, buscador
```

## Cómo abrirlo

Abrir `index.html` en el navegador. No requiere servidor ni instalación.

## Rutas

| Ruta | Interfaz |
|---|---|
| `#/inicio` | Inicio |
| `#/fragancias` | Fragancias |
| `#/fragancias/mujer` · `hombre` · `unisex` · `otras` | Listas de fragancias |
| `#/cuidado-personal` · `#/aromatizantes` · `#/hogar` · `#/cosmeticos` | Categorías |
| `#/buscador` | Buscador |
| `#/contacto` | Contacto |
| `#/producto/{id}` | Ficha individual |

## Cómo agregar un producto (Fase 2)

Agregar un objeto al arreglo `PRODUCTOS` en `assets/js/datos.js`:

```js
{
  id: "frg-001",
  nombre: "",
  categoria: "fragancias",
  subcategoria: "mujer",
  genero: "Mujer",
  presentacion: "100 ml",
  precio: 0,
  imagen: "",
  inspiracion: "",
  imagenInspiracion: "",
  descripcion: "",
  disponible: true
}
```

Aparece solo en su vista, en el buscador y con ficha propia. No hay que tocar HTML ni CSS.

Para una categoría nueva: agregar un objeto a `CATEGORIAS`. El menú, el inicio, las rutas y los filtros del buscador se actualizan solos.

## Configuración

`CONFIG` en `datos.js`: número de WhatsApp, texto de entregas, horario, correo. El número actual es un marcador.
