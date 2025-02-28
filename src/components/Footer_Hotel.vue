<template>
    <footer>
      <div class="container">
        <div class="social-media">
          <a href="">
            <span class="fa fa-linkedin" aria-hidden="true"></span>
          </a>
          <a href="">
            <span class="fab fa-medium-m" aria-hidden="true"></span>
          </a>
          <a href="">
            <span class="fa fa-instagram" aria-hidden="true"></span>
          </a>
        </div>
        <p class="white">© Copyright 2021 Royal Park All Right Reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterHotel",
  };
  </script>

<style scoped>
.more-information-section {
  padding-top: 55px;
  padding-bottom: 230px;
  background-color: #e6f7f2;
}

.more-information-section a {
  display: inline-block;
  width: 100%;
  text-align: left;
  font-size: 0.8rem;
  color: rgba(60, 60, 60, 0.8);
}

.more-information-section a:hover {
  text-decoration: underline;
}

.more-information-section p {
  font-size: 0.8rem;
}

.icon {
  padding-right: 2px;
}

.company-info {
  float: left;
  width: 30%;
}

.company-info p {
  width: 80%;
}

.legal a {
  padding-bottom: 7px;
}

.legal {
  float: left;
  width: 20%;
}

.resources a {
  padding-bottom: 7px;
}

.resources {
  float: left;
  width: 20%;
}

.newsletter a {
  padding-bottom: 7px;
}

.newsletter {
  float: left;
  width: 30%;
}

.newsletter p {
  width: 90%;
}

input {
  width: 190px;
  height: 40px;
  padding: 15px 20px;
  font-size: 0.8rem;
  border: 1.5px solid rgba(60, 60, 60, 0.8);
  background-color: #e6f7f2;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  float: left;
  color: rgba(60, 60, 60, 0.8);
}

.email-submit {
  padding: 0;
  font-family: "Poppins", sans-serif;
  font-size: 0.7rem;
  width: 80px;
  background-color: #1a6b54;
  color: #fff;
  border: none;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  cursor: pointer;
}

.social-media span {
  padding: 7px;
  background-color: #fff;
  color: #1a6b54;
  border-radius: 90px;
  margin-right: 10px;
}

.social-media {
  float: left;
  padding-top: 27px;
  font-size: 15px;
}

footer {
  background-color: #1a6b54;
  width: 100%;
  height: 80px;
}

.white {
  color: white;
  text-align: right;
  padding-top: 30px;
  margin: 0px;
}

.white p {
  margin: 0px;
}

footer p {
  font-size: 13px;
}

.clear {
  clear: left;
}
</style>