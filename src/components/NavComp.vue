<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img
          src="../assets/img/logo.png"
          style="max-width: 80px"
          alt="Logo Latec"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <router-link class="nav-link active" aria-current="page" to="/">
            <span class="links"
            > Inicio </span>
          </router-link>
          <router-link
            class="nav-link active"
            aria-current="page"
            to="/services"
          >
            <span class="links"> Portafolio </span>
          </router-link>
          <router-link class="nav-link active" aria-current="page" to="/aboutus">
            <span class="links"> Quiénes somos? </span>
          </router-link>
          <router-link class="nav-link active" aria-current="page" to="/contact">
            <span class="links"> Contacto </span>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavComp",
  components: {},
};
</script>

<style scoped>
.navbar-expand-lg .navbar-collapse {
  justify-content: flex-end;
}
.navbar {
  box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.75);
}
</style>
