<script>
import axios from 'axios';
import { store } from './store'
import SearchBar from './components/SearchBar.vue';
import FilmCard from './components/FilmCard.vue';

export default {
  name: "App",
  components: {
    SearchBar,
    FilmCard
  },
  data() {
    return {
      store
    };
  },
  created() {
    this.chiamataAPI()
  },
  methods: {
    async chiamataAPI() {

      store.loadingData = true
      store.arrayFilmsTVseries = [];

      let page = 0;
      let totalPages = 0;
      let totalPagesMax = 10; /* max number of pages to look for */
      let arrayFilmsTVseries = store.arrayFilmsTVseries;
      let testoRicercaUtente = store.testoRicerca;

      if (store.testoRicerca !== '') { /* if user searched something */

        testoRicercaUtente = store.testoRicerca;

        /* if the last letter is a blank space, eliminate such space */
        if (/\s/.test(testoRicercaUtente.slice(-1))) {
          testoRicercaUtente = testoRicercaUtente.slice(0, -1);
        }

      } else { /* if user DID NOT search something */
        testoRicercaUtente = 'facebook';
      }

      /* extract all the info from the API call */
      do {

        let { data: res } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7b0fe496f2dadc8282a07240024e5a8b&query=${testoRicercaUtente}`, { params: { page: ++page } })
        totalPages = res.total_pages;
        store.arrayFilmsTVseries = store.arrayFilmsTVseries.concat(res.results);
      } while (page < totalPages && page < totalPagesMax)

      console.log(store.arrayFilmsTVseries)

      /* update poster path */
      let indexNull = [];
      for (let indi = 0; indi < store.arrayFilmsTVseries.length; indi++) {

        /* check if any poster is null */
        if (store.arrayFilmsTVseries[indi].poster_path == null || store.arrayFilmsTVseries[indi].poster_path == 'null') {
          indexNull = indexNull.concat(indi)
        }

        store.arrayFilmsTVseries[indi].poster_path = store.posterPathDim + store.arrayFilmsTVseries[indi].poster_path
      }

      /* eliminate those that have null values */
      indexNull.sort((a, b) => b - a);
      for (let i = 0; i < indexNull.length; i++) {
        store.arrayFilmsTVseries.splice(indexNull[i], 1);
      }

      for (let i = 0; i < store.arrayFilmsTVseries.length; i++) {
        store.arrayFilmsTVseries[i].vote_average = Math.round(store.arrayFilmsTVseries[i].vote_average)
        if (store.arrayFilmsTVseries[i].vote_average > 5) {
          store.arrayFilmsTVseries[i].vote_average = 5;
        }
        if (store.arrayFilmsTVseries[i].vote_average == 0) {
          store.arrayFilmsTVseries[i].vote_average = false;
        }

        console.log(store.arrayFilmsTVseries[i].vote_average)
      }
    },

  }
}
</script>

<template>
  <SearchBar @nomeEmit="chiamataAPI" />
  <FilmCard />
</template>

<style lang="scss">
@use "./style/main.scss" as *;
</style>
