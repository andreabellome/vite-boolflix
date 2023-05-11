<script>
import { store } from '../store'

export default {
    name: "FilmCard",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="debug flex flex-dir-row just-cont-evenly flex-wrap">

        <div v-for="(elem, index) in store.arrayFilmsTVseries" class="card mb-3 mt-3 hoverable"
            style="width: calc(100% / 6 - 10px); position: relative;">
            <img :src="elem.poster_path" class="card-img-top">

            <div class="style-hover-card">
                <div class="col-white">
                    <span class="col-white text-bold">Titolo</span>: {{ elem.title }} <br>
                    <span class="col-white text-bold">Titolo originale</span>: {{ elem.original_title }} <br>
                    <span class="col-white text-bold">Voto</span>:

                    <div v-if="elem.vote_average == false" class="disp-inline-block">
                        <i class="fa-solid fa-star-half col-white mr-5"></i>
                    </div>
                    <div v-else class=" disp-inline-block">
                        <i v-for="(idx) in elem.vote_average" class="fa-solid fa-star col-white mr-5"></i>
                    </div> <br>
                    <span class="col-white text-bold">Overview</span>: {{ elem.overview }}
                    <br>
                </div>
            </div>

        </div>



    </div>
</template>

<style lang="scss">
.style-hover-card {

    position: absolute;
    width: 100%;
    height: 100%;
    color: white;
    padding: 5px;

    display: none;

    background-color: rgba(27, 27, 27, 0.9);

}

.hoverable:hover>.style-hover-card {
    display: block;
    overflow-y: auto;
}

.hoverable:hover>.style-hover-card::-webkit-scrollbar {
    width: 5px;
}

.hoverable:hover>.style-hover-card::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
}

.hoverable:hover>.style-hover-card::-webkit-scrollbar-thumb {
    background: rgb(192, 192, 192);
    border-radius: 10px;
}

.hoverable:hover>.style-hover-card::-webkit-scrollbar-thumb:hover {
    background: rgb(192, 192, 192);
}
</style>