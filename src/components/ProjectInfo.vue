<script >
    import { data} from "../composables/Data.js"
    import { ref, computed } from "vue";
   
    
    // const repos = repositories.find(repo => repo.id === this.$route.params.id)
    const repositories = ref([]);

    fetch('https://api.github.com/users/Maryam-Momoh/repos')
    .then(response => response.json())
    .then(data => {
        repositories.value = data;
        console.log(repositories)
    })
    .catch(error => console.error(error));
    const repoDetails = computed(() =>{
        for(repo of repositories){
            console.log(repo);
          return  repo.find( r => r.id === this.$route.params.id)
        }
    })
    
</script>
 
<template>
    <section>
        <h1>PROJECT INFORMATION:{{ this.$route.params.id }}</h1>
        <!-- <p>{{  repo.name}}</p> -->
    </section>
    
</template>

