const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay:75
});

typewriter
    .typeString('Conoce todos los servicios que tenemos para ofrecerte')
    .pauseFor(200)
    .starat();