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
