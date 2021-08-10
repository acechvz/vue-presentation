<template>
  <div class="flex justify-center"><img alt="App logo" class="w-96" src="/logo.png"></div>
  <div class="w-10/12 mx-auto grid lg:grid-cols-4 grid-cols-3 gap-4 my-10">
    <character v-for="character in $store.state.characters" :key="character.id" :name="character.name" :image="character.image" />
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import character from './components/Character/Character.vue';

export default {
  name: 'App',
  components: {
    character
  },
  mounted() {
    this.getCharacters();
  },
  methods: {
    ...mapActions(['getCharacters'])
  }
}
</script>

<style>
  body {
    background-color: black;
  }
</style>
