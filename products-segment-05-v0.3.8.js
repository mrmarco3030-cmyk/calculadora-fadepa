/* Calculadora FADEPA · Segmento 05 · v0.3.8
   Datos extraídos de fichas técnicas oficiales FADEPA.
   Cargar después de los segmentos anteriores y antes de app.js.
*/
(() => {
  'use strict';
  const products = [
    {
      id: 'esmalte-alta-temperatura-600c',
      nombre: 'Esmalte Alta Temperatura (hasta 600 °C)',
      categoria: 'Esmaltes especiales',
      unidad: 'litros',
      rendimiento: { min: 8, max: 12, type: 'areaPerUnitPerCoat', display: '8 a 12 m² por litro y por mano' },
      envases: [0.25, 0.5, 4],
      manosDefault: 2,
      manosOpciones: [1, 2, 3],
      manosRecomendadas: 'Aplicar las manos necesarias para lograr cobertura uniforme. La ficha informa 10 horas entre manos.',
      recomendaciones: 'Aplicar únicamente sobre metal desnudo. No aplicar antióxido. Tratar previamente con desoxidante Limpiametal. El curado final se logra al someter la pintura a alta temperatura.',
      tiempos: { entreManos: '10 horas', final: '24 horas; curado final con temperatura elevada', tacto: '3 a 4 horas' },
      preparacion: 'Eliminar totalmente pinturas anteriores hasta dejar metal desnudo. Limpiar y aplicar desoxidante.',
      aplicacion: 'Pincel, rodillo o soplete, preferentemente sin diluir.',
      acabado: 'Resistente hasta 600 °C',
      uso: 'Metales sometidos a elevada temperatura.',
      superficies: ['metal', 'hierro', 'estufa', 'parrilla', 'caño'],
      ambientes: ['interior', 'exterior'],
      problemas: ['alta temperatura', 'calor', 'protección'],
      tags: ['alta temperatura', '600 grados', 'esmalte', 'metal', 'calor'],
      revision: 1, versionFicha: '1.0', fechaActualizacion: '2026-07-24',
      estadoFicha: 'vigente', fuenteFicha: 'Ficha técnica FADEPA', searchVersion: 1
    },
    {
      id: 'frentes-y-muros',
      nombre: 'Frentes y Muros',
      categoria: 'Látex y paredes',
      unidad: 'litros',
      rendimiento: { min: 8, max: 13, type: 'areaPerUnitPerCoat', display: '8 a 13 m² por litro y por mano' },
      envases: [1, 4, 10, 20],
      manosDefault: 3,
      manosOpciones: [3],
      manosRecomendadas: 'La impermeabilización se consigue con un mínimo de 3 manos.',
      recomendaciones: 'Diluir entre 5% y 10% con agua. Sobre mampostería nueva aplicar Sellador Fijador Concentrado diluido 1:2. En superficies pulverulentas o con cal, diluir el sellador 1:3.',
      tiempos: { entreManos: '3 horas', final: '24 horas', tacto: '1,5 horas; máxima resistencia a los 7 días' },
      preparacion: 'Superficie limpia, seca, libre de polvo, grasa, hongos y capas flojas.',
      aplicacion: 'Pincel, rodillo o soplete.',
      acabado: 'Impermeabilizante para fachadas',
      uso: 'Frentes, fachadas y muros exteriores.',
      superficies: ['mampostería', 'revoque', 'pared', 'muro', 'fachada'],
      ambientes: ['exterior'],
      problemas: ['lluvia', 'humedad', 'intemperie', 'impermeabilización'],
      tags: ['frentes', 'muros', 'fachada', 'látex', 'impermeabilizante'],
      revision: 1, versionFicha: '1.0', fechaActualizacion: '2026-07-24',
      estadoFicha: 'vigente', fuenteFicha: 'Ficha técnica FADEPA', searchVersion: 1
    },
    {
      id: 'pintura-asfaltica-concentrada',
      nombre: 'Pintura Asfáltica Concentrada',
      categoria: 'Humedad e impermeabilización',
      unidad: 'litros',
      rendimiento: { min: 5, max: 8, type: 'areaPerUnitPerCoat', display: '5 a 8 m² por litro y por mano' },
      envases: [1, 4, 20],
      manosDefault: 2,
      manosOpciones: [2],
      manosRecomendadas: 'Aplicar 2 manos: la primera pura o con hasta 10% de aguarrás y la segunda pura.',
      recomendaciones: 'El secado es progresivo y presenta tack residual. La aplicación con rodillo genera capas más gruesas y aumenta el tiempo de secado.',
      tiempos: { entreManos: 'Cuando la primera mano esté seca', final: 'Secado progresivo', tacto: 'No especificado' },
      preparacion: 'Superficie seca, limpia y libre de polvo, grasa o pintura vieja mal adherida.',
      aplicacion: 'Preferentemente pinceleta en la primera mano; también puede aplicarse con rodillo.',
      acabado: 'Semimate negro',
      uso: 'Protección anticorrosiva e impermeabilización de estructuras, revoques y ladrillos.',
      superficies: ['revoque', 'ladrillo', 'estructura', 'mampostería'],
      ambientes: ['exterior'],
      problemas: ['corrosión', 'humedad', 'impermeabilización'],
      tags: ['asfáltica', 'negro', 'impermeabilizante', 'estructura', 'revoque'],
      revision: 1, versionFicha: '1.0', fechaActualizacion: '2026-07-24',
      estadoFicha: 'vigente', fuenteFicha: 'Ficha técnica FADEPA', searchVersion: 1
    }
  ];
  const current = Array.isArray(window.PRODUCTS) ? window.PRODUCTS : [];
  const existingIds = new Set(current.map(product => product.id));
  window.PRODUCTS = current.concat(products.filter(product => !existingIds.has(product.id)));
})();
