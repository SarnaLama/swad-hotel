<template>
  <div class="navbar" id="navbar">
    <div class="left-navbar" id="left-navbar">
      <div class="logo">
        <a href="#">Hotel Swad</a>
      </div>
      <div class="navbar-option" id="navbar-option">
        <a href="#main-section">Home</a>
        <a href="#about-section">About</a>
        <a href="#services">Services</a>
        <a href="#pricing">Pricing</a>
        <a href="#blog-and-news">Blog</a>
      </div>
    </div>
    <div class="right-navbar">
      <a href="#" class="bookNow">BOOK NOW</a>
      <a href="javascript:void(0);" class="hamburger" @click="hamburgerClick">
        <i class="fa fa-bars"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarHotel", //Rename to multi-word
  methods: {
    hamburgerClick() {
      let navbar = document.getElementById("navbar");
      let leftNavbar = document.getElementById("left-navbar");
      let navbarOptions = document.getElementById("navbar-option");

      if (navbar.className === "navbar") {
        navbar.className += " responsive";
        leftNavbar.className += " responsive";
        navbarOptions.className += " responsive";
      } else {
        navbar.className = "navbar";
        leftNavbar.className = "left-navbar";
        navbarOptions.className = "navbar-option";
      }
    },
  },
};
</script>
