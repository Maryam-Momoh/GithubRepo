<script setup>
    import "../assets/main.css"
    import Project from "./Projects.vue"
    import { RouterLink } from "vue-router";

</script>

<template>
    <section class="body">
       
        <section class="header">
            <section class="intro">
        <h1>HI THERE!</h1>
        <p>I'M <span class=" span color-change-3x">MARYAM MOMOH</span> </p>
    </section>

    <section class="img-container">
        <img class="home-img" src="/moh.jpeg" alt="maryam">
    </section>
    <RouterLink :to="{name: 'projects'}"><button class="btn">Explore Projects</button></RouterLink>
    </section>
    </section> 
</template>
