<script>
import { loadFull } from "tsparticles";
import FooterComp from "../components/FooterComp.vue";



const particlesInit = async (engine) => {
  await loadFull(engine);
};

const particlesLoaded = async (container) => {
  console.log("Particles container loaded", container);
};


export default {
  name: "ServicesView",
  components: {
    FooterComp,
  },
};
</script>

<template>
  <main class="bg-particles">
    <Particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded" :options="{
      background: {
        color: {
          value: '#ED1C24',
        },
      },
      style: {
        position: 'absolute',
        width: '100%',
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 1,
            opacity: 0.8,
            size: 40,
          },
          push: {
            quantity: 2,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#ffffff',
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: 'none',
          enable: true,
          outMode: 'bounce',
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          random: true,
          value: 5,
        },
      },
      detectRetina: true,
    }" />
    <div class="container d-flex justify-content-center">
      <div class="row align-items-center">
        <div class="col-lg-12 mt-5 d-flex">
          <div class="info">
            <p class="h1" style="color: #fff;">Portafolio</p>
          </div>
        </div>
      </div>
    </div>
  </main>

  <div class="container mt-5">
    <div class="d-flex justify-content-between services">
      <div class="card">
        <div class="img-service">
          <img src="../assets/img/portafolio/telecomunicaciones.jpg" class="img-fluid" alt="">
        </div>
        <div class="info-service px-4">
          <h5 class="card-tittle text-center mt-2">Telecomunicaciones</h5>
          <p class="card-text">
            Descubre la última tecnología en telefónica celular, infraestructura de planta externa, networking y data centers. Mantente conectado con lo mejor en comunicaciones y conectividad.
          </p>
          <div class="low-info">
            <h6>Algunos servicios disponibles:</h6>
            <p class="card-text">
              Telefonia celular, planta externa, networking & data center.
            </p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="img-service">
          <img src="../assets/img/portafolio/electronica.jpg" class="img-fluid" alt="">
        </div>
        <div class="info-service px-4">
          <h5 class="card-tittle text-center mt-2">Seguridad Electronica</h5>
          <p class="card-text">
            Asegura la seguridad de tu entorno con CCTV, control de acceso, prevención de incendios y telemetría. Con nuestra solución de telemetría, obtén información en tiempo real para tomar decisiones precisas.
          </p>
          <div class="low-info">
            <h6>Algunos servicios disponibles:</h6>
            <p class="card-text">
              CCTV, control de acceso, prevencion de incendios, telemetria.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-between services mt-5">
      <div class="card">
        <div class="img-service">
          <img src="../assets/img/portafolio/automatizacion.jpg" class="img-fluid" alt="">
        </div>
        <div class="info-service px-4">
          <h5 class="card-tittle text-center mt-2">Automatizacion</h5>
          <p class="card-text">
            Optimiza tus operaciones industriales con nuestra solución de domótica industrial. Controla y automatiza procesos para aumentar la eficiencia y reducir costos en tu entorno de trabajo.
          </p>
          <div class="low-info">
            <h6>Algunos servicios disponibles:</h6>
            <p class="card-text">
              Industrial, domótica.
            </p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="img-service">
          <img src="../assets/img/portafolio/energia-renovable.jpg" class="img-fluid" alt="">
        </div>
        <div class="info-service px-4">
          <h5 class="card-tittle text-center mt-2">Energia Renovable</h5>
          <p class="card-text">
            Únete a la revolución energética con nuestros parques solares. Genera electricidad limpia y sostenible a partir de la radiación solar, contribuyendo al cuidado del medio ambiente y reduciendo costos energéticos.
          </p>
          <div class="low-info">
            <h6>Algunos servicios disponibles:</h6>
            <p class="card-text">
              Parques solares.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-between services mt-5">
      <div class="card">
        <div class="img-service">
          <img src="../assets/img/portafolio/obras-civiles.jpg" class="img-fluid" alt="">
        </div>
        <div class="info-service px-4">
          <h5 class="card-tittle text-center mt-2">Obras Civiles</h5>
          <p class="card-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente nesciunt porro unde autem maiores nostrum
            tempore provident eum eius repellendus, deleniti rem vero repudiandae earum voluptate, atque deserunt!
            Voluptates, necessitatibus.
          </p>
          <div class="low-info">
            <h6>Algunos servicios disponibles:</h6>
            <p class="card-text">
              Domiciliarias, industriales, comerciales.
            </p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="img-service">
          <img src="../assets/img/portafolio/laboratorio.jpg" class="img-fluid" alt="">
        </div>
        <div class="info-service px-4">
          <h5 class="card-tittle text-center mt-2">Instrumentos de Laboratorio</h5>
          <p class="card-text">
            Explora un mundo de conocimiento en campos como la mecánica computacional, electricidad, electrónica, física, química, telecomunicaciones, automatización, robótica, geotecnia, asfalto e hidráulica. Transforma tu pasión en innovación.
          </p>
          <div class="low-info">
            <h6>Algunos servicios disponibles:</h6>
            <p class="card-text">
              Mecánica computacional, electricidad, electrónica, física, química, telecomunicaciones, automatizacion,
              robótica, geotecnia y asfalto, hidráulica.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-center services mt-5">
      <div class="card">
        <div class="img-service">
          <img src="../assets/img/portafolio/proyecto.jpg" class="img-fluid" alt="">
        </div>
        <div class="info-service px-4">
          <h5 class="card-tittle text-center mt-2">Proyectos</h5>
          <p class="card-text">
            Eleva tus proyectos con nuestra experiencia en telefónica celular, infraestructura de planta externa, networking y data centers. Diseñamos soluciones tecnológicas de vanguardia para potenciar tu conectividad empresarial.
          </p>
          <div class="low-info">
            <h6>Algunos servicios disponibles:</h6>
            <p class="card-text">
              Telefonia celular, planta externa, networking & data center.
            </p>
          </div>
        </div>
      </div>

    </div>

  </div>

  <FooterComp />
</template>



<style scoped>
.low-info {
  position: absolute;
  bottom: 0;
  margin-bottom: 10px;
}

.card {
  position: relative;
  width: 400px;
  height: 500px;
  overflow: hidden;
}

.img-service {
  max-width: 100%;
  object-fit: cover;
}

.container {
  max-width: 65% !important;
}

.bg-particles {
  position: relative;
  height: 20vh;
  box-shadow: -1px 4px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -1px 4px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 4px 5px 0px rgba(0, 0, 0, 0.75);
}

.card {
  position: relative;
  margin-bottom: 30px;
}

.card h6{
  font-weight:bold;
}


/* media qrys  */
@media (max-width: 996px) {
  .container {
    max-width: 100% !important;
  }
}


@media (max-width: 850px) {
  .services {
    max-width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .card {
    margin-bottom: 20px;
  }
}

@media (max-width:500px) {
  .card {
    position: relative;
    width: 300px;
    height: 520px;
  }

  .bg-particles {
    height: 15vh;
  }

  .card {
    margin-bottom: 40px;
  }
}
</style>
