ACTUALIZACIÓN CALCULADORA FADEPA v0.4.2

AUDITORÍA DEL CONTEO
La versión anterior mostraba 49 productos, pero la revisión completa detectó que:
- Premium Satinado ya existía.
- Profesional Interior ya existía.
- Colmenas había sido incorporado nuevamente con otro ID.
Por eso la base real, sin repetir productos, queda en 46 antes de esta actualización.
Con los 10 productos nuevos, el total correcto es 56.

PRODUCTOS NUEVOS
1. Aditivo Doble Acción (Convertidor y Antióxido)
2. Aditivo Poliuretánico Base Acuosa
3. Antihongo - Antialga Concentrado
4. Base Niveladora
5. Cemento Blanco
6. Entonador Rojo Cerámico
7. Entonador Universal para Barnices
8. Diluyente para Poliuretano FADEPA 2K
9. Esmalte Poliuretánico 2K
10. Mezcla Adhesiva Plástica Interior / Exterior

ARCHIVOS
- products-segment-08-v0.4.1.js: reemplazar. Corrige duplicados de la actualización anterior.
- products-segment-09-v0.4.2.js: archivo nuevo.
- index.html: reemplazar.
- service-worker.js: reemplazar.

CONTROL REALIZADO
- Sintaxis JavaScript verificada con Node.js.
- 10 IDs únicos en el segmento nuevo.
- Ningún ID del segmento 09 coincide con los segmentos 01 a 08 auditados.
- Productos sin rendimiento por superficie marcados calculable:false.
- No se inventaron conversiones entre peso, volumen o superficie.
- Service Worker completo y caché v0.4.2.
- Orden de carga correcto.
- ZIP probado sin corrupción.
