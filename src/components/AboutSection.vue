<template>
    <div class="about-section" id="about-section">
      <div class="container">
        <div class="about-contents">
          <div class="image-about" data-aos="fade-up">
            <img src="../assets/img/resort.jpg" alt="image" />
          </div>
          <div class="box-about" data-aos="fade-down">
            <div class="box-contents">
              <h2>We Strived Only for The Best!</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
                alias! Soluta minima at itaque.
              </p>
              <h5>Sollicitudin imperdiet maecenas lorem</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                unde ipsum minima iusto rerum cum sunt quam mollitia, blanditiis
                similique.
              </p>
            </div>
            <div class="continue-button">
              <a href="#">Continue →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AboutSection",
  };
  </script>


<style scoped>
.about-section {
  padding-top: 120px;
}

.about-contents {
  display: flex;
}

.image-about {
  width: 50%;
  margin-right: 30px;
}

.box-about {
  width: 50%;
  margin-left: 30px;
}

.box-contents {
  width: 85%;
}

.box-contents h2 {
  margin: 0;
}

.box-contents h2::after {
  content: "";
  width: 30%;
  border-top: none;
}

.image-about img {
  width: 100%;
  border-radius: 7px;
}

.continue-button a {
  padding: 13px 18px;
  background-color: #1a6b54;
  border-radius: 4px;
  color: #fff;
}

.continue-button a:hover {
  background-color: #0c382c;
  transition: 0.5s all;
}
</style>