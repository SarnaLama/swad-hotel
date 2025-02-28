<template>
    <div class="reviews-section" id="reviews">
      <div class="container">
        <div class="section-title" data-aos="fade-up">
          <h3>See Satisfied Traveler Reviews</h3>
        </div>
        <div class="review">
          <div class="image-review" data-aos="fade-down">
            <img src="../assets/img/japan-views.jpg" alt="views image" />
          </div>
          <div class="review-box" data-aos="fade-down">
            <div class="arrow-buttons">
              <a href="#">
                <span class="material-icons-outlined"> navigate_before </span>
              </a>
              <a href="#">
                <span class="material-icons-outlined"> navigate_next </span>
              </a>
            </div>
            <div class="review-information">
              <div class="content-review">
                <span class="fa fa-quote-left" aria-hidden="true"></span>
                <p class="italic">
                  The hotel was simple amazing and I couldn't thank Rayal Park more
                  for helping out. I've been a customer for awhile and I have to
                  say it's probably my favourite hotel!
                </p>
              </div>
              <div class="reviewer">
                <img
                  class="rounded-image"
                  src="../assets/img/profile-pic.jpg"
                  alt="reviewer image"
                />
                <div class="reviewer-profile">
                  <h4 class="reviewer-name">Olivia Blisset</h4>
                  <p>Satisfied Traveler</p>
                </div>
              </div>
            </div>
            <div class="clear"></div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ReviewsHotel",
  };
  </script>


<style scoped>
.reviews-section {
  padding-bottom: 100px;
}

.section-title {
  font-style: italic;
  text-align: center;
  font-size: 1.5rem;
  padding-bottom: 20px;
}

.review {
  display: flex;
}

.image-review {
  width: 50%;
  margin-right: 3rem;
}

.image-review img {
  width: 100%;
  border-radius: 10px;
}

.review-box {
  width: 50%;
  margin-left: 3rem;
  display: inline-block;
  position: relative;
}

.review-information {
  position: absolute;
  top: 20%;
}

.arrow-buttons {
  float: right;
}

.material-icons-outlined {
  background-color: rgba(60, 60, 60, 0.2);
  font-size: 48px !important;
  border-radius: 5px;
  margin-left: 20px;
}

.arrow-buttons span:hover {
  background-color: rgba(60, 60, 60, 0.6);
  transition: all 0.5s;
}

.fa-quote-left {
  font-size: 2rem !important;
  color: #e6f7f2;
}

.italic {
  font-style: italic;
}

.review-information {
  width: 70%;
}

.review-information p {
  margin-top: 2px;
}

.rounded-image {
  float: left;
  width: 5.5rem;
  border-radius: 50%;
  margin-right: 25px;
}

.reviewer-name {
  padding-top: 20px;
  margin-bottom: -5px;
  font-size: 1.3rem;
}
</style>