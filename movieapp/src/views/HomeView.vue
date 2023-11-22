<script setup>
import { useMovieStore } from '../stores/movie';

const movieStore = useMovieStore();

</script>

<template>
    <div class="home">

        <div class="featured-movie-card">
            <router-link to="/movie/tt0454876">
                <img src="https://m.media-amazon.com/images/M/MV5BNTg2OTY2ODg5OF5BMl5BanBnXkFtZTcwODM5MTYxOA@@._V1_SX300.jpg" alt="Movie Image" class="featured-monie-img">

                
                    <div class="movie-details">
                        <h3>Life of The Pi</h3>
                        <p>A young man who survives a disaster at sea is hurtled into an epic journey of adventure and discovery. While cast away, he forms an unexpected connection with another survivor: a fearsome Bengal tiger.</p>
                    </div>
                
            </router-link>
        </div>

        <div class="search-movie">
            <form @submit.prevent="movieStore.searchMovies">
                <div>
                    <input v-model="movieStore.search" type="text" placeholder="Search Movie">
                    <input type="submit" value="search">
                </div>
            </form>
        </div>

        <div class="movie-list">
            <div v-for="movie in movieStore.movies" :key="movie.imdbID" class="movie">
                <div class="movie-link">               
                <router-link :to="{name: 'movie-detail', params:{id:movie.imdbID}}">
                    <div class="movie-image">
                        <img :src="movie.Poster" alt="Movie Image">
                        <div class="movie-genre">{{ movie.Type }}</div>
                        
                    </div>
                    <div class="movie-box">
                        <div class="movie-details">
                            <p class="movie-year">{{ movie.Year }}</p>
                            <h3 class="movie-title">{{ movie.Title }}</h3>                               
                        </div>
                    </div>
                    
                                           
                </router-link>
            
                
            </div>
            </div>
        </div>

    </div>
    <router-view/>
</template>

<style scoped>
.featured-movie-card{
    position: relative;
    width: 80%;
    margin: 0 auto;
 }

.featured-movie-card img{
    width: 100%;
    height: 300px;
    object-fit: cover;  
    position: relative;  
    z-index: 0; 
}

.featured-movie-card .movie-details{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 4px;
    background-color: #1e293b;
    opacity: 0.8;
    z-index: 1;
    padding: 10px;
}

.featured-movie-card .movie-details h3, 
.featured-movie-card .movie-details p {
    color: #fff;
}

.home .search-movie{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-bottom: 20px;
}

.home .search-movie input {
    border: none;
    outline: none;

}
.home .search-movie input[type=text]{
    width: 100%;
    background-color: #1e293b;
    padding: 10px 16px;
    font-size: 20px;
    color: #fff;
    border-radius: 5px;
    display: block;
    margin-bottom: 2px;
}
.home .search-movie input[type=text]::placeholder{
    color: #f3f3f3;
}
.home .search-movie input[type=text]:focus{
  box-shadow: opx opx opx 17px rgba(0, 0, 0, alpha(0.5));
    
}
.home .search-movie input[type=submit]{
    width: 112%;
    background-color: #059669;
    padding: 10px 16px;
    font-size: 20px;
    color: #fff;
    border-radius: 5px;
    transition: 0.4s;
    outline: none;
    text-transform: uppercase;
    cursor: pointer;
}
.home .search-movie input[type=submit]:active{
    background-color: #064e3b;
}

.home .movie-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0px 8px;
    width: 80%;
    margin: 0 auto;
}

.home .movie-list .movie {
    width: 46% !important;
    margin: 0px 2px 10px 2px;
}

.home .movie-list .movie .movie-link {
    display: flex;
    flex-direction: column;
    height: 100%;
}
  
.home .movie-list .movie .movie-link .movie-image {
    position: relative;
    display: block;
}
.home .movie-list .movie .movie-link .movie-image img {
    display: block;
    width: 100%;
    height: 300px !important;
    object-fit: cover;
}

.home .movie-list .movie .movie-link .movie-image .movie-genre {
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #059669;
    padding: 9px 17px;
    color: #fff;
    border-radius: 0 5px 0 0;
}

.home .movie-list .movie .movie-link .movie-box {
    background-color: #1e293b;
    display: block;
    
}
.home .movie-list .movie .movie-link .movie-details {
    padding: 9px 15px;
    color: #fff;
    text-decoration: none;
    display: inline-block;
}

.home .movie-list .movie .movie-link .movie-details .movie-year {
    color: #aaa;
    font-size: 15px;
    margin-bottom: 0;
}
.movie-title {
    margin-top: 5px;
    color: #fff;
    font-weight: 700;
    font-size: 21px;
}






  
</style>