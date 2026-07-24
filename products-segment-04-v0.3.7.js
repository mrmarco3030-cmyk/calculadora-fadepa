/* Calculadora FADEPA · Segmento 04 · v0.3.7 */
(() => {
  'use strict';
  const products = [
    {
      id:'demarcacion-vial-alto-transito', nombre:'Demarcación Vial - Alto Tránsito', categoria:'Pisos y demarcación',
      unidad:'litros', rendimiento:{min:3,max:5,type:'areaPerUnitPerCoat',display:'3 a 5 m² por litro y por mano'},
      envases:[4,20], manosDefault:2, manosOpciones:[1,2],
      manosRecomendadas:'Para mayor cobertura y resistencia se contempla una segunda mano.',
      recomendaciones:'Uso exterior. No utilizar en estaciones de servicio. Diluyentes recomendados: poliuretánico, epoxi o para pileta y caucho clorado.',
      tiempos:{entreManos:'8 horas',final:'24 horas',tacto:'2 horas'},
      preparacion:'Pavimento firme, limpio y seco. Delimitar líneas con cinta y retirarla al terminar.',
      aplicacion:'Rodillo o pincel.', acabado:'Semimate',
      uso:'Tránsito vehicular y peatonal, estacionamientos, garages, depósitos, aceras y calzadas.',
      superficies:['asfalto','hormigón','pavimento','piso'], ambientes:['exterior'],
      problemas:['demarcación','alto tránsito','abrasión'], tags:['vial','demarcación','piso','tránsito','líneas'],
      revision:1,versionFicha:'1.0',fechaActualizacion:'2026-07-24',estadoFicha:'vigente',fuenteFicha:'Ficha técnica FADEPA',searchVersion:1
    },
    {
      id:'colmenas-esmalte-sintetico', nombre:'Colmenas - Esmalte Sintético', categoria:'Esmaltes',
      unidad:'litros', rendimiento:{min:12,max:15,type:'areaPerUnitPerCoat',display:'12 a 15 m² por litro y por mano'},
      envases:[4,20], manosDefault:2, manosOpciones:[2],
      manosRecomendadas:'Aplicar 2 manos sobre superficies correctamente preparadas.',
      recomendaciones:'Sobre madera nueva aplicar Fondo Blanco para Maderas. Sobre metal nuevo aplicar dos manos de Fondo Antióxido Industrial.',
      tiempos:{entreManos:'10 horas',final:'24 horas',tacto:'2 horas'},
      preparacion:'Superficie limpia, seca, desengrasada y libre de polvo o pintura vieja mal adherida.',
      aplicacion:'Pincel, rodillo o soplete, con mínima cantidad de aguarrás mineral si fuera necesario.',
      acabado:'Brillante', uso:'Protección y terminación de colmenas de madera o metal.',
      superficies:['madera','metal','colmena'], ambientes:['exterior'],
      problemas:['intemperie','protección','terminación'], tags:['colmenas','esmalte','madera','metal'],
      revision:1,versionFicha:'1.0',fechaActualizacion:'2026-07-24',estadoFicha:'vigente',fuenteFicha:'Ficha técnica FADEPA',searchVersion:1
    },
    {
      id:'premium-satinado-interior-exterior', nombre:'Premium Satinado Interior / Exterior', categoria:'Látex interior y exterior',
      unidad:'litros', rendimiento:{min:10,max:14,type:'areaPerUnitPerCoat',display:'10 a 14 m² por litro y por mano'},
      envases:[1,4,10,20], manosDefault:2, manosOpciones:[1,2,3],
      manosRecomendadas:'Habitualmente 2 manos, ajustando según color y estado de la superficie.',
      recomendaciones:'Diluir 10% a 20% con agua para mayor nivelación. No aplicar sobre superficies pulverulentas o pinturas a la cal sin tratamiento adecuado.',
      tiempos:{entreManos:'No especificado en la ficha',final:'7 días',tacto:'1 a 2 horas'},
      preparacion:'Superficie limpia, seca, desengrasada y libre de hongos, polvo y partes flojas. Lijar superficies brillantes o semimates.',
      aplicacion:'Pincel, rodillo o soplete.', acabado:'Satinado',
      uso:'Yeso, mampostería, madera, metal y enduido plástico correctamente preparados.',
      superficies:['yeso','mampostería','madera','metal','enduido','pared'], ambientes:['interior','exterior'],
      problemas:['lavado','terminación','protección'], tags:['premium','satinado','látex','pared','lavable'],
      revision:1,versionFicha:'1.0',fechaActualizacion:'2026-07-24',estadoFicha:'vigente',fuenteFicha:'Ficha técnica FADEPA',searchVersion:1
    }
  ];
  const current=Array.isArray(window.PRODUCTS)?window.PRODUCTS:[];
  const ids=new Set(current.map(p=>p.id));
  window.PRODUCTS=current.concat(products.filter(p=>!ids.has(p.id)));
})();