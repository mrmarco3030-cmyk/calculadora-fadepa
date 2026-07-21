# Calculadora Fadepa — versión 0.3.2

Versión con base técnica ampliada y tratamiento seguro de productos especiales.

## Novedades

- 18 productos en la base.
- Nuevas familias: fondos y selladores, látex profesionales, epoxi y techos.
- Kits A+B mostrados como juegos completos.
- Cálculo epoxi diferenciado para cemento y metal.
- Productos con rendimiento por trabajo terminado.
- Productos informativos con cálculo bloqueado cuando la ficha mezcla volumen y peso sin indicar densidad.
- Detección manual de duplicados en las fichas utilizadas.
- PWA instalable y funcionamiento offline.

## Actualización

Subir todos los archivos a la raíz del repositorio y reemplazar los existentes.
No borrar `.github` ni la configuración de GitHub Pages.

## Seguridad técnica

La calculadora no inventa equivalencias. Cuando una ficha expresa rendimiento en litros y vende los kits en gramos sin densidad oficial, muestra la información y solicita consulta técnica.


## Control de revisiones

Desde la versión 0.3.2 cada producto registra:

- número de revisión;
- versión de la ficha;
- fecha de actualización;
- estado de vigencia;
- fuente documental;
- historial de cambios.

La aplicación muestra estos datos dentro de la información técnica del producto.


## Buscador inteligente — v0.3.2

La búsqueda ahora consulta:

- nombre y categoría;
- uso y aplicación;
- superficies compatibles;
- ambientes;
- problemas que ayuda a resolver;
- etiquetas técnicas.

También normaliza mayúsculas y tildes, interpreta algunos sinónimos frecuentes y tolera errores pequeños de escritura. Esta versión no modifica el motor de cálculo ni los rendimientos existentes.
