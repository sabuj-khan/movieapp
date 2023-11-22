import { ref, computed } from 'vue'
import { defineStore } from 'pinia';
import axios from 'axios';

export const useMovieStore = defineStore('movie', {
    satate: () => ({
        search: ref(null),
        movies: ref([]),
        singleMovie: null,
        movieCount: ref(0),

    }),
    getters: {},
    actions: {
        async searchMovies(){
            if(this.search != ''){
                const {data} = await axios.get('http://www.omdbapi.com/?apikey=81ad51d5&s='+this.search);
                this.movies = data.Search;
                this.movieCount = data.totalResults

                
            }
        },
        async searchSingleMovie(id){
            if(this.search != ''){
                const {data} = await axios.get('http://www.omdbapi.com/?apikey=81ad51d5&i='+id+'&plot=full');
                console.log(data);
                this.singleMovie = data;
            }
        }
    }
})
