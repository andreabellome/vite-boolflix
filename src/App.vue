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

      if (store.testoRicerca !== '') { /* if user searched something */

        let page = 0;
        let totalPages = 0;
        let totalPagesMax = 10; /* max number of pages to look for */
        let arrayFilmsTVseries = store.arrayFilmsTVseries;
        let testoRicercaUtente = store.testoRicerca;

        /* if the last letter is a blank space, eliminate such space */
        if (/\s/.test(testoRicercaUtente.slice(-1))) {
          testoRicercaUtente = testoRicercaUtente.slice(0, -1);
        }

        /* extract all the info from the API call */
        do {

          let { data: res } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7b0fe496f2dadc8282a07240024e5a8b&query=${testoRicercaUtente}`, { params: { page: ++page } })
          totalPages = res.total_pages;
          arrayFilmsTVseries = arrayFilmsTVseries.concat(res.results);
        } while (page < totalPages && page < totalPagesMax)

        console.log(arrayFilmsTVseries, totalPages)

      } else { /* if user DID NOT search something */
        console.log('barra di ricerca vuota')
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
