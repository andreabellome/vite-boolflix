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
      let testoRicercaUtente = store.testoRicerca;

      if (store.testoRicerca !== '') { /* if user searched something */

        testoRicercaUtente = store.testoRicerca;

        /* if the last letter is a blank space, eliminate such space */
        if (/\s/.test(testoRicercaUtente.slice(-1))) {
          testoRicercaUtente = testoRicercaUtente.slice(0, -1);
        }

      } else { /* if user DID NOT search something */
        testoRicercaUtente = 'instagram';
      }

      /* extract all the info from the API call --> MOVIES */
      do {

        let { data: res } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7b0fe496f2dadc8282a07240024e5a8b&query=${testoRicercaUtente}`, { params: { page: ++page } })
        totalPages = res.total_pages;
        store.arrayFilmsTVseries = store.arrayFilmsTVseries.concat(res.results);
      } while (page < totalPages && page < totalPagesMax)


      /* extract all the info from the API call --> SERIES */
      page = 0;
      do {

        let { data: res } = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=7b0fe496f2dadc8282a07240024e5a8b&query=${testoRicercaUtente}`, { params: { page: ++page } })
        totalPages = res.total_pages;
        store.arrayFilmsTVseries = store.arrayFilmsTVseries.concat(res.results);
      } while (page < totalPages && page < totalPagesMax)

      console.log(store.arrayFilmsTVseries)

      if (store.arrayFilmsTVseries.length == 0) {

        /* check if no results appear */
        store.noResults = true
      } else {

        /* some results have appeared */
        store.noResults = false

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

        let flagids = store.flags.map(function (idflag) {
          return idflag.flagid;
        })

        /* update film score, original title and flag */
        for (let i = 0; i < store.arrayFilmsTVseries.length; i++) {

          /* round the score and put max=5 */
          store.arrayFilmsTVseries[i].vote_average = Math.round(store.arrayFilmsTVseries[i].vote_average)
          if (store.arrayFilmsTVseries[i].vote_average > 5) {
            store.arrayFilmsTVseries[i].vote_average = 5;
          }
          if (store.arrayFilmsTVseries[i].vote_average == 0) {
            store.arrayFilmsTVseries[i].vote_average = false;
          }

          /* check if original title is the same of the title */
          if (store.arrayFilmsTVseries[i].original_title == store.arrayFilmsTVseries[i].title) {
            store.arrayFilmsTVseries[i].original_title = false;
          }

          /* check if the flags are defined in score */
          const index = flagids.indexOf(store.arrayFilmsTVseries[i].original_language)
          if (index > -1) {
            store.arrayFlags = store.arrayFlags.concat(store.flags[index]);
          } else {
            store.arrayFlags = store.arrayFlags.concat(store.flags[0]);
            store.arrayFlags[i].isthere = false;

          }
          console.log(store.arrayFlags)


        }

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
