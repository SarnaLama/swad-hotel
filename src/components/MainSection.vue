<template>
    <div class="main-section" id="main-section">
      <Navbar />
      <div class="main-contents">
        <div class="main-text">
          <div class="container-main">
            <h1>Stay once,</h1>
            <h1>carry memories</h1>
            <h1>Forever.</h1>
            <p class="main">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque minus
              temporibus, ex perferendis sunt suscipit. Vel laboriosam eligendi
              delectus voluptatem.
            </p>
          </div>
        </div>
        <div class="main-image"></div>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from "./Navbar_Hotel.vue";
  
  export default {
    name: "MainSection",
    components: {
      Navbar,
    },
  };
  </script>


<style scoped>
.main-section {
  color: #fff;
  position: relative;
}

.container-main {
  width: 60%;
  margin: 0 0 0 200px;
  padding-top: 190px;
}

.container-main p {
  color: #fff;
}

.main-contents {
  display: flex;
  height: 700px;
}

.main-text {
  height: 100%;
  width: 50%;
  background-color: #1a6b54;
}

.main-image {
  height: 100%;
  width: 50%;
  background-image: url("@/assets/img/japan-views.jpg");
  image-rendering: optimizeSpeed;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>