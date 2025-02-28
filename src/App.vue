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
import Services from "./components/Services_Hotel.vue";
import Pricing from "./components/Pricing_Hotel.vue";
import Blog from "./components/Blog_Hotel.vue";
import Reviews from "./components/Reviews_Hotel.vue";
import Footer from "./components/Footer_Hotel.vue";

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
