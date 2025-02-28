<template>
    <div class="best-plans" id="pricing" data-aos="fade-up">
      <div class="container">
        <div class="heading-blog">
          <h2>Our Best Room Plans</h2>
          <div class="blog-container">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,
              reiciendis ratione quaerat architecto.
            </p>
          </div>
        </div>
        <div class="plan-contents">
          <div class="plan-card" data-aos="fade-down">
            <img src="../assets/img/classic-room-cropped.jpg" alt="classic room" />
            <div class="plan-content">
              <h4>Classic Room</h4>
              <div class="price">
                <p><span>$150</span> per night</p>
              </div>
              <div class="features">
                <p>Free WiFi</p>
                <p>Breakfast</p>
                <p>1 bed in room</p>
                <p>2 peoples in room</p>
              </div>
              <div class="select-package">
                <a href="#">Select Package</a>
              </div>
            </div>
          </div>
          <div class="plan-card" data-aos="fade-up">
            <img src="../assets/img/luxury-room-cropped.jpg" alt="luxury room" />
            <div class="plan-content">
              <h4>Luxury Room</h4>
              <div class="price">
                <p><span>$200</span> per night</p>
              </div>
              <div class="features">
                <p>Free WiFi</p>
                <p>Breakfast</p>
                <p>2 beds in room</p>
                <p>4 peoples in room</p>
              </div>
              <div class="select-package">
                <a href="#">Select Package</a>
              </div>
            </div>
          </div>
          <div class="plan-card" data-aos="fade-up">
            <img src="../assets/img/modern-room-cropped.jpg" alt="modern room" />
            <div class="plan-content">
              <h4>Modern Room</h4>
              <div class="price">
                <p><span>$175</span> per night</p>
              </div>
              <div class="features">
                <p>Free WiFi</p>
                <p>Breakfast</p>
                <p>1 bed in room</p>
                <p>2 peoples in room</p>
              </div>
              <div class="select-package">
                <a href="#">Select Package</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PricingHotel",
  };
  </script>


<style scoped>
.best-plans {
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 60px;
}

.plan-contents {
  display: flex;
}

.plan-content {
  margin-bottom: 35px;
}

.plan-content h2 {
  font-size: x-large;
}

.price span {
  font-size: 1.5rem;
  font-weight: 900;
  color: rgb(59, 59, 59);
}

.plan-card {
  width: 33.3%;
  text-align: center;
  margin-right: 30px;
  border-radius: 7px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 3px rgba(0, 0, 0, 0.07),
    0 3px 6px rgba(0, 0, 0, 0.07);
}

.plan-card:hover {
  background-color: #e6f7f2;
  box-shadow: none;
  transition: 1s all;
}

.plan-card img {
  width: 100%;
  border-radius: 7px;
}

.select-package {
  padding-top: 30px;
}

.select-package a {
  padding: 14px 24px;
  border: 1px solid rgba(60, 60, 60, 0.2);
  border-radius: 7px;
  font-size: 0.8rem;
  color: #31b077;
}

.select-package a:hover {
  background-color: #1a6b54;
  color: #fff;
  transition: 0.5s all;
}
</style>