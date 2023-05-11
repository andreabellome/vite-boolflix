import { reactive } from "vue";

export const store = reactive(
    {
        arrayFilmsTVseries: [],
        testoRicerca: '',
        loadingData: false,
        validLanguages: ['it', 'eng', 'fr'],
        cardsPerRow: 4
    }
)