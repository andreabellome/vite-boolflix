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
    <div class="flex flex-dir-row just-cont-evenly flex-wrap">

        <!-- start: div with no results found -->
        <div v-if="store.noResults == true" class="mt-20">
            <h1 class=" text-bold">
                Ups! No results found <i class="fa-regular fa-face-frown"></i>
            </h1>
        </div>
        <!-- end: div with no results found -->

        <!-- start: div with results -->
        <div v-else-if="store.noResults == false" v-for="(elem, index) in store.arrayFilmsTVseries"
            class="card mb-3 mt-3 hoverable" style="width: calc(100% / 5 - 10px); position: relative;">

            <img :src="elem.poster_path" class="card-img-top">

            <!-- start: on hover display the info -->
            <div class="style-hover-card">

                <div class="col-white">

                    <!-- start: title -->
                    <span class="col-white text-bold">Titolo: </span> {{ elem.title }} <br>
                    <!-- end: title -->

                    <!-- start: original title -->
                    <div v-if="elem.original_title == false" class="col-white"></div>
                    <div v-else class="col-white">
                        <span class="col-white text-bold">Titolo originale: </span> {{ elem.original_title }}
                    </div>
                    <!-- end: original title -->

                    <!-- start: release date -->
                    <span class="col-white text-bold">Data: </span> {{ elem.release_date }} <br>
                    <!-- end: release date -->

                    <!-- start: vote -->
                    <span class="col-white text-bold">Voto: </span>

                    <div v-if="elem.vote_average == false" class="disp-inline-block">
                        <i class="fa-solid fa-star-half col-white mr-5"></i>
                    </div>
                    <div v-else class=" disp-inline-block">
                        <i v-for="(idx) in elem.vote_average" class="fa-solid fa-star col-white mr-5"></i>
                    </div> <br>
                    <!-- end: vote -->

                    <!-- start: original language -->
                    <span class="col-white text-bold">Overview: </span> {{ elem.overview }}
                    <br>
                    <div class="col-white flex flex-dir-row">
                        <div class="col-white text-bold">
                            Original language:
                        </div>

                        <!-- use flags of (some) countries defined in score -->
                        <div v-if="store.arrayFlags[index].isthere == true" class="ml-5 width-10">
                            <img :src="store.arrayFlags[index].flagurl" alt="" class="img-fluid"
                                style="display: inline-block;">
                        </div>
                        <div v-else class="ml-5 width-10 col-white">
                            {{ elem.original_language }}
                        </div>
                        <!-- use flags of (some) countries defined in score -->

                    </div>
                    <br>
                    <!-- end: original language -->
                </div>
            </div>
            <!-- end: on hover display the info -->

        </div>
        <!-- start: div with results -->




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