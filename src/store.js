import { reactive } from "vue";

export const store = reactive(
    {
        arrayFilmsTVseries: [],
        arrayFlags: [],
        testoRicerca: '',
        loadingData: false,
        posterPathDim: 'https://image.tmdb.org/t/p/w342',
        noResults: false,
        flags: [{
            flagid: 'it',
            flagurl: 'https://www.crwflags.com/fotw/images/i/it.gif',
            isthere: true
        },
        {
            flagid: 'en',
            flagurl: 'https://www.crwflags.com/fotw/images/u/us.gif',
            isthere: true
        },
        {
            flagid: 'fr',
            flagurl: 'https://www.crwflags.com/fotw/images/f/fr.gif',
            isthere: true
        },
        {
            flagid: 'de',
            flagurl: 'https://www.crwflags.com/fotw/images/d/de.gif',
            isthere: true
        },
        {
            flagid: 'ru',
            flagurl: 'https://www.crwflags.com/fotw/images/r/ru.gif',
            isthere: true
        },
        {
            flagid: 'sv',
            flagurl: 'https://www.crwflags.com/fotw/images/s/se.gif',
            isthere: true
        }
        ]
    }
)