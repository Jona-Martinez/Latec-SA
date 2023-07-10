<template>
  <section class="footer">
    <div id="bg-footer">
      <div class="container w-75 pt-4">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-12 d-flex align-items-center">
            <div class="footer-info footer-box w-100">
              <p class="text-light">"Tecnologia a tu alcance"</p>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center pb-3"
          >
            <div class="footer-mid text-center">
              <img
                src="../assets/img/Logo-RRSS-removebg-preview.png"
                class="img-fluid mb-2"
                style="max-width: 70px; border-radius: 20%"
                alt=""
              />
              <div class="borderline mb-2">
                <div class="center-box"></div>
              </div>
              <div class="socialmedia-box">
                <div class="img-color">
                  <a href=""
                    ><img
                      src="../assets/img/social-media/facebook-round-icon.png"
                      style="max-width: 35px;"
                      alt=""
                  /></a>
                </div>

                <div class="img-color">
                  <a href=""
                    ><img
                      src="../assets/img/social-media/instagram-round-icon.png"
                      style="max-width: 35px;"
                      alt=""
                  /></a>
                </div>

                <div class="img-color">
                  <a href=""
                    ><img
                      src="../assets/img/social-media/linkedin-round-icon.png"
                      style="max-width: 35px;"
                      alt=""
                  /></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="footer-info-right footer-box info-none">
              <div class="info d-flex">
                <router-link to="/">Inicio</router-link>
                <router-link to="/services">Portafolio</router-link>
                <router-link to="/aboutus">Quienes somos?</router-link>
                <router-link to="/contact">Contacto</router-link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="footer-copyright">
    <div class="container bg-footer-copyright">
      <div class="info-copyright d-flex justify-content-center align-items-center">
        <p class="text-light" style="margin: 0">
          Todos los derechos reservados por LATEC S.A | Designed by Jona
          Martinez
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComp",
  components: {
    
  },
};
</script>

<style scoped>
#bg-footer {
  display: flex;
  align-items: center;
  background-color: #ED1C24;
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

.footer-info-right .info {
  display: flex;
  flex-direction: column;
  align-items: end;
}

.footer-info-right .info a {
  text-decoration: none;
  color: #fff;
}

.bg-footer-copyright {
  background-color: rgba(0, 0, 0, 0.801);
  max-width: 100%;
  height: 50px;
}

.info-copyright {
  min-height: 100%;
}

@media (max-width:992px) {
  .footer-box{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }


}
</style>
