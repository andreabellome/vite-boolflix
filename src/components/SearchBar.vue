<script>
import { store } from '../store'

export default {
    name: "SearchBar",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="bg-dark flex flex-dir-row just-cont-between align-it-center padd-10">

        <div class="font-size-25 col-super-dark-red text-uppercase">
            Boolflix
        </div>

        <div>
            <input type="text" placeholder="Ricerca film o serie tv..." v-model="store.testoRicerca" class="padd-5"
                id="ricercaFilmSerieTV">
            <button type="submit" @click.prevent="$emit('nomeEmit')" class="padd-5" id="buttonRicercaFilmSerieTV">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>

    </div>
</template>

<style lang="scss"></style>