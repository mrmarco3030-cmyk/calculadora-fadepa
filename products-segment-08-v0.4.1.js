/* Calculadora FADEPA · Segmento 08 · v0.4.1
   Datos extraídos exclusivamente de fichas técnicas oficiales FADEPA.
   Cargar después del segmento 07 y antes de app.js.
*/
(() => {
  'use strict';

  const products = [
    {
      id: 'premium-satinado-interior-exterior',
      nombre: 'Premium Satinado Interior / Exterior',
      categoria: 'Látex y pinturas para paredes',
      unidad: 'litros',
      rendimiento: { min: 10, max: 14, type: 'areaPerUnitPerCoat', display: '10 a 14 m² por litro y por mano' },
      envases: [1, 4, 10, 20],
      manosDefault: 2,
      manosOpciones: [1, 2, 3],
      manosRecomendadas: 'Aplicar las manos necesarias para lograr cobertura uniforme. La ficha no fija una cantidad exacta.',
      recomendaciones: 'Aplicar a pincel, rodillo o soplete, con consistencia normal o diluido entre 10% y 20% con agua para mejorar la nivelación. No se recomienda sobre superficies pulverulentas a la cal.',
      tiempos: { entreManos: 'No especificado en la ficha', final: '7 días', tacto: '1 a 2 horas' },
      preparacion: 'La superficie debe estar limpia, seca, desengrasada y libre de óxido y polvo. Eliminar hongos con lavandina y enjuagar. Lijar superficies brillantes o semimates.',
      aplicacion: 'Pincel, rodillo o soplete.',
      acabado: 'Satinado, tipo cáscara de huevo',
      uso: 'Paredes interiores y exteriores, yeso, enduido y paneles de construcción en seco.',
      formulas: {}
    },
    {
      id: 'esmalte-sintetico-colmenas',
      nombre: 'Colmenas - Esmalte Sintético',
      categoria: 'Esmaltes especiales',
      unidad: 'litros',
      rendimiento: { min: 12, max: 15, type: 'areaPerUnitPerCoat', display: '12 a 15 m² por litro y por mano' },
      envases: [4, 20],
      manosDefault: 2,
      manosOpciones: [1, 2, 3],
      manosRecomendadas: 'En repintados en buen estado, la ficha indica aplicar 2 manos.',
      recomendaciones: 'Aplicar con consistencia normal o con la mínima cantidad de aguarrás mineral necesaria. En madera nueva aplicar Fondo Blanco para Maderas; en metal nuevo, dos manos de Fondo Antióxido Industrial.',
      tiempos: { entreManos: '10 horas', final: '24 horas', tacto: '2 horas' },
      preparacion: 'Superficie limpia, seca, desengrasada, libre de polvo y pintura vieja mal adherida. Lijar suavemente repintados en buen estado.',
      aplicacion: 'Pincel, rodillo o soplete.',
      acabado: 'Brillante',
      uso: 'Protección y terminación de objetos, especialmente colmenas.',
      formulas: {}
    },
    {
      id: 'esmalte-sintetico-pizarrones',
      nombre: 'Pizarrones - Esmalte Sintético',
      categoria: 'Esmaltes especiales',
      unidad: 'litros',
      rendimiento: { min: 14, max: 14, type: 'areaPerUnitPerCoat', display: '14 m² por litro y por mano' },
      envases: [0.5, 1, 4],
      manosDefault: 2,
      manosOpciones: [1, 2, 3],
      manosRecomendadas: 'La ficha no especifica una cantidad exacta de manos.',
      recomendaciones: 'Aplicar con consistencia normal o diluido con la mínima cantidad de aguarrás mineral. Sobre mampostería nueva usar Fijador al Aguarrás; sobre madera, Fondo Blanco; sobre metal, Fondo Antióxido Industrial Sintético.',
      tiempos: { entreManos: '6 a 12 horas', final: '24 horas', tacto: '3 horas' },
      preparacion: 'Superficie limpia, seca, desengrasada y libre de polvo o pintura vieja mal adherida.',
      aplicacion: 'Pincel, rodillo o soplete.',
      acabado: 'Mate',
      uso: 'Pizarrones interiores sobre fibrofacil, revoque, yeso, panel o fibrocemento.',
      formulas: {}
    },
    {
      id: 'profesional-interior',
      nombre: 'Profesional Interior',
      categoria: 'Látex y pinturas para paredes',
      unidad: 'litros',
      rendimiento: { min: 8, max: 10, type: 'areaPerUnitPerCoat', display: '8 a 10 m² por litro y por mano' },
      envases: [1, 4, 10, 20],
      manosDefault: 2,
      manosOpciones: [1, 2, 3],
      manosRecomendadas: 'La ficha no fija una cantidad exacta; dejar al menos 3 horas entre manos.',
      recomendaciones: 'Aplicar con consistencia normal o con la mínima cantidad de agua necesaria. Sobre mampostería nueva usar Sellador-Fijador Concentrado 1:2; sobre superficies pulverulentas, 1:2,5.',
      tiempos: { entreManos: '3 horas', final: '5 a 7 días', tacto: '1,5 horas' },
      preparacion: 'Superficies limpias, secas y libres de polvo. Eliminar partes flojas o capas gruesas de pintura a la cal.',
      aplicacion: 'Pincel, rodillo o soplete.',
      acabado: 'Mate',
      uso: 'Paredes interiores.',
      formulas: {}
    },
    {
      id: 'esmalte-alta-temperatura-aluminio-250c',
      nombre: 'Esmalte Alta Temperatura Aluminio (hasta 250 °C)',
      categoria: 'Esmaltes especiales',
      unidad: 'litros',
      rendimiento: { min: 15, max: 15, type: 'areaPerUnitPerCoat', display: '15 m² por litro y por mano' },
      envases: [0.25, 0.5, 1, 4, 20],
      manosDefault: 2,
      manosOpciones: [1, 2, 3],
      manosRecomendadas: 'La ficha no fija una cantidad exacta de manos.',
      recomendaciones: 'Aplicar directamente sobre metal desnudo, sin fondo previo. Puede diluirse con 10% de Diluyente Universal JPP.',
      tiempos: { entreManos: '10 horas', final: '24 horas', tacto: '3 a 4 horas' },
      preparacion: 'Superficie limpia, seca, desengrasada y libre de óxido y polvo. En metales pintados, eliminar totalmente la pintura anterior.',
      aplicacion: 'Pincel, rodillo o soplete.',
      acabado: 'Metalizado aluminio',
      uso: 'Estufas, salamandras y caños de conducción de gases calientes, hasta 250 °C.',
      formulas: {}
    }
  ];

  const current = window.PRODUCTS || [];
  const existingIds = new Set(current.map(product => product.id));
  window.PRODUCTS = current.concat(
    products.filter(product => !existingIds.has(product.id))
  );
})();
