<template>
  <div id="app">
    <MainSection />
    <AboutSection />
    <Services />
    <Pricing />
    <Blog />
    <Reviews />
    <Footer />
  </div>
</template>

<script>
import MainSection from "./components/MainSection.vue";
import AboutSection from "./components/AboutSection.vue";
import Services from "./components/Services.vue";
import Pricing from "./components/Pricing.vue";
import Blog from "./components/Blog.vue";
import Reviews from "./components/Reviews.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    MainSection,
    AboutSection,
    Services,
    Pricing,
    Blog,
    Reviews,
    Footer,
  },
};
</script>
