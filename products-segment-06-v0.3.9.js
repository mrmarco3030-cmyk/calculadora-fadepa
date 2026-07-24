/* Calculadora FADEPA · Segmento 06 · v0.3.9
   Datos extraídos de fichas técnicas oficiales FADEPA.
   Cargar después de los segmentos anteriores y antes de app.js.
*/
(() => {
  'use strict';
  const products = [
    {
      id: 'impregnante-madera-accion-multiple-brillante',
      nombre: 'Impregnante para Madera de Acción Múltiple Brillante',
      categoria: 'Maderas y barnices',
      unidad: 'litros',
      rendimiento: { min: 14, max: 16, type: 'areaPerUnitPerCoat', display: '14 a 16 m² por litro y por mano' },
      envases: [0.5, 1, 4, 20],
      manosDefault: 3,
      manosOpciones: [2, 3],
      manosRecomendadas: 'Madera nueva: 2 manos en interior y 3 manos en exterior.',
      recomendaciones: 'Aplicar sin diluir siguiendo la orientación de las vetas. En superficies pintadas o barnizadas eliminar totalmente la película existente. Mantenimiento sugerido cada 2 años.',
      tiempos: { entreManos: '10 horas', final: '10 a 24 horas', tacto: '1 a 3 horas' },
      preparacion: 'Lijar y comprobar que la madera esté seca, limpia, sin polvo ni grasitud.',
      aplicacion: 'Pincel o soplete, sin diluir.',
      acabado: 'Brillante transparente',
      uso: 'Protección integral de maderas interiores y exteriores; curador, sellador y lasur.',
      superficies: ['madera', 'puerta', 'ventana', 'mueble', 'deck'],
      ambientes: ['interior', 'exterior'],
      problemas: ['hongos', 'radiación UV', 'humedad', 'protección'],
      tags: ['impregnante', 'madera', 'brillante', 'lasur', 'protector'],
      revision: 1, versionFicha: '1.0', fechaActualizacion: '2026-07-24',
      estadoFicha: 'vigente', fuenteFicha: 'Ficha técnica FADEPA', searchVersion: 1
    },
    {
      id: 'impregnante-madera-accion-multiple-satinado',
      nombre: 'Impregnante para Madera de Acción Múltiple Satinado',
      categoria: 'Maderas y barnices',
      unidad: 'litros',
      rendimiento: { min: 14, max: 16, type: 'areaPerUnitPerCoat', display: '14 a 16 m² por litro y por mano' },
      envases: [0.5, 1, 4, 20],
      manosDefault: 3,
      manosOpciones: [2, 3],
      manosRecomendadas: 'Madera nueva: 2 manos en interior y 3 manos en exterior.',
      recomendaciones: 'Aplicar sin diluir siguiendo la orientación de las vetas. En superficies pintadas o barnizadas eliminar totalmente la película existente. Mantenimiento sugerido cada 2 años.',
      tiempos: { entreManos: '10 horas', final: '10 a 24 horas', tacto: '1 a 3 horas' },
      preparacion: 'Lijar y comprobar que la madera esté seca, limpia, sin polvo ni grasitud.',
      aplicacion: 'Pincel o soplete, sin diluir.',
      acabado: 'Satinado transparente',
      uso: 'Protección integral de maderas interiores y exteriores; curador, sellador y lasur.',
      superficies: ['madera', 'puerta', 'ventana', 'mueble', 'deck'],
      ambientes: ['interior', 'exterior'],
      problemas: ['hongos', 'radiación UV', 'humedad', 'protección'],
      tags: ['impregnante', 'madera', 'satinado', 'lasur', 'protector'],
      revision: 1, versionFicha: '1.0', fechaActualizacion: '2026-07-24',
      estadoFicha: 'vigente', fuenteFicha: 'Ficha técnica FADEPA', searchVersion: 1
    },
    {
      id: 'piletas-natacion-acrilico-acuoso',
      nombre: 'Piletas de Natación - Acrílico Base Acuosa',
      categoria: 'Piletas',
      unidad: 'litros',
      rendimiento: { min: 10, max: 14, type: 'areaPerUnitPerCoat', display: '10 a 14 m² por litro y por mano' },
      envases: [1, 4, 10, 20],
      manosDefault: 2,
      manosOpciones: [2],
      manosRecomendadas: 'Aplicar 2 manos: primera diluida 20% con agua y segunda diluida 5%.',
      recomendaciones: 'No llenar la pileta hasta que hayan transcurrido 7 días de sol desde la terminación.',
      tiempos: { entreManos: 'Una vez seca la mano anterior', final: '7 días de sol antes del llenado', tacto: '2 a 4 horas' },
      preparacion: 'Eliminar completamente recubrimientos anteriores, tratar con Limpiador Restos de Obra diluido 1:1 y luego hidrolavar.',
      aplicacion: 'Pincel, rodillo o soplete.',
      acabado: 'Acrílico resistente al agua y a productos químicos',
      uso: 'Piletas de revoque, cemento u hormigón.',
      superficies: ['pileta', 'hormigón', 'cemento', 'revoque'],
      ambientes: ['exterior'],
      problemas: ['algas', 'microorganismos', 'agua', 'intemperie'],
      tags: ['pileta', 'piscina', 'acrílico', 'base acuosa', 'hormigón'],
      revision: 1, versionFicha: '1.0', fechaActualizacion: '2026-07-24',
      estadoFicha: 'vigente', fuenteFicha: 'Ficha técnica FADEPA', searchVersion: 1
    }
  ];
  const current = Array.isArray(window.PRODUCTS) ? window.PRODUCTS : [];
  const existingIds = new Set(current.map(product => product.id));
  window.PRODUCTS = current.concat(products.filter(product => !existingIds.has(product.id)));
})();
