<template>
    <div class="project-item">
        <h2 class="title">{{ title }}</h2>
        <img class="image" :src="image" alt="Project Image"></img>
        <p class="description">{{ description }}</p>
        <p class="date">Date: {{ date }}</p>
    </div>
</template>


<script>
export default {
    name: 'Project Item',
    props: {
        title: String,
        image: String,
        description: String,
        date: String
    }
};
</script>


<style scoped>
.project-item {
    justify-content: center;
    margin-bottom: 80px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr auto 0.5fr 0.5fr;
    gap: 1px 0px;
    grid-template-areas:
        "title"
        "image"
        "description"
        "date";
}


.title {
    color: #f25e5e;
    text-align: left;
    font-size: 4rem;
}


.image {
    grid-area: image;
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
    max-width: 1000px;
    max-height: 1000px;
}


.description {
    text-align: left;
    line-height: 1.6;
    font-size: 1.125rem;
}


.date {
    text-align: left;
    font-size: 1.125rem;
}

p {
    margin: 0px;
}
</style>