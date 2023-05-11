import { reactive } from "vue";

export const store = reactive(
    {
        arrayFilmsTVseries: [],
        testoRicerca: '',
        loadingData: false,
        posterPathDim: 'https://image.tmdb.org/t/p/w342',
        noResults: false
    }
)