/* Calculadora FADEPA · Segmento 07 · v0.4.0
   Datos extraídos de fichas técnicas oficiales FADEPA.
   Cargar después de los segmentos anteriores y antes de app.js.
*/
(() => {
  'use strict';
  const products = [
    {
      id: 'fondo-blanco-para-maderas',
      nombre: 'Fondo Blanco para Maderas',
      categoria: 'Fondos y selladores',
      unidad: 'litros',
      rendimiento: { min: 10, max: 12, type: 'areaPerUnitPerCoat', display: '10 a 12 m² por litro y por mano' },
      envases: [0.5, 1, 4, 20],
      manosDefault: 1,
      manosOpciones: [1, 2],
      manosRecomendadas: 'Generalmente se aplica 1 mano como fondo; ajustar según absorción de la madera.',
      recomendaciones: 'Puede diluirse con una pequeña cantidad de aguarrás mineral. Permite lijar y aplicar el acabado luego de 24 horas.',
      tiempos: { entreManos: 'No especificado', final: '24 horas', tacto: '4 horas' },
      preparacion: 'Madera limpia, seca, desengrasada y libre de polvo o pintura vieja mal adherida.',
      aplicacion: 'Pincel o rodillo.',
      acabado: 'Mate blanco y lijable',
      uso: 'Sellado y preparación de maderas nuevas o muy absorbentes.',
      superficies: ['madera', 'puerta', 'ventana', 'mueble'],
      ambientes: ['interior', 'exterior'],
      problemas: ['absorción', 'sellado', 'preparación'],
      tags: ['fondo blanco', 'madera', 'sellador', 'sintético'],
      revision: 1, versionFicha: '1.0', fechaActualizacion: '2026-07-24',
      estadoFicha: 'vigente', fuenteFicha: 'Ficha técnica FADEPA', searchVersion: 1
    },
    {
      id: 'pintura-a-la-cal-en-pasta',
      nombre: 'Pintura a la Cal en Pasta',
      categoria: 'Pinturas minerales',
      unidad: 'litros',
      calculable: false,
      rendimiento: { min: 7, max: 11, type: 'informational', display: '7 a 11 m² por kg y por mano; presentación comercial en litros' },
      envases: [4],
      packageLabels: { '4': 'Balde de 4 litros' },
      manosDefault: 1,
      manosOpciones: [1],
      manosRecomendadas: 'La ficha no fija una cantidad única de manos.',
      recomendaciones: 'Cálculo automático bloqueado: la ficha expresa rendimiento en kg y el envase en litros, sin densidad oficial. Diluir 4 L de producto en 4 L de agua y preparar con 24 horas de anticipación.',
      tiempos: { entreManos: 'No especificado', final: '30 días de fraguado', tacto: '24 horas' },
      preparacion: 'Eliminar polvo, moho y verdín. Humedecer superficies muy secas.',
      aplicacion: 'Brocha, pinceleta o máquina pulverizadora.',
      acabado: 'Mineral a la cal',
      uso: 'Paredes interiores y exteriores compatibles con pintura a la cal.',
      superficies: ['mampostería', 'revoque', 'pared'],
      ambientes: ['interior', 'exterior'],
      problemas: ['decoración', 'respirabilidad', 'cal'],
      tags: ['cal', 'pasta', 'pintura mineral', 'pared'],
      revision: 1, versionFicha: '1.0', fechaActualizacion: '2026-07-24',
      estadoFicha: 'vigente', fuenteFicha: 'Ficha técnica FADEPA', searchVersion: 1
    },
    {
      id: 'esmalte-maquinas-agricolas',
      nombre: 'Esmalte para Máquinas Agrícolas',
      categoria: 'Esmaltes especiales',
      unidad: 'litros',
      calculable: false,
      rendimiento: { min: 15, max: 15, type: 'informational', display: '15 m² por litro y por mano; envases a acordar con el cliente' },
      envases: [],
      packageLabels: {},
      manosDefault: 2,
      manosOpciones: [2],
      manosRecomendadas: 'Aplicar las manos necesarias para lograr cobertura; la ficha informa 10 horas entre manos.',
      recomendaciones: 'Cálculo de envases bloqueado porque las capacidades se acuerdan con cada cliente. Los colores especiales pueden requerir 2 a 3 días de anticipación.',
      tiempos: { entreManos: '10 horas', final: '24 horas', tacto: '3 a 4 horas' },
      preparacion: 'Superficie limpia, seca y desengrasada. Usar el fondo correspondiente según mampostería, madera o metal.',
      aplicacion: 'Pincel, rodillo o soplete; puede diluirse 5% a 10% con aguarrás mineral.',
      acabado: 'Brillante, color según maquinaria',
      uso: 'Máquinas y equipos agrícolas.',
      superficies: ['metal', 'maquinaria agrícola', 'implemento agrícola'],
      ambientes: ['exterior'],
      problemas: ['protección', 'intemperie', 'restauración'],
      tags: ['maquinaria', 'agrícola', 'esmalte', 'metal', 'John Deere'],
      revision: 1, versionFicha: '1.0', fechaActualizacion: '2026-07-24',
      estadoFicha: 'vigente', fuenteFicha: 'Ficha técnica FADEPA', searchVersion: 1
    }
  ];
  const current = Array.isArray(window.PRODUCTS) ? window.PRODUCTS : [];
  const existingIds = new Set(current.map(product => product.id));
  window.PRODUCTS = current.concat(products.filter(product => !existingIds.has(product.id)));
})();
