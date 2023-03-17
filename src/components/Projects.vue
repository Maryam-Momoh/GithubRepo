<script setup>

    import { ref, computed } from "vue";
    import { RouterLink, RouterView} from "vue-router";
    import { data } from "../composables/Data.js"
    import projectInfo from "./projectInfo.vue";
  
    // const repositories = ref([]);

    //   fetch('https://api.github.com/users/Maryam-Momoh/repos')
    //   .then(response => response.json())
    //   .then(data => {
    //     repositories.value = data;
    //     console.log(repositories)
    //   })
    //   .catch(error => console.error(error));
     
    let { repositories, totalRepos} = data()

      const currentPage = ref(1) ;
      const itemsPerPage = ref (9);
      
      const totalPages = computed(() => {
        return Math.ceil(totalRepos.value / itemsPerPage.value )
      })

      const pageNumber= computed(() => {
        const numbers = [];

        for (let i = 1; i <= totalPages.value; i++) {
        numbers.push(i)
        }
        return numbers
      })

      const displayedItems = computed(() => {
          const start = (currentPage.value - 1) * itemsPerPage.value;
          const end = start + itemsPerPage.value;
          console.log(repositories)
            return repositories.value.slice(start, end);
            
      });
      
      // const goToPrevPage = () => {
      //   if (currentPage.value > 1) {
      //    return currentPage.value--;
      //   }
      // };

      // const goToNextPage = computed(() => {
      //   if (currentPage.value < totalPages) {
      //    return currentPage.value++;
      //   }
      // });

</script>

<template>
  <section class="body">
    <RouterLink to="/"><i class="fa fa-arrow-left"/></RouterLink>
    
    <div class="card-container">
      <div  v-for="item in displayedItems" :key="item.id" class="card" >
          <div class="main-content" >
            <h1> {{ item.name }}</h1>
            <RouterLink :to="{name: 'projectinfo', params:{ id: item.id }}" ><button class="read-btn">Read more</button></RouterLink>
           
          </div>
        </div>
      </div> 
    <div class="pagination-container">
          <button active-class="active" v-if="currentPage > 1" @click="currentPage--">Prev</button>

          <button class="pagination-btn" active-class="active" 
          v-for="page in pageNumber" 
          :key="page.id"
           @click="currentPage = page">{{ page }}
          </button>

          <button active-class="active" v-if="currentPage < totalPages" 
          @click="currentPage++">Next</button> 
    </div>
          
          <RouterView/>
  </section>

</template>

<style scoped>
.section {
  background-color: #222831;
}

.fa-arrow-left {
  font-size: clamp(2rem, 4.5vw, 2.5rem);
  color: black;
  margin: 10px 0 10px 15px;

}

.card-container {
  display: grid;
  gap: 2rem;
  grid-template-columns:repeat(3,1fr) ;
}

.card-container .card {
  width: 300px;
  height: 150px;
  box-shadow: 13px 13px 20px #0d120e,
    -13px -13px 20px #1a212f;
  margin-left: 20px;
  border-radius: 12px;
  text-align: center;
  text-decoration: none;
  /* list-style: none;
  border: none; */
}

.main-content{
  text-align: center;
  margin-top: 30px;
}

.main-content h1{
  font-size: clamp(1.7rem, 5vh, 2.5rem);
  /* margin-bottom: 10px; */
  color: #0d120e;
  
}

.main-content p{
  font-size: clamp(0.8rem,1vw,2rem);
}

/* .card:hover {
  background: #374150;
  transition: 0.35s ease-in;
  transform: scale(1.075);
  transition: 0.3s ease-in;
  cursor: pointer;
  
} */

.read-btn{
  margin-top: 12px;
  font-size: 1.1rem ;
  color: azure;
  width: 120px;
  height: 30px;
  border: none;
  border-radius: 12px;
  background-color: #222831;
  box-shadow: 13px 13px 20px #0d120e,
              -13px -13px 20px #1a212f;
}

.read-btn:hover{
  box-shadow: 13px 13px 20px #374150,
              -13px -13px 20px #374150;
  
}

.pagination-container{
  margin-top: 2.5rem;
  text-align: center;
}

.pagination-container button{
  background-color: #222831;
  font-size: clamp(1rem, 2vw, 2.2rem);
}

.active{
  background-color: grey; 
}

@media  screen and (max-width:600px){
  .card-container {
    display: grid;
    gap: 2rem;
    grid-template-columns:1fr ;
}

.card-container .card {
  width: 300px;
  height: 100px;

}

.main-content{
  margin-top: 20px;
}

.read-btn{
  margin-top: 30px;
}
}

@media  screen and (width:768px){
  .card-container {
    gap: 2rem;
    grid-template-columns:1fr 1fr ;
  }

  .card-container .card {
    width: 265px;
    height: 100px;

}
}
</style>