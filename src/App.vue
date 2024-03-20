<template>
  <div id="app">
    <Navbar />
    <h1 class="page-title" v-if="!isHomePage">{{ pageTitle }}</h1>
    <router-view class="pages"></router-view>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Footer />
  </div>
</template>


<script>
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/navbar-top.vue'
import Footer from './components/footer-links.vue';


export default {
  name: 'App',
  components: {
    // HelloWorld,
    Navbar,
    Footer
  },
  data() {
    return {
      pageTitle: 'My Vue App' // initial page title
    };
  },
  watch: {
    $route(to) {
      this.pageTitle = to.meta.title || "My Vue App"; // update page title on route change
      document.title = this.pageTitle; // update document title
    }
  },
  computed: {
    isHomePage() {
      return this.$route.path === '/'; // Check if current route is the home page
    }
  }
}
</script>


<!-- global styles -->
<style>
#app {
  font-family: "DM Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0 auto;
  width: 90%;
}

.app {
  justify-content: center;
}


html,
body {
  width: 100%;
  height: 100%;
  background-color: #16437e;
}

.pages {}


h2 {
  color: white;
}


p {
  color: white;
}


.page-title {
  text-align: left;
  position: relative;
  color: #f25e5e;
  font-size: 4rem;
}
</style>./components/navbar-top.vue
