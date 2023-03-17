<template>
    <section class="main">
        <h1>404</h1>
        <p>Oopps! Page not found</p>
        <p>We can not find the page you are looking for</p>
        <RouterLink to="/"><button class="goHome-btn">Go back Home</button></RouterLink>
    </section>    
</template>

<style scoped>
    .main{
        text-align: center;
        margin: 0 auto;
        margin-top: 6em;
        box-shadow: 13px 13px 20px #0d120e,
                    -13px -13px 20px #1a212f;
        width: 500px;
        height: 300px;
    }

    .main h1{
        font-size: clamp(3rem, 12vw, 9rem);
      
    }
   
    .main p{
        font-size: clamp(1rem, 12vw, 1.5rem);
        margin-bottom: 2px;
    }

    .goHome-btn{
        margin-top: 20px;
        border: none;
        border-radius: 12px;
        font-size: clamp(1rem, 3vw, 2.2rem);
        background-color: #222831;
        box-shadow: 13px 13px 20px #0d120e,
        -13px -13px 20px #1a212f;
        color: azure;
        text-align: center;
        cursor: pointer;
        padding: 10px;
    }

    .goHome-btn::hover{
        background-color: grey; 
    
    }

    @media  screen and (max-width:600px){
        .main{
            margin-top: 25px;
            width: 300px;
            height: 170px;
        }
    
    }

</style>