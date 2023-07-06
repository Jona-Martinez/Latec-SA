<template>
    <main class="bg-particles">
        <Particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded" :options="{
            background: {
                color: {
                    value: '#891C24',
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
                        <p class="h1" style="color: #fff">Contacto</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <div class="container">
        <div class="contact-box d-flex justify-content-center">
            <div class="form">
                <section class="bg-contact">
                    <div class="container w-100 d-flex align-items-center" id="container-form">
                        <div class="form-contact d-flex justify-content-center">
                            <div id="form-tittle" class="my-5">
                                <p class="fs-5">Estamos aqui para hacer realidad tus proyectos</p>
                            </div>
                            <form action="">
                                <div class="mb-3">
                                    <input type="text" class="form-control" id="name" placeholder="Nombre y Apellido"
                                        required />
                                </div>
                                <div class="mb-3">
                                    <input type="text" class="form-control" id="number" placeholder="Numero de contacto"
                                        required />
                                </div>
                                <div class="mb-3">
                                    <input type="email" class="form-control" id="email" placeholder="ejemplo@gmail.com"
                                        required />
                                </div>
                                <div class="mb-3">
                                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Mensaje"
                                        rows="3"></textarea>
                                </div>
                                <div class="mb-3">
                                    <button type="button" class="btn btn-danger w-100 fs-7">
                                        Enviar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </section>

            </div>
        </div>
    </div>

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
.form-contact {
    flex-direction: column;
    justify-content: center;
}

.bg-particles {
    position: relative;
    height: 20vh;
    box-shadow: -1px 4px 5px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: -1px 4px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -1px 4px 5px 0px rgba(0, 0, 0, 0.75);
    background: rgba(0, 0, 0, 0.247);
}

@media (max-width:530px) {
    .container{
        max-width: 90%;
    }
}
</style>