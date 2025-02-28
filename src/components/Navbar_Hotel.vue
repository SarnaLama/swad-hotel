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

<style scoped>
.navbar {
  display: flex;
  background-color: #fff;
  position: absolute;
  top: 50px;
  left: 15%;
  right: 15%;
  padding: 20px;
  border-radius: 5px;
  justify-content: space-between;
  position: fixed;
  z-index: 20;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.07), 0 2px 10px rgba(0, 0, 0, 0.07),
    0 3px 10px rgba(0, 0, 0, 0.07);
}

.left-navbar {
  display: flex;
}

.logo {
  padding: 0 40px 0 10px;
}

.logo a {
  font-weight: bold;
  font-size: 1rem;
  color: #1a6b54;
}

.navbar-option a {
  margin: 0 10px;
}

.navbar-option a:hover {
  border-bottom: 1px solid #1a6b54;
  transition: 0.5s all;
}

.right-navbar a {
  margin: 0 10px;
  padding-top: 2px;
  font-weight: bold;
  font-size: 0.9rem;
  color: #1a6b54;
}

.right-navbar a:hover {
  color: #0c382c;
}

.navbar .hamburger {
  display: none;
}
</style>