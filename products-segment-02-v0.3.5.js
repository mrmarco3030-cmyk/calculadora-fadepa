/* Calculadora FADEPA · Segmento 02 · v0.3.5
   Agrega 5 variantes/productos calculables.
   Cargar después de products-segment-01-v0.3.4.js y antes de app.js.
*/
(() => {
  'use strict';

  const products = [
    {
      id: 'membrana-techo-y-muro-techo',
      nombre: 'Membrana Techo y Muro - Aplicación en Techo',
      categoria: 'Techos e impermeabilización',
      unidad: 'kg',
      rendimiento: {
        min: 1.1,
        max: 1.5,
        type: 'quantityPerAreaFinished',
        display: '1,1 a 1,5 kg/m² de trabajo terminado'
      },
      envases: [1.2, 4.8, 12, 24],
      manosDefault: 4,
      manosOpciones: [4, 5],
      manosRecomendadas: 'Trabajo terminado con 4 o 5 manos: primera mano diluida 30% a 40% con agua y las siguientes sin diluir.',
      recomendaciones: 'El consumo indicado ya incluye todas las manos. No multiplicar nuevamente por la cantidad de manos. Aplicar sobre techos con pendiente mayor al 1%.',
      tiempos: {
        entreManos: '4 a 8 horas',
        final: '24 horas',
        tacto: 'Coalescencia UV y máxima resistencia al ensuciamiento: 7 días'
      },
      preparacion: 'Superficie limpia, seca, desengrasada y libre de óxido, polvo y partes flojas. Redondear aristas y ángulos.',
      aplicacion: 'Pinceleta o rodillo. Se recomienda aplicar la imprimación con pincel y cruzar el sentido entre manos.',
      acabado: 'Mate, impermeable, transitable y atérmico',
      uso: 'Techos y losas transitables con inclinación adecuada.',
      superficies: ['techo', 'losa', 'terraza', 'cubierta'],
      ambientes: ['exterior'],
      problemas: ['filtración', 'humedad', 'impermeabilización', 'intemperie'],
      tags: ['membrana', 'techo', 'losa', 'impermeable', 'transitable'],
      revision: 1,
      versionFicha: '1.0',
      fechaActualizacion: '2026-07-24',
      estadoFicha: 'vigente',
      fuenteFicha: 'Ficha técnica FADEPA',
      searchVersion: 1
    },
    {
      id: 'membrana-techo-y-muro-muro',
      nombre: 'Membrana Techo y Muro - Aplicación en Muro',
      categoria: 'Muros e impermeabilización',
      unidad: 'kg',
      rendimiento: {
        min: 0.4,
        max: 0.8,
        type: 'quantityPerAreaFinished',
        display: '0,4 a 0,8 kg/m² de trabajo terminado'
      },
      envases: [1.2, 4.8, 12, 24],
      manosDefault: 2,
      manosOpciones: [2, 3],
      manosRecomendadas: 'Trabajo terminado con 2 o 3 manos según la superficie. La primera puede utilizarse como imprimación diluida 30% a 40%.',
      recomendaciones: 'El consumo indicado ya contempla el trabajo terminado. No multiplicar nuevamente por la cantidad de manos.',
      tiempos: {
        entreManos: '4 a 8 horas',
        final: '24 horas',
        tacto: 'Coalescencia UV y máxima resistencia al ensuciamiento: 7 días'
      },
      preparacion: 'Superficie limpia, seca, desengrasada y libre de óxido, polvo y partes flojas.',
      aplicacion: 'Pinceleta o rodillo, cruzando el sentido entre manos.',
      acabado: 'Mate, impermeable y resistente a la intemperie',
      uso: 'Muros de revoque, ladrillo y mampostería que requieran impermeabilización.',
      superficies: ['muro', 'pared exterior', 'revoque', 'ladrillo', 'mampostería'],
      ambientes: ['exterior'],
      problemas: ['humedad', 'filtración', 'impermeabilización', 'intemperie'],
      tags: ['membrana', 'muro', 'pared', 'fachada', 'impermeable'],
      revision: 1,
      versionFicha: '1.0',
      fechaActualizacion: '2026-07-24',
      estadoFicha: 'vigente',
      fuenteFicha: 'Ficha técnica FADEPA',
      searchVersion: 1
    },
    {
      id: 'laca-universal-deck-brillante',
      nombre: 'Laca Universal - Deck Brillante',
      categoria: 'Maderas y barnices',
      unidad: 'litros',
      rendimiento: {
        min: 10,
        max: 15,
        type: 'areaPerUnitPerCoat',
        display: '10 a 15 m² por litro y por mano'
      },
      envases: [0.25, 0.5, 1, 4, 20],
      manosDefault: 4,
      manosOpciones: [2, 3, 4],
      manosRecomendadas: 'Como laca sobre madera nueva: primera mano diluida 20% a 30% y 2 o 3 manos restantes diluidas 5%. Sobre superficie barnizada en buen estado: 2 o 3 manos.',
      recomendaciones: 'Como impregnante se diluye 1:1 con aguarrás. Esa modalidad modifica el consumo real y debe estimarse con precaución.',
      tiempos: {
        entreManos: '8 horas',
        final: '18 a 24 horas',
        tacto: '5 horas'
      },
      preparacion: 'Madera limpia, seca, desengrasada y libre de polvo o barniz viejo mal adherido.',
      aplicacion: 'Pincel, rodillo o soplete. Para soplete, diluir con aguarrás de buena calidad.',
      acabado: 'Brillante transparente',
      uso: 'Protección y embellecimiento de maderas interiores y exteriores, incluso decks y ambientes marinos.',
      superficies: ['madera', 'deck', 'puerta', 'ventana', 'mueble'],
      ambientes: ['interior', 'exterior'],
      problemas: ['rayos UV', 'intemperie', 'protección', 'desgaste'],
      tags: ['laca', 'deck', 'madera', 'brillante', 'filtro solar'],
      revision: 1,
      versionFicha: '1.0',
      fechaActualizacion: '2026-07-24',
      estadoFicha: 'vigente',
      fuenteFicha: 'Ficha técnica FADEPA',
      searchVersion: 1
    },
    {
      id: 'esmalte-sintetico-brillante',
      nombre: 'Esmalte Sintético Brillante',
      categoria: 'Esmaltes',
      unidad: 'litros',
      rendimiento: {
        min: 15,
        max: 15,
        type: 'areaPerUnitPerCoat',
        display: '15 m² por litro y por mano'
      },
      envases: [0.25, 0.5, 1, 4, 20],
      manosDefault: 2,
      manosOpciones: [1, 2, 3],
      manosRecomendadas: 'La ficha no fija una cantidad única. Para estimación general se sugieren 2 manos, ajustando según color, fondo y estado de la superficie.',
      recomendaciones: 'Diluir 5% a 10% con aguarrás mineral. Sobre metal nuevo aplicar antes dos manos de Fondo Antióxido Industrial; no están incluidas en este cálculo.',
      tiempos: {
        entreManos: '10 horas',
        final: '24 horas',
        tacto: '3 a 4 horas'
      },
      preparacion: 'Superficie limpia, seca, desengrasada y libre de óxido y polvo. Eliminar hongos con lavandina y enjuagar.',
      aplicacion: 'Pincel, rodillo o soplete.',
      acabado: 'Brillante',
      uso: 'Mampostería, madera y metal, según preparación y fondo correspondiente.',
      superficies: ['metal', 'madera', 'mampostería', 'revoque', 'puerta', 'reja'],
      ambientes: ['interior', 'exterior'],
      problemas: ['protección', 'corrosión', 'terminación'],
      tags: ['esmalte', 'sintético', 'brillante', 'metal', 'madera'],
      revision: 1,
      versionFicha: '1.0',
      fechaActualizacion: '2026-07-24',
      estadoFicha: 'vigente',
      fuenteFicha: 'Ficha técnica FADEPA',
      searchVersion: 1
    },
    {
      id: 'fade-caucho-membrana-poliuretanica',
      nombre: 'FADE-Caucho Membrana Poliuretánica con Neumático Molido',
      categoria: 'Techos e impermeabilización',
      unidad: 'kg',
      rendimiento: {
        min: 1,
        max: 1.25,
        type: 'quantityPerAreaFinished',
        display: '1 a 1,25 kg/m² de trabajo terminado, con 4 manos'
      },
      envases: [5, 10, 20],
      manosDefault: 4,
      manosOpciones: [4],
      manosRecomendadas: '4 manos: primera diluida 30% con agua y tres manos sin diluir.',
      recomendaciones: 'El consumo ya incluye las 4 manos. No diluir la segunda, tercera ni cuarta mano. Aplicar sobre techos con pendiente mayor al 1% y superficies no demasiado cálidas.',
      tiempos: {
        entreManos: '4 horas',
        final: '24 horas',
        tacto: 'Coalescencia UV y resistencia al ensuciamiento: 7 días de sol'
      },
      preparacion: 'Superficie limpia, seca, desengrasada y libre de óxido y polvo. Redondear aristas y ángulos.',
      aplicacion: 'Pincel o rodillo. La mano de imprimación debe aplicarse a pincel.',
      acabado: 'Rugoso mate, color gris',
      uso: 'Impermeabilización de techos, losas, revoques, ladrillos y superficies galvanizadas.',
      superficies: ['techo', 'losa', 'revoque', 'ladrillo', 'galvanizado'],
      ambientes: ['exterior'],
      problemas: ['filtración', 'humedad', 'impermeabilización', 'intemperie'],
      tags: ['poliuretánica', 'caucho', 'neumático', 'membrana', 'techo'],
      revision: 1,
      versionFicha: '1.0',
      fechaActualizacion: '2026-07-24',
      estadoFicha: 'vigente',
      fuenteFicha: 'Ficha técnica FADEPA',
      searchVersion: 1
    }
  ];

  const current = Array.isArray(window.PRODUCTS) ? window.PRODUCTS : [];
  const existingIds = new Set(current.map(product => product.id));
  window.PRODUCTS = current.concat(products.filter(product => !existingIds.has(product.id)));
})();
