<template>
    <nav>
        <ul>
            <li class="left underline"><router-link to="/">Mostly sundry&nbsp —&nbsp alex s</router-link></li>
            <li class="right"><router-link to="/about">About</router-link></li>
            <li class="right"><router-link to="/projects">Projects</router-link></li>
            <li class="right"><router-link to="/cv">CV</router-link></li>
        </ul>
    </nav>
</template>


<script>
export default {
    name: 'Navbar'
};
</script>


<style scoped>
nav {
    padding: 0px;
}


ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    /* Use flexbox for layout */
    align-items: center;
    /* Align items vertically */
}


/* Style for links anchored to the left */
.left {
    margin-right: auto;
}


/* Style for links anchored to the right */
.right {
    margin-left: 50px;
    /* Push items to the right */
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
}

.underline a::after {
    border-bottom: 1px dotted #f25e5e;
    height: 1px;
}

.underline a:hover::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: transparent;
    border-bottom: 1px solid #f25e5e;
    height: 1px;
}
</style>
