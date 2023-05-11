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

        <div class="card mb-3 mt-3" style="width: calc(100% / 4 - 10px);">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>







    </div>
</template>

<style lang="scss">
.card-film {}
</style>