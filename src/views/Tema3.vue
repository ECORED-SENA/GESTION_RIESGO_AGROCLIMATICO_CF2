<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Instrumentos de planificación en la gestión del riesgo de desastres
    .row.bg-color4
      .col-12.px-5
        p.mb-5 Los instrumentos de planificación son herramientas que permiten organizar diferentes entidades y programas, buscando así que todas se dirijan al mismo objetivo, que es el bien común de la población y la mejora continua de los territorios. Los instrumentos que se encuentran en Colombia son:
        .row(data-aos="fade-right").mb-5
          .col-lg-4
            figure
              img(src='@/assets/curso/img31.svg', alt='Texto que describa la imagen').m-auto
          .col-lg-4
            figure
              img(src='@/assets/curso/img32.svg', alt='Texto que describa la imagen').m-auto
          .col-lg-4
            figure
              img(src='@/assets/curso/img33.svg', alt='Texto que describa la imagen').m-auto
        p.mb-0 Estos instrumentos buscan minimizar las vulnerabilidades sociales, económicas y ambientales, dando como resultado una mayor capacidad de recuperación y mejorar las condiciones de las poblaciones.
        separador.mb-5
        #t_3_1
        .titulo-segundo
          h2 3.1 Guías, protocolos y actores
        .row.align-items-start.mb-5
          .col-lg-6.mb-4.mb-lg-0
            .dual-txt-deco1
              p El Plan Nacional de Gestión del Riesgo de Desastres es una estrategia de desarrollo que busca y define todo ese proceso que se debe llevar a cabo para la reducción del riesgo y el manejo de los desastres. Este instrumento lo que busca es construir un territorio sostenible y mejorar cada día más las condiciones de las poblaciones.
              p.mb-0 Para que este plan pueda implementarse de manera efectiva se requiere el apoyo de diferentes actores, los cuales se definen como el conjunto de todas las entidades nacionales y comunitarias, que tienen como objetivo llevar a cabo un buen funcionamiento de la gestión del riesgo de desastres en todo el territorio nacional, dando como resultado que los habitantes actúen con precaución y autoprotección. Los principales actores se encuentran en la siguiente figura.
          .col-lg-6
            figure
              img(src='@/assets/curso/img1.png', alt='Texto que describa la imagen').m-auto
        figure(data-aos="fade-left").mb-5
          img(src='@/assets/curso/img34.svg', style="width: 750px", alt='Texto que describa la imagen').m-auto
        .cajon.color-primario.p-4
          p.mb-0 Todo lo anterior, se encamina a establecer protocolos que sean resilientes y sostenibles con la población y con el medio ambiente, estos protocolos ayudan a que se manejen sistemas de alertas tempranas, el cumplimiento de las leyes, la mejora del ordenamiento territorial, buscando que las condiciones de pobreza se reduzcan cada vez más.
    separador.mb-5
    #t_3_2
    .titulo-segundo
      h2 3.2 Proceso de participación en la formulación
    .col-12
      .dual-txt-deco2
        p Las comunidades juegan un papel importante, ya que la gestión del riesgo de desastre busca que estas poblaciones vean el riesgo como una responsabilidad de todos y sirve para que se empoderen en la construcción de sus territorios. Muchas comunidades se muestran interesadas en aprender, en estar preparadas para cualquier eventualidad, para prevenir y mitigar los riesgos observados. Ya que son ellos quien conocen más sus problemáticas y necesidades.
        p.mb-5 Además, es importante mencionar, que además de la participación ciudadana, se deben tener los entes públicos y privados que dan las pautas y garantizan la gestión del riesgo en el país.
    figure(data-aos="fade-left").mb-5
      img(src='@/assets/curso/img35.svg', style="width: 750px", alt='Texto que describa la imagen').m-auto
    .cajon.color-secundario.p-4.mb-4
      p.mb-0 Todos estos actores son importantes en la participación de la formulación de los planes y programas que encaminan la buena gestión del riesgo, ya que unos conocen muy bien los escenarios a los que se enfrentan día a día; los entes públicos y privados ayudan a organizar y mejorar dichas condiciones.
    separador.mb-5
    #t_3_3
    .titulo-segundo
      h2 3.3 Comunicación
    .row.bg-color5
      .col-12.px-5
        .dual-txt-deco3
          p Los desastres tienen una cronología que son el impacto, la emergencia y la recuperación. Entonces, inicialmente en gestión del riesgo de desastres lo que se debe hacer es identificar esos riesgos y cuantificar qué probabilidad tienen de causar un desastre. De esta manera, se podrá establecer un plan de contingencias en el momento en que se presente y tener a la mano el plan de gestión para la recuperación después del desastre, teniendo clara la información será más fácil implementarlo, cuidar a la población y el medio ambiente, minimizando un poco más el impacto y estando preparados para estas situaciones.
          p.mb-5 La siguiente figura corresponde a la propuesta descriptiva de SNAPD (2006), en la que se describen las fases después de un desastre.
          figure(data-aos="fade-left").mb-5
            img(src='@/assets/curso/img36.svg', style="width: 950px", alt='Texto que describa la imagen').m-auto
          p.mb-5 Se puede evidenciar que cuando inicia el evento de desastre la situación de emergencia es más alta, al pasar de las horas la emergencia va bajando, y se va buscando solucionar y mitigar los impactos que generó, recuperar vidas, mejorar los estados de salud de las personas afectadas, evaluando los impactos en las viviendas y en el medio ambiente. Asimismo, todo llega al punto de iniciar el proceso de recuperación de la población, de las  estructuras afectadas y del medio ambiente.
          figure(data-aos="fade-right").mb-5
            img(src='@/assets/curso/img38.svg', style="width: 950px", alt='Texto que describa la imagen').m-auto
          .cajon.color-secundario.p-4
            p.mb-0 Las estrategias anteriores tienen sus ventajas y desventajas como todo; pero al final ayudará a minimizar un riesgo sea que esté presente en una comunidad, empresa u organización. La debida utilización y la mejor estrategia escogida hará que sea exitoso el proceso de minimizar los riesgos que se estén presentado en dicho lugar.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
