<template>
    <div class="our-services" id="services">
      <div class="container">
        <div class="services-contents">
          <div class="box-description" data-aos="fade-up">
            <h2>See Our Services</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur elit. Consectetur debitis
              nobis.
            </p>
            <div class="services">
              <div class="services-icon">
                <h4>
                  <span class="fa fa-cutlery orange" aria-hidden="true"></span
                  >Quality Food
                </h4>
              </div>
              <div class="services-icon">
                <h4>
                  <span class="fa fa-lock blue" aria-hidden="true"></span>High
                  Security
                </h4>
              </div>
              <div class="services-icon">
                <h4>
                  <span class="fa fa-clock-o green" aria-hidden="true"></span>Quick
                  Service
                </h4>
              </div>
              <div class="services-icon">
                <h4>
                  <span
                    class="fa fa-hourglass-o purple"
                    aria-hidden="true"
                  ></span
                  >24 Hours Alert
                </h4>
              </div>
            </div>
          </div>
          <div class="image-services" data-aos="fade-up">
            <img src="../assets/img/services.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ServicesHotel",
  };
  </script>


<style scoped>
.our-services {
  padding-top: 125px;
  padding-bottom: 40px;
}

.services-contents {
  display: flex;
}

.image-services {
  width: 50%;
  margin-left: 30px;
}

.image-services img {
  width: 100%;
  border-radius: 7px;
}

.box-description {
  width: 50%;
  margin-right: 30px;
}

.box-description h2 {
  margin: 0;
}

.box-description h2::after {
  content: "";
  width: 30%;
  border-top: none;
}

.box-description p {
  width: 60%;
}

.services {
  display: grid;
  grid-template-columns: auto auto;
}

.services-icon {
  padding: 10px 0;
}

.services-icon .fa {
  border-radius: 50%;
  margin-right: 20px;
}

.orange {
  padding: 17.5px 19.5px;
  background-color: rgba(241, 47, 41, 0.1);
  color: rgba(241, 47, 41, 1);
}

.blue {
  padding: 17.3px 20px;
  background-color: rgba(8, 38, 92, 0.1);
  color: rgba(8, 38, 92, 1);
}

.green {
  padding: 17px 19px;
  background-color: rgba(36, 112, 68, 0.1);
  color: rgba(36, 112, 68, 1);
}

.purple {
  padding: 17px 18px;
  background-color: rgba(199, 43, 191, 0.1);
  color: rgba(199, 43, 191, 1);
}
</style>