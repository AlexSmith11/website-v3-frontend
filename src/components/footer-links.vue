<template>
    <footer>
        <router-link to="/" class="footer-link">Home</router-link>
    </footer>
</template>




<script>
export default {
    name: 'Footer'
};
</script>




<style scoped>
footer {
    padding: 0px;
    text-align: left;
}




.footer-link {
    color: #f25e5e;
    text-decoration: none;
}




a {
    color: #f25e5e;
    text-decoration: none;
    position: relative;
}


/* Add bottom border to links */
a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: transparent;
}


/* Change bottom border color on hover */
a:hover::after {
    background-color: #f25e5e;
    ;
}
</style>
