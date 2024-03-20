<template>
  <div class="about">
    <p>Hello</p>
    <!-- Add your content here -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: 'About Page'
    };
  }
};
</script>

<style scoped>
.about {
  margin-bottom: 80px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 8fr 1fr 1fr;
  gap: 10px 0px;
  grid-template-areas:
    "title"
    "bg-image"
    "description"
    "date";
}

p {
  color: white;
  text-align: left;
}
</style>