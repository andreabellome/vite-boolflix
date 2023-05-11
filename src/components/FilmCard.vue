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



        <!-- <div v-for="(elem, index) in store.arrayFilmsTVseries">
            {{ store.arrayFilmsTVseries[0].poster_path }}
        </div> -->

        <div v-for="(elem, index) in store.arrayFilmsTVseries" class="card mb-3 mt-3" style="width: calc(100% / 6 - 10px);">
            <img :src="elem.poster_path" class="card-img-top">
        </div>







    </div>
</template>

<style lang="scss"></style>