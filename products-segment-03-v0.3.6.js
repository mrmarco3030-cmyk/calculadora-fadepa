/* Calculadora FADEPA · Segmento 03 · v0.3.6 */
(() => {
  'use strict';
  const products = [
    {
      id:'convertidor-y-antioxido', nombre:'Convertidor y Antióxido', categoria:'Fondos y antióxidos',
      unidad:'litros', rendimiento:{min:12,max:18,type:'areaPerUnitPerCoat',display:'12 a 18 m² por litro y por mano'},
      envases:[0.25,0.5,1,4,20], manosDefault:2, manosOpciones:[2],
      manosRecomendadas:'La ficha indica 2 manos.',
      recomendaciones:'Primera mano: hasta 15% de aguarrás. Segunda mano: hasta 10% de aguarrás.',
      tiempos:{entreManos:'4 horas',final:'24 horas',tacto:'2 horas'},
      preparacion:'Metal limpio, seco, desengrasado y libre de polvo y pintura vieja mal adherida.',
      aplicacion:'Pincel, rodillo o soplete.', acabado:'Protección anticorrosiva',
      uso:'Superficies metálicas de hierro y acero.',
      superficies:['hierro','acero','metal'], ambientes:['interior','exterior'],
      problemas:['óxido','corrosión','protección'], tags:['convertidor','antióxido','metal','hierro','fondo'],
      revision:1,versionFicha:'1.0',fechaActualizacion:'2026-07-24',estadoFicha:'vigente',fuenteFicha:'Ficha técnica FADEPA',searchVersion:1
    },
    {
      id:'esmalte-hierro-micaceo', nombre:'Esmalte Hierro Micáceo', categoria:'Esmaltes',
      unidad:'litros', rendimiento:{min:10,max:12,type:'areaPerUnitPerCoat',display:'10 a 12 m² por litro y por mano'},
      envases:[0.5,1,4,20], manosDefault:2, manosOpciones:[2],
      manosRecomendadas:'Aplicar 2 manos de Esmalte Hierro Micáceo sobre el fondo correspondiente.',
      recomendaciones:'Sobre hierro limpio aplicar antes una mano de Fondo Convertidor y Antióxido Gris. No pintar en condiciones extremas de humedad o temperatura.',
      tiempos:{entreManos:'8 horas',final:'24 horas',tacto:'2 horas'},
      preparacion:'Superficie limpia, seca, sin óxido, grasitud, hongos, polvo ni pintura floja. Lijar superficies brillantes hasta matearlas.',
      aplicacion:'Pincel, rodillo o soplete; puede diluirse con aguarrás mineral.',
      acabado:'Texturado tipo hierro forjado', uso:'Hierro, madera y mampostería correctamente preparados.',
      superficies:['hierro','metal','madera','mampostería'], ambientes:['interior','exterior'],
      problemas:['corrosión','protección','terminación'], tags:['hierro micáceo','esmalte','metal','forjado'],
      revision:1,versionFicha:'1.0',fechaActualizacion:'2026-07-24',estadoFicha:'vigente',fuenteFicha:'Ficha técnica FADEPA',searchVersion:1
    },
    {
      id:'sellador-nitrocelulosico', nombre:'Sellador Nitrocelulósico', categoria:'Maderas y selladores',
      unidad:'litros', rendimiento:{min:8,max:10,type:'areaPerUnitPerCoat',display:'8 a 10 m² por litro y por mano'},
      envases:[0.25,0.5,1,4,20], manosDefault:2, manosOpciones:[2,3],
      manosRecomendadas:'Aplicar 2 o 3 manos con intervalos de 1 hora, lijando suavemente entre manos.',
      recomendaciones:'Diluir entre 1 y 2 volúmenes de thinner de buena calidad por cada volumen de sellador.',
      tiempos:{entreManos:'1 hora',final:'No especificado en la ficha',tacto:'30 minutos a 1 hora'},
      preparacion:'Madera interior limpia, seca, desengrasada y libre de polvo o recubrimientos viejos mal adheridos.',
      aplicacion:'Soplete.', acabado:'Semimate transparente y lijable',
      uso:'Preparación de maderas interiores antes de aplicar lacas.',
      superficies:['madera'], ambientes:['interior'],
      problemas:['porosidad','sellado','preparación'], tags:['sellador','nitrocelulósico','madera','laca'],
      revision:1,versionFicha:'1.0',fechaActualizacion:'2026-07-24',estadoFicha:'vigente',fuenteFicha:'Ficha técnica FADEPA',searchVersion:1
    }
  ];
  const current=Array.isArray(window.PRODUCTS)?window.PRODUCTS:[];
  const ids=new Set(current.map(p=>p.id));
  window.PRODUCTS=current.concat(products.filter(p=>!ids.has(p.id)));
})();