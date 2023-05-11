import { reactive } from "vue";

export const store = reactive(
    {
        arrayFilmsTVseries: [],
        testoRicerca: '',
        loadingData: false,
        validLanguages: ['it', 'eng', 'fr'],
        posterPathDim: 'https://image.tmdb.org/t/p/w342',
        noResults: false
    }
)