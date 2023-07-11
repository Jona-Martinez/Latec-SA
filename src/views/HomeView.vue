<script setup>
import { loadFull } from "tsparticles";
import FooterComp from "../components/FooterComp.vue";



const particlesInit = async (engine) => {
  await loadFull(engine);
};

const particlesLoaded = async (container) => {
  console.log("Particles container loaded", container);
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
    <div class="container d-flex justify-content-center h-100 home-info" transition="fade">
      <div class="row align-items-center" transition="fade">
        <div class="col-lg-6 text-center mt-5 d-flex align-items-center justify-content-center" transition="fade">
          <div class="img">
            <img src="../assets/img/Logo-RRSS-removebg-preview.png" style="max-width: 300px; border-radius: 40%" alt=""
              class="logo" />
          </div>
        </div>
        <div class="col-lg-6 mt-5" transition="fade">
          <div class="info">
            <p class="h1">Empresa</p>
            <p class="h1">enfocada a</p>
            <p class="h1">servicios y asistencia tecnica</p>
            <p class="h3">en telecomunicaciones, electronica e ingenieria.</p>
          </div>
        </div>
      </div>
    </div>
  </main>
  <div class="section">
    <div class="section">
      <div class="container mt-3">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-12 text-center">
            <img src="../assets/img/home-icons/Telecomunicaciones.png" width="130" />
            <div class="text-center">
              <p class="fs-6">Telecomunicaciones</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 text-center">
            <img src="../assets/img/home-icons/Seguridad-Electronica.png" width="130" />
            <div class="text-center">
              <p class="fs-6">Seguridad Electronica</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 text-center">
            <img src="../assets/img/home-icons/Automatizacion.png" width="130" />
            <div class="text-center">
              <p class="fs-6">Automatizacion</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 text-center">
            <img src="../assets/img/home-icons/Energia-Renovable.png" width="130" />
            <div class="text-center">
              <p class="fs-6">Energia Renovable</p>
            </div>
          </div>
        </div>
          <div class="row mt-5">
            <div class="col-lg-4 col-md-6 col-sm-12 text-center">
              <img src="../assets/img/home-icons/Obras-Civiles.png" width="130" />
              <div class="text-center">
                <p class="fs-6">Obras Civiles</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 text-center">
              <img src="../assets/img/home-icons/Laboratorio.png" width="130" />
              <div class="text-center">
                <p class="fs-6">Instrumentos de Laboratorio</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 text-center">
              <img src="../assets/img/home-icons/Proyectos.png" width="130" />
              <div class="text-center">
                <p class="fs-6">Proyectos</p>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  </div>
  <div class="border-line"></div>
  <section class="container border-bottom">
    <div class="row w-75% mx-auto my-5 About-us-fila">
      <div class="col-lg-6 col-md-6 col-sm-12 carrousel">
        <div id="carouselExampleCaptions" class="carousel slide mx-auto">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner border-radius">
            <div class="carousel-item active">
              <img src="../assets/img/carousel/antena.jpg" class="d-block w-100 carousel-img"
                alt="Photo by Jo Kassis: https://www.pexels.com/photo/telecommunication-tower-on-city-hill-5567920/" />

            </div>
            <div class="carousel-item bg-carousel">
              <img src="../assets/img/carousel/construccion.jpg" class="d-block w-100 carousel-img"
                alt="Photo by Olga Lioncat: https://www.pexels.com/photo/modern-buildings-under-constructions-in-city-7245333/" />

            </div>
            <div class="carousel-item">
              <img src="../assets/img/carousel/tecnology.jpg" class="d-block w-100 carousel-img"
                alt="Photo by ThisIsEngineering: https://www.pexels.com/photo/photo-of-female-engineer-working-on-her-workspace-3862632/" />

            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 text-center d-flex align-items-center">
        <div class="w-75 text-center About-us-fila mx-auto about-us">
          <h3 class="fs-2">Sobre Nosotros</h3>
          <p class="px-4">
            LATEC Sociedad Anonima es una empresa privada fundada e incorporada
            en Marzo de 2014 en la Republica del Paraguay
          </p>
          <router-link class="button-about-us" to="/aboutus" style="text-decoration: none;">MAS INFORMACION</router-link>
        </div>
      </div>
    </div>
  </section>
  <div class="container text-center mt-4">
    <div class="title">
      <h3 class="text-danger" style="font-style: italic;">Partners</h3>
    </div>
  </div>

  <div class="slider">
    <div class="slide-track">
      <div class="slide">
        <img src="../assets/img/slide/Partners/Acsys.png" alt="" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide/Partners/Centronic.png" alt="" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide/Partners/Controls.png" alt="" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide/Partners/Dacas.png" alt="" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide/Partners/GDS.png" alt="" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide/Partners/Infinycore.png" alt="" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide/Partners/Infovista.png" alt="" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide/Partners/PSline.png" alt="" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide/Partners/Sol-Control.png" alt="" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide/Partners/Acsys.png" alt="" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide/Partners/Centronic.png" alt="" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide/Partners/Controls.png" alt="" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide/Partners/Dacas.png" alt="" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide/Partners/GDS.png" alt="" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide/Partners/Infinycore.png" alt="" />
      </div>
    </div>
  </div>

  <div class="container text-center">
    <div class="title">
      <h3 class="text-danger" style="font-style: italic;">Clientes</h3>
    </div>
  </div>

  <div class="slider border-bottom">
    <div class="slide-track">
      <div class="slide">
        <img src="../assets/img/slide/Clientes/Altervida.png" alt="" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide/Clientes/Americana.png" alt="" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide/Clientes/Artics.png" alt="" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide/Clientes/Celexx.png" alt="" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide/Clientes/Claro.png" alt="" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide/Clientes/Code100.png" alt="" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide/Clientes/Ericsson.png" alt="" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide/Clientes/Guarani.png" alt="" 
        style="border-radius: 30px;"
        />
      </div>
      <div class="slide">
        <img src="../assets/img/slide/Clientes/Inpet.png" alt="" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide/Clientes/Itaipu.png" alt="" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide/Clientes/Mspbs.png" alt="" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide/Clientes/PCG.png" alt="" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide/Clientes/Sites.png" alt="" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide/Clientes/Tigo.png" alt="" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide/Clientes/Torrecom.png" alt="" />
      </div>
    </div>
  </div>

  <!-- Contact-section -->
  <section class="bg-contact mt-5">
    <div class="container text-center" id="container-form">
      <div id="form-tittle" class="mb-4">
        <h2>Contacto</h2>
        <p class="fs-5" style="font-style: italic;">"Estamos aqui para hacer realidad tus proyectos"</p>
      </div>
      <form action="https://formsubmit.co/contacto@latecsa.com" method="POST">
        <div class="mb-3">
          <input type="text" class="form-control" id="name" placeholder="Nombre y Apellido" name="Nombre y Apellido"
            required />
        </div>
        <div class="mb-3">
          <input type="text" class="form-control" id="number" placeholder="Numero de Contacto" name="Numero de Contacto"
            required />
        </div>
        <div class="mb-3">
          <input type="email" class="form-control" id="email" placeholder="ejemplo@gmail.com" name="Correo Electronico"
            required />
        </div>
        <div class="mb-3">
          <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Mensaje" rows="3"
            name="Mensaje"></textarea>
        </div>
        <div class="mb-3">
          <button type="submit" class="btn button-about-us w-100 fs-7">
            Enviar
          </button>
        </div>
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html">
      </form>
    </div>
  </section>

  <span class="ir-arriba icon-arrow-up2"></span>

  <FooterComp />
</template>

<style scoped>
.bg-carousel {
  background-color: rgba(0, 0, 0, 0.26) !important;
}

.bg-particles {
  position: relative;
  height: 600px;
  box-shadow: -1px 4px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -1px 4px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 4px 5px 0px rgba(0, 0, 0, 0.75);
  background: rgba(0, 0, 0, 0);
  overflow: hidden;
}

.border-line {
  max-width: 100%;
  border-bottom: 0.1px solid #00000000;
  box-shadow: 0px 5px 5px 0px #20070779;
  margin-bottom: 50px;
}

.info p {
  color: #fff;
}

.slider {
  width: 75vw;
  height: auto;
  margin: auto;
  overflow: hidden;
}

.slider .slide-track {
  display: flex;
  animation: scroll 40s linear infinite;
  -webkit-animation: scroll 40s linear infinite;
  width: calc(200px * 14);
}

.slider .slide {
  width: 200px;
}

.slider .slide img {
  width: 100%;
}

#container-form {
  max-width: 600px;
}

.carousel-img{
  width: 1920px;
}

.button-about-us {
  padding: 7px;
  background: #ED1C24;
  border: none;
  border-radius: 10px;
  color: #fff;
}

.button-about-us:hover {
  background: #e4070f;
  box-shadow: 0 2px 2px 0 #000;
}

.border-radius {
  border-radius: 20px;
}

@keyframes scroll {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    -webkit-transform: translateX(calc(-200px * 7));
    transform: translateX(calc(-200px * 7));
  }
}

@media (max-width: 1024px) {
  .bg-particles {
    height: 600px;
  }

  .logo {
    width: 230px;
  }
}

@media (max-width: 768px) {

  .bg-particles {
    height: 500px;
  }

  .about-us {
    margin-top: 20px;
  }

  .logo {
    width: 230px;
  }

  .info p {
    font-size: 1.3rem;
  }
}

@media (max-width:512px) {
  .logo {
    width: 160px;
  }
}
</style>
