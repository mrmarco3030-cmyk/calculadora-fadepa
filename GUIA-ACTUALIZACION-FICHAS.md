# Guía para actualizar fichas técnicas

## Archivos que normalmente se modifican

- `products.js`: datos técnicos y comerciales.
- `service-worker.js`: número de caché para que los usuarios reciban la nueva versión.
- `index.html`: solo cuando se cambia la versión visible de la aplicación.

## Campos de control por producto

Cada producto contiene:

- `revision`: número entero de revisión.
- `versionFicha`: versión documental.
- `fechaActualizacion`: fecha en formato AAAA-MM-DD.
- `estadoFicha`: `vigente`, `en revisión` o `reemplazada`.
- `fuenteFicha`: origen del dato.
- `historialCambios`: registro de modificaciones.

## Ejemplo de actualización

```javascript
revision: 2,
versionFicha: "2.0",
fechaActualizacion: "2026-08-03",
estadoFicha: "vigente",
fuenteFicha: "Ficha técnica FADEPA revisada",
historialCambios: [
  {
    revision: 1,
    fecha: "2026-07-21",
    detalle: "Alta inicial en la calculadora."
  },
  {
    revision: 2,
    fecha: "2026-08-03",
    detalle: "Se corrigió el rendimiento de 8–14 a 10–12 m²/l por mano."
  }
]
```

## Regla de versiones de la aplicación

- Corrección de una ficha: `0.3.1` → `0.3.2`
- Incorporación de varios productos o funciones: `0.3.x` → `0.4.0`
- Versión completa y validada: `1.0.0`

## Publicación

1. Reemplazar los archivos actualizados en GitHub.
2. Hacer el commit.
3. Esperar que GitHub Pages termine.
4. Cerrar y volver a abrir la aplicación.
