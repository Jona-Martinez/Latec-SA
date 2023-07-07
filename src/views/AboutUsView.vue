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
      <div class="row">
        <div class="col-lg-12 mt-5 d-flex">
          <div class="info">
            <p class="h1" style="color: #fff">Acerca de Nosotros</p>
          </div>
        </div>
      </div>
    </div>
  </main>
  <main>
    <div class="about-us container border-bottom my-5">
      <div class="row">
        
        <div class="col-lg-6 col-md-6 col-sm-12 info-empress">
          <div>
            <p>
              LATEC Sociedad Anónima es una empresa privada fundada e incorporada
              en Marzo de 2014 en la República del Paraguay.
            </p>
            <p>Actualmente el directorio está conformado por:</p>
            <h5>Sr. Gustavo León, Director</h5>
            <p>
              Posee un MBA, es egresado de la carrera de Ingeniería en Electrónica
              y actualmente es candidato a obtener una Maestría en Ciencias (MSc).
            </p>
            <p>
              También posee acreditación de PMP por el Project Management
              Institute.
            </p>
            <h5>Sra. Ruth Guimaraes, Vice Directora</h5>
            <p>Es graduada en Marketing.</p>
            <h5>Sr. Sergio Peña, Síndico</h5>
            <p>Es egresado de la carrera de Administración de Empresas.</p>
            <h5>Sr. César Carrillo, Asociado</h5>
            <p>
              Posee un título en Ingeniería en Electrónica, y actualmente cursando
              una Maestría en Gobierno y Gerencia Pública (MGGP).
            </p>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
          <div class="logo-aboutUS">
            <img src="../assets/img/Logo-RRSS-removebg-preview.png" class="img-fluid" style="max-width: 300px" alt="" />
          </div>
        </div>
      </div>
    </div>

    <section class="empress-info">
      <div class="bg-color">
        <div class="container">
          <div class="d-flex justify-content-center">
            <div class="section-empress d-flex my-4">
              <div class="card mx-2" style="width: 15rem">
                <div class="img-card text-center mt-2">
                  <img src="../assets/img/About-us/building-icon.svg" class="card-img-top" style="max-width: 80px" alt="..." />
                </div>
                <div class="card-body">
                  <p class="card-text">
                    Es una PYME, categorizada como mediana empresa por el
                    Ministerio de Industria y Comercio bajo el certificado
                    MiPyme # 221.
                  </p>
                </div>
              </div>
              <div class="card" style="width: 15rem">
                <div class="img-card text-center mt-2">
                  <img src="../assets/img/About-us/edit-document-icon.svg" class="card-img-top" style="max-width: 70px"
                    alt="..." />
                </div>
                <div class="card-body">
                  <p class="card-text">
                    Tiene registro como compañía proveedora de servicios en el
                    Ministerio de Industria y Comercio bajo el certificado de
                    REPSE # 017249.
                  </p>
                </div>
              </div>
              <div class="card mx-2" style="width: 15rem">
                <div class="img-card text-center mt-2">
                  <img src="../assets/img/About-us/text-document-check-icon.svg" class="card-img-top" style="max-width: 70px"
                    alt="..." />
                </div>
                <div class="card-body">
                  <p class="card-text">
                    Posee licencia como importador registrado y autorizado por
                    la Aduana Paraguaya.
                  </p>
                </div>
              </div>
              <div class="card" style="width: 15rem">
                <div class="img-card text-center mt-2">
                  <img src="../assets/img/About-us/enrollment-icon.svg" class="card-img-top" style="max-width: 80px" alt="..." />
                </div>
                <div class="card-body">
                  <p class="card-text">
                    Debidamente registrada como Proveedora del Estado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="slide-partners">
      <div class="container text-center mt-3">
        <div class="title">
          <h3 class="text-danger" style="font-style: italic;">Partners</h3>
        </div>
      </div>
      <div class="container">
        <div class="borderline"></div>
      </div>

      <div class="slider">
        <div class="slide-track">
          <div class="slide">
            <img src="../assets/img/1.png" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/img/1.png" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/img/1.png" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/img/1.png" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/img/1.png" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/img/1.png" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/img/1.png" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/img/1.png" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/img/1.png" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/img/1.png" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/img/1.png" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/img/1.png" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/img/1.png" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/img/1.png" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/img/1.png" alt="" />
          </div>
        </div>
      </div>

      <div class="container text-center mt-3">
        <div class="title">
          <h3 class="text-danger" style="font-style: italic;">Clientes</h3>
        </div>
      </div>
      <div class="slider">
        <div class="slide-track">
          <div class="slide">
            <img src="../assets/img/1.png" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/img/1.png" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/img/1.png" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/img/1.png" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/img/1.png" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/img/1.png" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/img/1.png" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/img/1.png" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/img/1.png" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/img/1.png" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/img/1.png" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/img/1.png" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/img/1.png" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/img/1.png" alt="" />
          </div>
          <div class="slide">
            <img src="../assets/img/1.png" alt="" />
          </div>
        </div>
      </div>

      <div class="contaiener">
        <div class="borderline"></div>
      </div>
    </section>

    <section class="empress-aptitude">
      <div class="container">
        <div class="section-empress-aptitude">
          <div class="aptitudes section-empress d-flex justify-content-around">
            <div class="mission">
              <div class="img-mission d-flex justify-content-center">
                <img src="../assets/img/About-us/quality-badge-thumbs-up-icon.svg" class="img-fluid" style="max-width: 80px" alt="" />
              </div>
              <h5 class="text-center">Mision</h5>
              <p>
                Lograr que nuestros clientes se concentren en su negocio central
                y acelerar el aprendizaje en las áreas de ciencias y tecnología.
              </p>
            </div>

            <div class="mission">
              <div class="img-mission d-flex justify-content-center">
                <img src="../assets/img/About-us/eye-icon.svg" class="img-fluid" style="max-width: 80px" alt="" />
              </div>
              <h5 class="text-center">Vision</h5>
              <p>
                Prestar servicios con excelencia, generando lazos a largo plazo,
                enfocándonos en la innovación, respeto por el medioambiente y
                tener un rol activo en la academia.
              </p>
            </div>

            <div class="mission">
              <div class="img-mission d-flex justify-content-center">
                <img src="../assets/img/About-us/handshake-icon.svg" class="img-fluid" style="max-width: 80px" alt="" />
              </div>
              <h5 class="text-center">Valores</h5>
              <p>
                Integridad, diligencia, adaptabilidad, excelencia, compromiso e
                innovación
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <FooterComp />
</template>

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
  name: "AboutUsView",
  components: {
    FooterComp,
  },
};
</script>

<style scoped>
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

.empress-info {
  position: relative;
}

.bg-color {
  max-width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  min-height: 250px;
}

.img-card {
  min-height: 90px;
}

.borderline {
  width: 40%;
  margin: auto;
  border-bottom: 1px solid #9c1515;
}

.card {
  box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 10%;
}

.mission {
  max-width: 230px;
}

.mission h5 {
  color: red;
}

.img-mission {
  min-height: 100px;
}

#bg-footer {
  display: flex;
  align-items: center;
  background-color: #ed1c24;
  max-width: 100%;
  min-height: 120px;
}

.borderline {
  border-bottom: 2px solid #fff;
  max-width: 100%;
}

.img-color {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: #fff;
  margin-right: 8px;
  -webkit-box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.75);
}

.socialmedia-box {
  display: flex;
}

.bg-particles {
  position: relative;
  height: 20vh;
  box-shadow: -1px 4px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -1px 4px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 4px 5px 0px rgba(0, 0, 0, 0.75);
}

@media (max-width:992px) {
  .section-empress {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .card {
    margin-bottom: 19px;
  }
}

@media (max-width:430px) {
  .info-empress{
    width: 90% !important;
  }
}
</style>
