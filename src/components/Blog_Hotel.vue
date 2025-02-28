<template>
    <div class="blog-and-news" id="blog-and-news">
      <div class="container">
        <div class="heading-blog" data-aos="fade-up">
          <h2>Our Latest Blog & News</h2>
          <div class="blog-container">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,
              reiciendis ratione quaerat architecto.
            </p>
          </div>
        </div>
        <div class="blog-contents">
          <div class="blog" data-aos="fade-down">
            <img src="../assets/img/resort.jpg" alt="resort picture" />
            <div class="blog-info">
              <div class="time-posted">
                <div class="rounded">
                  <span class="fa fa-calendar" aria-hidden="true"></span>
                </div>
                <h4>20-04-2021</h4>
              </div>
              <div class="blog-author">
                <div class="rounded">
                  <span class="fa fa-user" aria-hidden="true"></span>
                </div>
                <h4>BY CREATOR</h4>
              </div>
            </div>
            <div class="blog-content">
              <h4>Remarkable Resort That Offer The Best of Views!</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
                repudiandae illo odio fugiat, fugit sit inventore, laudantium,
                voluptas beatae iusto doloremque suscipit. Nisi sint similique
                sapiente accusantium laboriosam vitae pariatur!
              </p>
            </div>
          </div>
          <div class="blog second" data-aos="fade-up">
            <img src="../assets/img/villa.jpg" alt="villa picture" />
            <div class="blog-info">
              <div class="time-posted">
                <div class="rounded">
                  <span class="fa fa-calendar" aria-hidden="true"></span>
                </div>
                <h4>21-04-2021</h4>
              </div>
              <div class="blog-author">
                <div class="rounded">
                  <span class="fa fa-user" aria-hidden="true"></span>
                </div>
                <h4>BY CREATOR</h4>
              </div>
            </div>
            <div class="blog-content">
              <h4>
                Villas in Nashik That Are Nothing Less Than Home Away From Home!
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
                consequuntur praesentium, esse molestias dolores molestiae minima
                aspernatur impedit iusto voluptates quis vel deleniti illum fugiat
                beatae voluptatibus harum facere ducimus!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "BlogHotel",
  };
  </script>

<style scoped>
.blog-and-news {
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 50px;
}

.blog-contents {
  display: flex;
}

.heading-blog {
  text-align: center;
  padding-bottom: 25px;
}

.heading-blog h2 {
  margin-bottom: -2px;
}

.blog {
  width: 50%;
  margin-right: 30px;
}

.second {
  margin-right: 0px;
}

.fa-calendar {
  color: #805824;
}

.fa-user {
  color: #284f99;
}

.blog-author span {
  background-color: rgba(40, 80, 153, 0.1);
  border-radius: 100px;
  padding: 20px;
}

.blog img {
  margin-bottom: 20px;
}

.rounded {
  margin-right: 15px;
}

.blog-info {
  display: flex;
}

.time-posted {
  display: flex;
  flex-direction: row;
}

.blog-author {
  display: flex;
  flex-direction: row;
  padding-left: 100px;
}

.time-posted h4 {
  margin-top: 16px;
  font-weight: normal;
}

.blog-author h4 {
  margin-top: 16px;
  font-weight: normal;
}

.blog-content h4 {
  font-size: 1.3rem;
  width: 85%;
}

.blog-content p {
  width: 80%;
}

.time-posted span {
  background-color: rgba(128, 88, 36, 0.1);
  border-radius: 100px;
  padding: 20px;
}

.blog img {
  width: 100%;
  border-radius: 10px;
}
</style>