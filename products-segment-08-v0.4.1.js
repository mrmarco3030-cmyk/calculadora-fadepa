/* Calculadora FADEPA · Segmento 08 corregido · v0.4.1
   Corrección: conserva solamente los productos que no existían previamente.
*/
(() => {
  'use strict';
  const products = [
    {
      id:'esmalte-sintetico-pizarrones',
      nombre:'Pizarrones - Esmalte Sintético',
      categoria:'Esmaltes especiales',
      unidad:'litros',
      rendimiento:{min:14,max:14,type:'areaPerUnitPerCoat',display:'14 m² por litro y por mano'},
      envases:[0.5,1,4],
      manosDefault:2,
      manosOpciones:[1,2,3],
      manosRecomendadas:'La ficha no especifica una cantidad exacta de manos.',
      recomendaciones:'Aplicar con consistencia normal o con la mínima cantidad de aguarrás mineral.',
      tiempos:{entreManos:'6 a 12 horas',final:'24 horas',tacto:'3 horas'},
      preparacion:'Superficie limpia, seca, desengrasada y libre de polvo o pintura vieja mal adherida.',
      aplicacion:'Pincel, rodillo o soplete.',
      acabado:'Mate',
      uso:'Pizarrones interiores sobre fibrofacil, revoque, yeso, panel o fibrocemento.',
      revision:1,versionFicha:'1.0',fechaActualizacion:'2026-07-24',
      estadoFicha:'vigente',fuenteFicha:'Ficha técnica FADEPA',searchVersion:1
    },
    {
      id:'esmalte-alta-temperatura-aluminio-250c',
      nombre:'Esmalte Alta Temperatura Aluminio (hasta 250 °C)',
      categoria:'Esmaltes especiales',
      unidad:'litros',
      rendimiento:{min:15,max:15,type:'areaPerUnitPerCoat',display:'15 m² por litro y por mano'},
      envases:[0.25,0.5,1,4,20],
      manosDefault:2,
      manosOpciones:[1,2,3],
      manosRecomendadas:'La ficha no fija una cantidad exacta de manos.',
      recomendaciones:'Aplicar directamente sobre metal desnudo, sin fondo previo. Puede diluirse con 10% de Diluyente Universal JPP.',
      tiempos:{entreManos:'10 horas',final:'24 horas',tacto:'3 a 4 horas'},
      preparacion:'Superficie limpia, seca, desengrasada y libre de óxido y polvo. En metales pintados, eliminar totalmente la pintura anterior.',
      aplicacion:'Pincel, rodillo o soplete.',
      acabado:'Metalizado aluminio',
      uso:'Estufas, salamandras y caños de conducción de gases calientes, hasta 250 °C.',
      revision:1,versionFicha:'1.0',fechaActualizacion:'2026-07-24',
      estadoFicha:'vigente',fuenteFicha:'Ficha técnica FADEPA',searchVersion:1
    }
  ];
  const current=Array.isArray(window.PRODUCTS)?window.PRODUCTS:[];
  const ids=new Set(current.map(p=>p.id));
  window.PRODUCTS=current.concat(products.filter(p=>!ids.has(p.id)));
})();
