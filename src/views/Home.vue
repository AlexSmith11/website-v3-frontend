<template>
  <div class="home">
    <!-- repeatable component -->
    <ProjectItem v-for="(item, index) in items" :key="index" :title="item.title" :image="item.image"
      :description="item.description" :date="item.date" />
  </div>
</template>


<script>
import ProjectItem from '../components/home-project.vue';


export default {
  name: 'Home',
  components: {
    ProjectItem
  },
  data() {
    return {
      items: [ // Data for each item
        {
          title: 'Reading List',
          image: 'https://i.imgur.com/OPGUa4u.jpg',
          description: 'The C# Backend for a book tracking app.',
          date: '2024-02-29'
        },
        {
          title: 'Fallout 4 Character Generator',
          image: 'https://i.imgur.com/hXi5xNr.jpg',
          description: 'Generate characters for the game Fallout 4. Input a range of details and allow this app to get you the rest of the way.',
          date: '2024-02-28'
        },
        {
          title: 'Exoplanet Guide',
          image: 'https://i.imgur.com/INSLztJ.jpg',
          description: 'Android app that takes in the latest information on the thousands of Exoplanets we have discovered through various space telescopes! I had so much fun creating this in collaboration with the Aberystwyth University physics department.',
          date: '2024-02-28'
        },
      ]
    };
  },
  created() {
    document.title = 'Alex Smith'; // set the page title to a hard-coded string
  }
};
</script>


<style scoped>
.home {
  justify-content: center;
  display: grid;
  /* width: 100px; temp */
  width: 100px;
}
</style>
