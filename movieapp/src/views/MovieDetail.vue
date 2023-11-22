<script setup>
import { onMounted } from 'vue';
import { useMovieStore } from '../stores/movie';
import { useRoute } from 'vue-router';

const movieStore = useMovieStore();
const route = useRoute();

onMounted(() => {
  movieStore.searchSingleMovie(route.params.id);
})

</script>
<template>
   <div class="movie-box">
      <div class="movie-details">
          <h3>{{ movieStore.singleMovie.Title }}</h3>    
         <p>Release Date: <span>{{ movieStore.singleMovie.Released }}</span></p>  
            <div class="movie-image">
              <img :src="movieStore.singleMovie.Poster" alt="Movie Image">             
          </div>                         
          <p>{{ movieStore.singleMovie.Plot }}</p> 
          
      </div>
  </div>

</template>

<style scoped>
.movie-box{
  padding: 20px;
  width: 70%;
  margin: 0 auto;
}

.movie-details {

}
.movie-details h3 {
  font-size: 35px;
  color: #fff;
  margin-bottom: 5px;
  font-weight: 900;
}
.movie-details p {
  font-size: 15px;
  color: #f3f3f3;
  margin-bottom: 10px;
}

</style>
