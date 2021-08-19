export default {
  global: {
    componenteFormativo: 'Acciones para la mitigación del riesgo agroclimático',
    descripcionCurso:
      'Los cambios climáticos están variando frecuentemente, fomentan sequías, inundaciones, ciclones, temperaturas extremas y subida del nivel del mar. Todas estas son consecuencias de la constante variación del cambio climático, que también genera impacto en el desarrollo socioeconómico de una sociedad.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Planificación de la producción agropecuaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Pronóstico de condiciones climáticas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Bioindicadores y señales de la naturaleza',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Niveles de alerta',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Medidas de reducción del riesgo y adaptación al cambio climático',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Agricultura de conservación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Monitoreo y seguimiento de fuentes hídricas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Buenas prácticas para la captación y almacenamiento de aguas lluvias',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Actividades de siembra',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Bienestar animal',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Establecimiento de reservas o bancos de forrajes',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Instrumentos de planificación en la gestión del riesgo de desastres',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Guías, protocolos y actores',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Proceso de participación en la formulación',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Comunicación',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Alcaldía Mayor de Bogotá. (2013). Guía para elaborar planes de emergencia y contingencias. Alcaldía Mayor de Bogotá.',
      link:
        'http://199.89.55.129/scorecolombia/documents_co/herramientas/M5/Material_tecnico_apoyo/SGSST_2015/3.%20Planificaci%C3%B3n/5.%20Plan%20de%20Emergencias/Gu%C3%ADas/Gu%C3%ADa__Planes__Emergencia_y__Contingencias_AMB.pdf',
    },
    {
      referencia:
        'Alcaldía Mayor de Bogotá. (2014). Metodologías de análisis de riesgo. Documento soporte. Guía para elaborar planes de emergencia y contingencias. FOPAE.',
      link:
        'https://www.sire.gov.co/documents/82884/83768/A.3.4+Metodologias+AR.pdf/81cee0d0-2f31-4c0e-b3eb-ad6831b1fda2',
    },
    {
      referencia:
        'Corporación PBA. (2014). Gestión del riesgo con participación ciudadana. Manual para promotores de la red nacional común unidad. Corporación PBA.',
      link:
        'http://www.corporacionpba.org/portal/sites/default/files/Gesti%C3%B3n%20del%20riesgo%20con%20participaci%C3%B3n%20ciudadana.pdf',
    },
    {
      referencia:
        'FAWEC. (s.f.). ¿Qué es el bienestar animal? Universidad Autónoma de Barcelona.',
      link:
        'https://www.fawec.org/es/fichas-tecnicas/23-bienestar-general/21-que-es-el-bienestar-animal#:~:text=Las%20Cinco%20Libertades&text=El%20animal%20no%20sufre%20sed,dieta%20adecuada%20a%20sus%20necesidades.&text=El%20animal%20no%20sufre%20dolor,un%20diagn%C3%B3stico%20y%20tratamiento%20r%C3%A1pidos',
    },
    {
      referencia:
        'IDEAM. (s.f.). Alertas tempranas: una estrategia para reducir impactos de los desastres naturales y prepararnos para el cambio climático. IDEAM.',
      link:
        'http://boyaca.gov.co/SecInfraestructura/images/CDGRD/Documentos%20de%20Inter%C3%A9s/AlertasTempranas.pdf',
    },
    {
      referencia:
        'IDEAM. (2018). Protocolo de monitoreo del agua. MINAMBIENTE.',
      link:
        'http://documentacion.ideam.gov.co/openbiblio/bvirtual/023773/PROTOCOLO_MONITOREO_AGUA_IDEAM.pdf',
    },
    {
      referencia:
        'Llosa, S. (2006). Reducción del riesgo de desastres y adaptación al cambio climático. ISDR.',
      link:
        'https://unfccc.int/files/adaptation/adverse_effects_and_response_measures_art_48/application/pdf/reduccin_del_riesgo_de_desastres_y_adaptacin_al_cambio_climtico_-_silvia_llosa_isdr.pdf',
    },
    {
      referencia:
        'Organización Mundial de Sanidad Ambiental. (s.f.). Bienestar animal. Oie.',
      link:
        'https://www.oie.int/es/que-hacemos/sanidad-y-bienestar-animal/bienestar-animal/#:~:text=Definici%C3%B3n%20de%20bienestar%20animal%20de,muere%E2%80%9D%20(C%C3%B3digo%20Terrestre%20)',
    },
    {
      referencia:
        'Rodríguez, A., Torres, S. y Hernández, Á. (2013). La comunicación en la gestión del riesgo: el papel de la relación comunidad y entorno. Gestión ambiental del riesgo frente al cambio climático.',
      link:
        'https://www.cortolima.gov.co/sites/default/files/images/stories/gestion_riesgos/Gestion_del_Riesgo/Modulos/Modulo_III_021013_Alta.pdf',
    },
    {
      referencia:
        'Sistema de Información Ambiental de Colombia. (s.f.). Predicción del clima. Siac.',
      link: 'http://www.siac.gov.co/prediccion',
    },
    {
      referencia:
        'SNGRD-DNP. (2018). Instrumentos de planificación para la gestión del riesgo de desastres en Colombia. VI Plataforma Regional para la Reducción del Riesgo de Desastres en las Américas.',
      link: 'https://eird.org/pr18/presentaciones/33gisela-paredes.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Alerta',
      significado:
        'advierte a la comunidad y a los sistemas de prevención y atención de desastres sobre la amenaza que puede ocasionar un fenómeno, el cual requiere la atención inmediata por su gravedad (IDEAM, 2018).',
    },
    {
      termino: 'Desarrollo sostenible',
      significado:
        'proceso de transformaciones naturales, económico-sociales, culturales e institucionales, que tienen por objeto asegurar el mejoramiento de las condiciones de vida del ser humano, la producción de bienes y prestación de servicios, sin deteriorar el ambiente natural, ni comprometer las bases de un desarrollo similar para las futuras generaciones (CORTOLIMA, 2013, p. 96).',
    },
    {
      termino: 'Emergencia',
      significado:
        'todo evento identificable en el tiempo, que produce un estado de perturbación funcional en el sistema por la ocurrencia de un evento indeseable, que en su momento exige una respuesta mayor a la establecida mediante los recursos normalmente disponibles, produciendo una modificación sustancial, pero temporal, sobre el sistema involucrado, el cual compromete a la comunidad o al ambiente, alterando los servicios e impidiendo el normal desarrollo de las actividades esenciales (Alcaldía Mayor de Bogotá, 2013, p. 5).',
    },
    {
      termino: 'Intensidad',
      significado:
        'medida cuantitativa y cualitativa de la severidad de un fenómeno en un sitio específico (CORTOLIMA, 2013 p. 98).',
    },
    {
      termino: 'Prevención',
      significado:
        'medidas y acciones dispuestas con anticipación, con el fin de evitar o impedir que se presente un fenómeno peligroso o para reducir sus efectos sobre la población, los bienes y servicios y el ambiente (CORTOLIMA, 2013, p. 100).',
    },
  ],
  complementario: [
    {
      texto:
        'UNGRD. (s.f). Sistema Nacional de Gestión del Riesgo de Desastres.',
      tipo: 'Página web',
      link: 'http://portal.gestiondelriesgo.gov.co/Paginas/Estructura.aspx ',
    },
    {
      texto:
        'Rodríguez, A., Torres, S. y Hernández, Á. (2013). La comunicación en la gestión del riesgo: el papel de la relación comunidad y entorno. Gestión ambiental del riesgo frente al cambio climático.',
      tipo: 'PDF',
      descarga: 'downloads/Anexo1.pdf',
    },
    {
      texto:
        'Llosa, S. (2006). Reducción del riesgo de desastres y adaptación al cambio climático. ISDR.',
      tipo: 'PDF',
      descarga: 'downloads/Anexo2.pdf',
    },
    {
      texto: 'IDEAM. (2018). Protocolo de monitoreo del agua. MINAMBIENTE.',
      tipo: 'PDF',
      descarga: 'downloads/Anexo3.pdf',
    },
    {
      texto: 'SIAC. (s.f). Predicción del clima.',
      tipo: 'Página web',
      link: 'http://www.siac.gov.co/prediccion',
    },
    {
      texto:
        'Alcaldía Mayor de Bogotá. (2014). Metodologías de análisis de riesgo. Documento soporte. Guía para elaborar planes de emergencia y contingencias. FOPAE.',
      tipo: 'PDF',
      descarga: 'downloads/Anexo4.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lizeth Daniela Reinoso',
        cargo: 'Experta temática',
        centro: 'Centro Agropecuario La Granja - Espinal Tolima',
      },
      {
        nombre: 'Leydy Jhuliana Jaramillo Mejía',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Oscar Absalón Guevara',
        cargo: 'Evaluador instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo Lopez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniela Muñoz Bedoya',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo front-end',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
