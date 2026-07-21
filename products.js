window.PRODUCTS = [
  {
    "id": "pintura-epoxi-cemento",
    "nombre": "Pintura Epoxi - Superficie Cementicia",
    "categoria": "Epoxi y pisos",
    "unidad": "kg",
    "rendimiento": {
      "min": 1,
      "max": 1,
      "type": "quantityPerAreaFinished",
      "display": "1,00 kg/m² de trabajo terminado"
    },
    "envases": [
      0.26,
      1.02,
      4.08
    ],
    "packageLabels": {
      "0.26": "Kit 200 g A + 60 g B",
      "1.02": "Kit 800 g A + 220 g B",
      "4.08": "Kit 3200 g A + 880 g B"
    },
    "manosDefault": 3,
    "manosOpciones": [
      3
    ],
    "manosRecomendadas": "El consumo indicado corresponde al trabajo terminado. La ficha describe una primera mano selladora y luego segunda y tercera mano.",
    "recomendaciones": "Uso interior. Mezclar A+B durante 15 minutos. Primera mano diluida 50-100%; segunda y tercera con máximo 10%. Aplicar la mezcla antes de 4 horas.",
    "tiempos": {
      "entreManos": "8 a 24 horas",
      "final": "Alto impacto: 7 días",
      "tacto": "Tránsito peatonal: 36 horas"
    },
    "preparacion": "Superficie cementicia absorbente, limpia y porosa. No aplicar sobre pisos pulidos, cerámicos ni porcelanatos. Temperatura superior a 10 °C.",
    "aplicacion": "Pincel o rodillo epoxi; también pulverizador según ficha.",
    "acabado": "Duro, impermeable y resistente a la abrasión",
    "uso": "Pisos y estructuras interiores de hormigón o mortero.",
    "revision": 1,
    "versionFicha": "1.0",
    "fechaActualizacion": "2026-07-21",
    "estadoFicha": "vigente",
    "fuenteFicha": "Ficha técnica FADEPA",
    "historialCambios": [
      {
        "revision": 1,
        "fecha": "2026-07-21",
        "detalle": "Alta inicial en la base técnica de la calculadora."
      }
    ],
    "superficies": [
      "cemento",
      "hormigón",
      "mortero",
      "piso"
    ],
    "ambientes": [
      "interior"
    ],
    "problemas": [
      "alto tránsito",
      "desgaste",
      "protección"
    ],
    "tags": [
      "epoxi",
      "piso",
      "industrial",
      "cementicio",
      "garage",
      "taller"
    ],
    "searchVersion": 1
  },
  {
    "id": "pintura-epoxi-metal",
    "nombre": "Pintura Epoxi - Superficie Metálica",
    "categoria": "Epoxi y pisos",
    "unidad": "kg",
    "rendimiento": {
      "min": 0.12,
      "max": 0.14,
      "type": "quantityPerAreaPerCoat",
      "display": "0,12 a 0,14 kg/m² por mano, a 50 μm de película seca"
    },
    "envases": [
      0.26,
      1.02,
      4.08
    ],
    "packageLabels": {
      "0.26": "Kit 200 g A + 60 g B",
      "1.02": "Kit 800 g A + 220 g B",
      "4.08": "Kit 3200 g A + 880 g B"
    },
    "manosDefault": 2,
    "manosOpciones": [
      1,
      2,
      3
    ],
    "manosRecomendadas": "Según protección requerida; la ficha informa consumo por cada mano de 50 micrómetros.",
    "recomendaciones": "Uso interior. Mezclar los dos componentes completos. No usar diluyentes distintos del epoxi o poliuretánico recomendado.",
    "tiempos": {
      "entreManos": "8 a 24 horas",
      "final": "Alto impacto: 7 días",
      "tacto": "Tránsito peatonal: 36 horas"
    },
    "preparacion": "Metal limpio, seco, desengrasado y correctamente acondicionado. Temperatura superior a 10 °C.",
    "aplicacion": "Pincel, rodillo epoxi o pulverizador.",
    "acabado": "Duro, impermeable y resistente a la abrasión",
    "uso": "Acero, aluminio y estructuras metálicas interiores.",
    "revision": 1,
    "versionFicha": "1.0",
    "fechaActualizacion": "2026-07-21",
    "estadoFicha": "vigente",
    "fuenteFicha": "Ficha técnica FADEPA",
    "historialCambios": [
      {
        "revision": 1,
        "fecha": "2026-07-21",
        "detalle": "Alta inicial en la base técnica de la calculadora."
      }
    ],
    "superficies": [
      "metal",
      "acero",
      "aluminio",
      "estructura metálica"
    ],
    "ambientes": [
      "interior"
    ],
    "problemas": [
      "corrosión",
      "desgaste",
      "protección"
    ],
    "tags": [
      "epoxi",
      "metal",
      "industrial",
      "máquina",
      "estructura"
    ],
    "searchVersion": 1
  },
  {
    "id": "porcelanato-liquido-autonivelante",
    "nombre": "Porcelanato Líquido Cristal - Autonivelante",
    "categoria": "Epoxi y pisos",
    "calculable": false,
    "unidad": "kit",
    "rendimiento": {
      "display": "1 litro/m² por mano; la ficha comercializa juegos por peso"
    },
    "envases": [],
    "packageLabels": {
      "0.75": "Kit 500 g A + 250 g B",
      "3": "Kit 2000 g A + 1000 g B"
    },
    "manosDefault": 1,
    "manosOpciones": [
      1
    ],
    "manosRecomendadas": "1 mano autonivelante, sin superar 8 mm de espesor.",
    "recomendaciones": "No se calcula automáticamente porque la ficha expresa el rendimiento en litros pero los juegos comerciales en gramos, sin informar una conversión de densidad. Consultar al Departamento Técnico para convertir superficie a kits.",
    "tiempos": {
      "entreManos": "No especificado",
      "final": "7 días",
      "tacto": "6 horas; tránsito peatonal 48 horas"
    },
    "preparacion": "Superficie limpia y preparada. Uso interior.",
    "aplicacion": "Mezclar A+B lentamente durante un minuto, verter y esparcir con espátula o llana dentada en 30-40 minutos.",
    "acabado": "Brillante y autonivelante",
    "uso": "Pisos, mesas, mesadas, cuadros y pisos 3D sobre madera, concreto, cerámica, cemento u hormigón.",
    "revision": 1,
    "versionFicha": "1.0",
    "fechaActualizacion": "2026-07-21",
    "estadoFicha": "vigente",
    "fuenteFicha": "Ficha técnica FADEPA",
    "historialCambios": [
      {
        "revision": 1,
        "fecha": "2026-07-21",
        "detalle": "Alta inicial en la base técnica de la calculadora."
      }
    ],
    "superficies": [
      "piso",
      "madera",
      "concreto",
      "cerámica",
      "cemento",
      "mesada"
    ],
    "ambientes": [
      "interior"
    ],
    "problemas": [
      "nivelación",
      "acabado decorativo"
    ],
    "tags": [
      "porcelanato",
      "autonivelante",
      "epoxi",
      "piso 3d",
      "mesa",
      "mesada"
    ],
    "searchVersion": 1
  },
  {
    "id": "porcelanato-liquido-sellador",
    "nombre": "Porcelanato Líquido Cristal - Sellador para Cemento Alisado",
    "categoria": "Epoxi y pisos",
    "calculable": false,
    "unidad": "kit",
    "rendimiento": {
      "display": "16 m² por litro y por mano, mezclado con igual volumen de Diluyente Epoxi"
    },
    "envases": [],
    "manosDefault": 1,
    "manosOpciones": [
      1
    ],
    "manosRecomendadas": "1 mano como sellador, con mezcla A+B y Diluyente Epoxi en relación 1:1.",
    "recomendaciones": "No se calcula automáticamente porque el rendimiento está expresado en volumen y los kits en peso. Consultar equivalencia de cada kit con el Departamento Técnico.",
    "tiempos": {
      "entreManos": "24 horas",
      "final": "7 días",
      "tacto": "6 horas; tránsito peatonal 24 horas"
    },
    "preparacion": "Limpiar, tratar con ácido muriático o Limpiador Restos de Obra 50/50 con agua, hidrolavar y esperar 24 horas.",
    "aplicacion": "Mezclar A+B, incorporar igual volumen de Diluyente Epoxi antes de 5 minutos y aplicar con rodillo epoxi.",
    "acabado": "Transparente brillante",
    "uso": "Sellado interior de pisos de cemento alisado.",
    "revision": 1,
    "versionFicha": "1.0",
    "fechaActualizacion": "2026-07-21",
    "estadoFicha": "vigente",
    "fuenteFicha": "Ficha técnica FADEPA",
    "historialCambios": [
      {
        "revision": 1,
        "fecha": "2026-07-21",
        "detalle": "Alta inicial en la base técnica de la calculadora."
      }
    ],
    "superficies": [
      "cemento alisado",
      "piso"
    ],
    "ambientes": [
      "interior"
    ],
    "problemas": [
      "sellado",
      "porosidad"
    ],
    "tags": [
      "porcelanato",
      "sellador",
      "cemento",
      "piso"
    ],
    "searchVersion": 1
  },
  {
    "id": "esmalte-sintetico-mate",
    "nombre": "Esmalte Sintético Mate",
    "categoria": "Esmaltes",
    "unidad": "litros",
    "rendimiento": {
      "min": 15,
      "max": 15,
      "type": "areaPerUnitPerCoat",
      "display": "15 m² por litro y por mano"
    },
    "envases": [
      0.25,
      0.5,
      1,
      4,
      20
    ],
    "manosDefault": 2,
    "manosOpciones": [
      1,
      2,
      3
    ],
    "manosRecomendadas": "No especificado en la ficha.",
    "recomendaciones": "Aplicar con consistencia normal o diluido con aguarrás mineral de buena calidad.",
    "tiempos": {
      "entreManos": "12 horas",
      "final": "24 horas",
      "tacto": "2 horas"
    },
    "preparacion": "Superficies limpias, secas y desengrasadas, libres de óxido y polvo. Manchas de hongos: lavar con lavandina y enjuagar.",
    "aplicacion": "Pincel, rodillo o soplete.",
    "acabado": "Mate",
    "uso": "Superficies interiores: revoque, yeso, paneles, fibrocemento, ladrillo y más.",
    "revision": 1,
    "versionFicha": "1.0",
    "fechaActualizacion": "2026-07-21",
    "estadoFicha": "vigente",
    "fuenteFicha": "Ficha técnica FADEPA",
    "historialCambios": [
      {
        "revision": 1,
        "fecha": "2026-07-21",
        "detalle": "Alta inicial en la base técnica de la calculadora."
      }
    ],
    "superficies": [
      "revoque",
      "yeso",
      "fibrocemento",
      "ladrillo"
    ],
    "ambientes": [
      "interior"
    ],
    "problemas": [
      "protección",
      "terminación"
    ],
    "tags": [
      "esmalte",
      "mate",
      "pared",
      "muro"
    ],
    "searchVersion": 1
  },
  {
    "id": "esmalte-al-agua",
    "nombre": "Esmalte al Agua",
    "categoria": "Esmaltes",
    "unidad": "litros",
    "rendimiento": {
      "min": 12,
      "max": 12,
      "type": "areaPerUnitPerCoat",
      "display": "12 m² por litro y por mano"
    },
    "envases": [
      0.5,
      1,
      4,
      20
    ],
    "manosDefault": 2,
    "manosOpciones": [
      1,
      2,
      3
    ],
    "manosRecomendadas": "No especificado en la ficha.",
    "recomendaciones": "No aplicar con alta humedad ni debajo de 8 °C. No se recomienda sobre superficies con aceite de lino, pinturas o barnices al aceite, salvo fondos viejos, duros y adheridos.",
    "tiempos": {
      "entreManos": "3 horas",
      "final": "12 horas",
      "tacto": "1 a 4 horas"
    },
    "preparacion": "Superficies limpias, secas y desengrasadas, libres de óxido y polvo.",
    "aplicacion": "Pincel, rodillo o soplete; dilución con agua de 5 a 10%.",
    "acabado": "Brillante, mate y satinado",
    "uso": "Interior y exterior sobre mampostería, madera o metal.",
    "revision": 1,
    "versionFicha": "1.0",
    "fechaActualizacion": "2026-07-21",
    "estadoFicha": "vigente",
    "fuenteFicha": "Ficha técnica FADEPA",
    "historialCambios": [
      {
        "revision": 1,
        "fecha": "2026-07-21",
        "detalle": "Alta inicial en la base técnica de la calculadora."
      }
    ],
    "superficies": [
      "mampostería",
      "madera",
      "metal"
    ],
    "ambientes": [
      "interior",
      "exterior"
    ],
    "problemas": [
      "protección",
      "terminación"
    ],
    "tags": [
      "esmalte",
      "agua",
      "puerta",
      "ventana",
      "reja",
      "mueble"
    ],
    "searchVersion": 1
  },
  {
    "id": "esmalte-azulejos",
    "nombre": "Esmalte para Azulejos",
    "categoria": "Esmaltes",
    "unidad": "litros",
    "rendimiento": {
      "min": 8,
      "max": 12,
      "type": "areaPerUnitPerCoat",
      "display": "8 a 12 m² por litro y por mano"
    },
    "envases": [
      0.25,
      1,
      4,
      20
    ],
    "manosDefault": 2,
    "manosOpciones": [
      2,
      3
    ],
    "manosRecomendadas": "Se recomiendan entre 2 y 3 manos.",
    "recomendaciones": "Producto inflamable. No usar rodillos de goma espuma. No aplicar con temperatura inferior a 10 °C, superior a 35 °C, mucha humedad o si se pronostican lluvias.",
    "tiempos": {
      "entreManos": "6 a 8 horas",
      "final": "5 días antes de lavar con detergente suave",
      "tacto": "No especificado en la ficha"
    },
    "preparacion": "Superficie limpia y seca, sin grasa, polvillo, hongos, humedad, sarro ni jabón. Desgastar suavemente el esmaltado y tratar con ácido muriático diluido 1:1; enjuagar.",
    "aplicacion": "Pincel o rodillo de pelo corto tipo epoxi. Diluir entre 10% o según requiera la superficie.",
    "acabado": "Satinado",
    "uso": "Paredes de azulejos o cerámicos en interior y exterior: baños, lavaderos y cocinas.",
    "revision": 1,
    "versionFicha": "1.0",
    "fechaActualizacion": "2026-07-21",
    "estadoFicha": "vigente",
    "fuenteFicha": "Ficha técnica FADEPA",
    "historialCambios": [
      {
        "revision": 1,
        "fecha": "2026-07-21",
        "detalle": "Alta inicial en la base técnica de la calculadora."
      }
    ],
    "superficies": [
      "azulejo",
      "cerámica",
      "pared"
    ],
    "ambientes": [
      "interior",
      "exterior",
      "baño",
      "lavadero",
      "cocina"
    ],
    "problemas": [
      "renovación",
      "terminación"
    ],
    "tags": [
      "azulejos",
      "cerámicos",
      "baño",
      "cocina"
    ],
    "searchVersion": 1
  },
  {
    "id": "sellador-fijador-concentrado",
    "nombre": "Sellador - Fijador Concentrado",
    "categoria": "Fondos y selladores",
    "unidad": "litros",
    "rendimiento": {
      "min": 20,
      "max": 25,
      "type": "areaPerUnitPerCoat",
      "display": "20 a 25 m² por litro de concentrado y por mano, diluido 1:2,5"
    },
    "envases": [
      1,
      4,
      10,
      20
    ],
    "manosDefault": 1,
    "manosOpciones": [
      1
    ],
    "manosRecomendadas": "1 mano, con dilución aproximada 1:2,5 en agua; ajustar hasta que la superficie quede mate.",
    "recomendaciones": "El rendimiento indicado corresponde al producto concentrado correctamente diluido. Conviene ensayar primero en un sector de la pared.",
    "tiempos": {
      "entreManos": "No corresponde",
      "final": "4 horas aproximadamente",
      "tacto": "No especificado"
    },
    "preparacion": "Superficie limpia, seca, desengrasada, sin polvo ni pintura vieja mal adherida.",
    "aplicacion": "Pincel, rodillo o soplete, diluido aproximadamente 1:2,5 en agua.",
    "acabado": "Mate / transparente",
    "uso": "Yeso y mampostería interior o exterior para uniformar absorción y mejorar la adhesión.",
    "revision": 1,
    "versionFicha": "1.0",
    "fechaActualizacion": "2026-07-21",
    "estadoFicha": "vigente",
    "fuenteFicha": "Ficha técnica FADEPA",
    "historialCambios": [
      {
        "revision": 1,
        "fecha": "2026-07-21",
        "detalle": "Alta inicial en la base técnica de la calculadora."
      }
    ],
    "superficies": [
      "yeso",
      "mampostería",
      "revoque",
      "pared"
    ],
    "ambientes": [
      "interior",
      "exterior"
    ],
    "problemas": [
      "absorción",
      "porosidad",
      "adherencia",
      "superficie floja"
    ],
    "tags": [
      "sellador",
      "fijador",
      "imprimación",
      "preparación",
      "obra nueva"
    ],
    "searchVersion": 1
  },
  {
    "id": "plus-ecologico-interior",
    "nombre": "Plus Ecológico Interior",
    "categoria": "Látex interior",
    "unidad": "litros",
    "rendimiento": {
      "min": 7,
      "max": 13,
      "type": "areaPerUnitPerCoat",
      "display": "7 a 13 m² por litro y por mano"
    },
    "envases": [
      4,
      10,
      20
    ],
    "manosDefault": 2,
    "manosOpciones": [
      1,
      2,
      3
    ],
    "manosRecomendadas": "Habitualmente 2 manos; su cubrimiento es progresivo y aumenta al secar.",
    "recomendaciones": "Dejar al menos 5 horas entre manos. En mampostería nueva utilizar Sellador - Fijador Concentrado.",
    "tiempos": {
      "entreManos": "5 horas",
      "final": "7 días",
      "tacto": "1,5 horas"
    },
    "preparacion": "Superficies limpias, secas y desengrasadas, sin polvo ni partes flojas. Eliminar hongos y enjuagar.",
    "aplicacion": "Pincel, rodillo o soplete, con consistencia normal o mínima cantidad de agua.",
    "acabado": "Mate",
    "uso": "Paredes interiores de revoque, ladrillo y fibrocemento.",
    "revision": 1,
    "versionFicha": "1.0",
    "fechaActualizacion": "2026-07-21",
    "estadoFicha": "vigente",
    "fuenteFicha": "Ficha técnica FADEPA",
    "historialCambios": [
      {
        "revision": 1,
        "fecha": "2026-07-21",
        "detalle": "Alta inicial en la base técnica de la calculadora."
      }
    ],
    "superficies": [
      "revoque",
      "ladrillo",
      "fibrocemento",
      "pared"
    ],
    "ambientes": [
      "interior"
    ],
    "problemas": [
      "terminación"
    ],
    "tags": [
      "látex",
      "ecológico",
      "hogar",
      "pared"
    ],
    "searchVersion": 1
  },
  {
    "id": "profesional-interior",
    "nombre": "Profesional Interior",
    "categoria": "Látex interior",
    "unidad": "litros",
    "rendimiento": {
      "min": 8,
      "max": 10,
      "type": "areaPerUnitPerCoat",
      "display": "8 a 10 m² por litro y por mano"
    },
    "envases": [
      1,
      4,
      10,
      20
    ],
    "manosDefault": 2,
    "manosOpciones": [
      1,
      2,
      3
    ],
    "manosRecomendadas": "Habitualmente 2 manos, según cobertura y estado de la superficie.",
    "recomendaciones": "Sobre mampostería nueva aplicar Sellador - Fijador Concentrado; sobre superficies pulverulentas, usarlo diluido aproximadamente 1:2,5.",
    "tiempos": {
      "entreManos": "3 horas",
      "final": "5 a 7 días",
      "tacto": "1,5 horas"
    },
    "preparacion": "Superficies interiores limpias, secas, desengrasadas y libres de polvo. Eliminar pintura floja y hongos.",
    "aplicacion": "Pincel, rodillo o soplete, con consistencia normal o mínima dilución con agua.",
    "acabado": "Mate aterciopelado",
    "uso": "Paredes interiores de revoque, papel, paneles acústicos, fibrocemento y ladrillo.",
    "revision": 1,
    "versionFicha": "1.0",
    "fechaActualizacion": "2026-07-21",
    "estadoFicha": "vigente",
    "fuenteFicha": "Ficha técnica FADEPA",
    "historialCambios": [
      {
        "revision": 1,
        "fecha": "2026-07-21",
        "detalle": "Alta inicial en la base técnica de la calculadora."
      }
    ],
    "superficies": [
      "revoque",
      "papel",
      "panel acústico",
      "fibrocemento",
      "ladrillo",
      "pared"
    ],
    "ambientes": [
      "interior"
    ],
    "problemas": [
      "terminación"
    ],
    "tags": [
      "látex",
      "profesional",
      "pared",
      "hogar",
      "obra"
    ],
    "searchVersion": 1
  },
  {
    "id": "concentrado-interior-exterior",
    "nombre": "Concentrado Interior / Exterior",
    "categoria": "Látex interior y exterior",
    "unidad": "litros",
    "rendimiento": {
      "min": 9,
      "max": 14,
      "type": "areaPerUnitPerCoat",
      "display": "9 a 14 m² por litro y por mano"
    },
    "envases": [
      1,
      4,
      10,
      20
    ],
    "manosDefault": 2,
    "manosOpciones": [
      1,
      2,
      3
    ],
    "manosRecomendadas": "No especificado en la ficha.",
    "recomendaciones": "Aplicar con consistencia normal o diluido con 5 a 15% de agua, dejando pasar por lo menos 4 horas entre manos.",
    "tiempos": {
      "entreManos": "4 horas",
      "final": "7 días",
      "tacto": "1 hora"
    },
    "preparacion": "Superficies limpias, secas, desengrasadas, sin polvo ni pintura vieja mal adherida. Eliminar hongos con solución de lavandina y enjuagar.",
    "aplicacion": "Pincel, rodillo o soplete.",
    "acabado": "Mate",
    "uso": "Interior y exterior: revoque, cemento, ladrillo, frentes, yeso, paneles, fibrocemento, madera, metal y más.",
    "revision": 1,
    "versionFicha": "1.0",
    "fechaActualizacion": "2026-07-21",
    "estadoFicha": "vigente",
    "fuenteFicha": "Ficha técnica FADEPA",
    "historialCambios": [
      {
        "revision": 1,
        "fecha": "2026-07-21",
        "detalle": "Alta inicial en la base técnica de la calculadora."
      }
    ],
    "superficies": [
      "revoque",
      "cemento",
      "ladrillo",
      "yeso",
      "fibrocemento",
      "pared"
    ],
    "ambientes": [
      "interior",
      "exterior"
    ],
    "problemas": [
      "terminación"
    ],
    "tags": [
      "látex",
      "concentrado",
      "frente",
      "muro",
      "pared"
    ],
    "searchVersion": 1
  },
  {
    "id": "latex-dekorativ",
    "nombre": "Látex Dekorativ",
    "categoria": "Látex interior y exterior",
    "unidad": "litros",
    "rendimiento": {
      "min": 8,
      "max": 14,
      "type": "areaPerUnitPerCoat",
      "display": "8 a 14 m² por litro y por mano"
    },
    "envases": [
      1,
      4,
      10,
      20
    ],
    "manosDefault": 2,
    "manosOpciones": [
      1,
      2,
      3
    ],
    "manosRecomendadas": "Habitualmente 2 manos, según cobertura.",
    "recomendaciones": "Acepta colores tintométricos base P y T. Dejar al menos 3 horas entre manos.",
    "tiempos": {
      "entreManos": "3 horas",
      "final": "7 días",
      "tacto": "1,5 horas"
    },
    "preparacion": "Superficies limpias, secas, desengrasadas, sin óxido ni polvo. Tratar hongos con lavandina y enjuagar.",
    "aplicacion": "Pincel, rodillo o soplete, normal o con mínima cantidad de agua.",
    "acabado": "Mate",
    "uso": "Superficies interiores y exteriores de mampostería.",
    "revision": 1,
    "versionFicha": "1.0",
    "fechaActualizacion": "2026-07-21",
    "estadoFicha": "vigente",
    "fuenteFicha": "Ficha técnica FADEPA",
    "historialCambios": [
      {
        "revision": 1,
        "fecha": "2026-07-21",
        "detalle": "Alta inicial en la base técnica de la calculadora."
      }
    ],
    "superficies": [
      "mampostería",
      "pared",
      "muro"
    ],
    "ambientes": [
      "interior",
      "exterior"
    ],
    "problemas": [
      "terminación"
    ],
    "tags": [
      "látex",
      "dekorativ",
      "decorativo",
      "pared"
    ],
    "searchVersion": 1
  },
  {
    "id": "latex-nacional-interior-exterior",
    "nombre": "Látex Nacional Interior / Exterior",
    "categoria": "Látex interior y exterior",
    "unidad": "litros",
    "rendimiento": {
      "min": 7,
      "max": 14,
      "type": "areaPerUnitPerCoat",
      "display": "7 a 14 m² por litro y por mano"
    },
    "envases": [
      4,
      10,
      20
    ],
    "manosDefault": 2,
    "manosOpciones": [
      1,
      2,
      3
    ],
    "manosRecomendadas": "No especificado en la ficha.",
    "recomendaciones": "Aplicar con consistencia normal o con la mínima cantidad de agua necesaria, dejando pasar por lo menos 3 horas entre manos.",
    "tiempos": {
      "entreManos": "3 horas",
      "final": "6 días",
      "tacto": "1,5 horas"
    },
    "preparacion": "Superficies limpias, secas y desengrasadas, libres de óxido y polvo. Manchas de hongos: lavar con lavandina y enjuagar.",
    "aplicacion": "Pincel, rodillo o soplete.",
    "acabado": "Mate",
    "uso": "Paredes exteriores e interiores: revoques, ladrillos, fibrocementos y materiales para frentes.",
    "revision": 1,
    "versionFicha": "1.0",
    "fechaActualizacion": "2026-07-21",
    "estadoFicha": "vigente",
    "fuenteFicha": "Ficha técnica FADEPA",
    "historialCambios": [
      {
        "revision": 1,
        "fecha": "2026-07-21",
        "detalle": "Alta inicial en la base técnica de la calculadora."
      }
    ],
    "superficies": [
      "revoque",
      "ladrillo",
      "fibrocemento",
      "pared"
    ],
    "ambientes": [
      "interior",
      "exterior"
    ],
    "problemas": [
      "terminación"
    ],
    "tags": [
      "látex",
      "nacional",
      "frente",
      "muro"
    ],
    "searchVersion": 1
  },
  {
    "id": "profesional-exterior-interior",
    "nombre": "Profesional Exterior - Interior (Lavable - Antihongo)",
    "categoria": "Látex interior y exterior",
    "unidad": "litros",
    "rendimiento": {
      "min": 8,
      "max": 14,
      "type": "areaPerUnitPerCoat",
      "display": "8 a 14 m² por litro y por mano"
    },
    "envases": [
      1,
      4,
      10,
      20
    ],
    "manosDefault": 2,
    "manosOpciones": [
      1,
      2,
      3
    ],
    "manosRecomendadas": "Habitualmente 2 manos, según cobertura y estado de la superficie.",
    "recomendaciones": "En mampostería nueva aplicar previamente Sellador - Fijador Concentrado diluido. No se recomienda sobre madera exterior.",
    "tiempos": {
      "entreManos": "3 horas",
      "final": "7 días",
      "tacto": "1,5 horas"
    },
    "preparacion": "Superficie limpia, seca, desengrasada y sin polvo. Eliminar hongos con solución de lavandina y enjuagar.",
    "aplicacion": "Pincel, rodillo o soplete, normal o con la mínima cantidad de agua necesaria.",
    "acabado": "Mate aterciopelado",
    "uso": "Ambientes interiores y exteriores; revoque, ladrillo, fibrocemento y materiales para frentes.",
    "revision": 1,
    "versionFicha": "1.0",
    "fechaActualizacion": "2026-07-21",
    "estadoFicha": "vigente",
    "fuenteFicha": "Ficha técnica FADEPA",
    "historialCambios": [
      {
        "revision": 1,
        "fecha": "2026-07-21",
        "detalle": "Alta inicial en la base técnica de la calculadora."
      }
    ],
    "superficies": [
      "revoque",
      "ladrillo",
      "fibrocemento",
      "pared"
    ],
    "ambientes": [
      "interior",
      "exterior"
    ],
    "problemas": [
      "hongos",
      "lavado",
      "intemperie"
    ],
    "tags": [
      "látex",
      "profesional",
      "lavable",
      "antihongo",
      "frente",
      "muro"
    ],
    "searchVersion": 1
  },
  {
    "id": "cielorraso",
    "nombre": "Cielorraso",
    "categoria": "Látex y cielorrasos",
    "unidad": "litros",
    "rendimiento": {
      "min": 8,
      "max": 12,
      "type": "areaPerUnitPerCoat",
      "display": "8 a 12 m² por litro y por mano"
    },
    "envases": [
      1,
      4,
      10,
      20
    ],
    "manosDefault": 2,
    "manosOpciones": [
      1,
      2,
      3
    ],
    "manosRecomendadas": "Segunda mano, de ser necesaria, a las 4 horas.",
    "recomendaciones": "Si la absorción lo exige, agregar la mínima cantidad de agua necesaria.",
    "tiempos": {
      "entreManos": "4 horas (segunda mano si es necesaria)",
      "final": "No especificado en la ficha",
      "tacto": "4 horas"
    },
    "preparacion": "Superficie limpia, sin grasa ni polvo. Las manchas de hongos se lavan con lavandina y se enjuagan con abundante agua.",
    "aplicacion": "Rodillo, pincel, soplete o máquina pulverizadora.",
    "acabado": "Mate",
    "uso": "Cielorrasos de revoque; útil en cocinas, baños, lavaderos y ambientes con condensación.",
    "revision": 1,
    "versionFicha": "1.0",
    "fechaActualizacion": "2026-07-21",
    "estadoFicha": "vigente",
    "fuenteFicha": "Ficha técnica FADEPA",
    "historialCambios": [
      {
        "revision": 1,
        "fecha": "2026-07-21",
        "detalle": "Alta inicial en la base técnica de la calculadora."
      }
    ],
    "superficies": [
      "cielorraso",
      "techo interior",
      "revoque"
    ],
    "ambientes": [
      "interior",
      "cocina",
      "baño",
      "lavadero"
    ],
    "problemas": [
      "condensación",
      "hongos"
    ],
    "tags": [
      "cielorraso",
      "techo",
      "antihongo",
      "humedad",
      "vapor"
    ],
    "searchVersion": 1
  },
  {
    "id": "barniz-marino-satinado",
    "nombre": "Barniz Marino Satinado",
    "categoria": "Maderas y barnices",
    "unidad": "litros",
    "rendimiento": {
      "min": 12,
      "max": 12,
      "type": "areaPerUnitPerCoat",
      "display": "12 m² por litro y por mano"
    },
    "envases": [
      0.25,
      0.5,
      1,
      4,
      20
    ],
    "manosDefault": 3,
    "manosOpciones": [
      1,
      2,
      3,
      4
    ],
    "manosRecomendadas": "3 o 4 manos sobre madera nueva; 2 o 3 sobre superficies barnizadas en buen estado.",
    "recomendaciones": "Puede aplicarse a pincel, rodillo o soplete. Sobre madera nueva: primera mano diluida 2:1 en aguarrás; luego barniz sin diluir.",
    "tiempos": {
      "entreManos": "8 horas",
      "final": "No especificado en la ficha",
      "tacto": "5 horas"
    },
    "preparacion": "Superficies limpias, secas, desengrasadas, sin polvo ni barniz viejo mal adherido.",
    "aplicacion": "Pincel, rodillo o soplete.",
    "acabado": "Satinado",
    "uso": "Protección y embellecimiento de maderas de uso exterior e interior.",
    "revision": 1,
    "versionFicha": "1.0",
    "fechaActualizacion": "2026-07-21",
    "estadoFicha": "vigente",
    "fuenteFicha": "Ficha técnica FADEPA",
    "historialCambios": [
      {
        "revision": 1,
        "fecha": "2026-07-21",
        "detalle": "Alta inicial en la base técnica de la calculadora."
      }
    ],
    "superficies": [
      "madera"
    ],
    "ambientes": [
      "interior",
      "exterior"
    ],
    "problemas": [
      "intemperie",
      "protección",
      "humedad"
    ],
    "tags": [
      "barniz",
      "marino",
      "satinado",
      "madera",
      "puerta",
      "ventana"
    ],
    "searchVersion": 1
  },
  {
    "id": "paris-piedra",
    "nombre": "Revestimiento Acrílico Texturado Impermeable París Piedra",
    "categoria": "Revestimientos texturados",
    "unidad": "kg",
    "rendimiento": {
      "min": 2.3,
      "max": 2.7,
      "type": "quantityPerAreaFinished",
      "display": "2,5 ± 0,2 kg/m² de trabajo terminado"
    },
    "envases": [
      1.5,
      6,
      15,
      30
    ],
    "manosDefault": 2,
    "manosOpciones": [
      2
    ],
    "manosRecomendadas": "Mínimo 2 manos con llana metálica; 1 o 2 aplicaciones con soplete de salpicar.",
    "recomendaciones": "La ficha aconseja contemplar un 10% más de producto. No aplicar debajo de 8 °C, sobre 35 °C, con sol intenso, amenaza de lluvia o humedad relativa mayor al 80%.",
    "tiempos": {
      "entreManos": "No especificado en la ficha",
      "final": "5 a 7 días",
      "tacto": "Secado superficial: 3 a 8 horas"
    },
    "preparacion": "Sobre superficies nuevas o de absorción despareja, pintar con Látex FADEPA color base Humo Blanco. Las superficies deben estar firmes, secas, limpias y libres de grasitud.",
    "aplicacion": "Llana metálica o soplete de salpicar.",
    "acabado": "Mate texturado e impermeable; textura fina",
    "uso": "Paredes interiores y exteriores: hormigón, revoque, ladrillo y placas de yeso.",
    "revision": 1,
    "versionFicha": "1.0",
    "fechaActualizacion": "2026-07-21",
    "estadoFicha": "vigente",
    "fuenteFicha": "Ficha técnica FADEPA",
    "historialCambios": [
      {
        "revision": 1,
        "fecha": "2026-07-21",
        "detalle": "Alta inicial en la base técnica de la calculadora."
      }
    ],
    "superficies": [
      "hormigón",
      "revoque",
      "ladrillo",
      "placa de yeso",
      "pared"
    ],
    "ambientes": [
      "interior",
      "exterior"
    ],
    "problemas": [
      "impermeabilización",
      "terminación",
      "fisuras finas"
    ],
    "tags": [
      "revestimiento",
      "texturado",
      "piedra",
      "parís",
      "frente",
      "muro"
    ],
    "searchVersion": 1
  },
  {
    "id": "manta-elastica-fibrada",
    "nombre": "Manta Elástica Impermeable Fibrada",
    "categoria": "Techos e impermeabilización",
    "unidad": "kg",
    "rendimiento": {
      "min": 1,
      "max": 1.25,
      "type": "quantityPerAreaFinished",
      "display": "1 a 1,25 kg/m² de trabajo terminado, con 4 manos"
    },
    "envases": [
      1.25,
      5,
      10,
      20
    ],
    "manosDefault": 4,
    "manosOpciones": [
      4
    ],
    "manosRecomendadas": "4 manos: primera diluida aproximadamente 30% con agua y tres manos sin diluir.",
    "recomendaciones": "El consumo ya incluye las 4 manos. No diluir la segunda, tercera ni cuarta mano. Aplicar sobre superficies no demasiado cálidas.",
    "tiempos": {
      "entreManos": "4 horas",
      "final": "24 horas",
      "tacto": "No especificado"
    },
    "preparacion": "Superficie limpia, seca, desengrasada, sin óxido ni polvo. Redondear aristas y ángulos.",
    "aplicacion": "Pincel, rodillo o soplete. Se recomienda pincel para la imprimación.",
    "acabado": "Mate, fibrado e impermeable",
    "uso": "Losas, techos, revoques y ladrillos.",
    "revision": 1,
    "versionFicha": "1.0",
    "fechaActualizacion": "2026-07-21",
    "estadoFicha": "vigente",
    "fuenteFicha": "Ficha técnica FADEPA",
    "historialCambios": [
      {
        "revision": 1,
        "fecha": "2026-07-21",
        "detalle": "Alta inicial en la base técnica de la calculadora."
      }
    ],
    "superficies": [
      "losa",
      "techo",
      "revoque",
      "ladrillo",
      "terraza"
    ],
    "ambientes": [
      "exterior"
    ],
    "problemas": [
      "humedad",
      "filtración",
      "grieta",
      "impermeabilización"
    ],
    "tags": [
      "manta",
      "membrana",
      "fibrada",
      "techo",
      "azotea",
      "cubierta"
    ],
    "searchVersion": 1
  }
];
