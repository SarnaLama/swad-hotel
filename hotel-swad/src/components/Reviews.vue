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
    name: "Reviews",
  };
  </script>
