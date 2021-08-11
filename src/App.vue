<template>
  <div>
    <div class="flex justify-center"><img alt="App logo" class="w-96" src="/logo.png"></div>
    <div class="w-10/12 mx-auto grid lg:grid-cols-4 grid-cols-3 gap-4 my-10" data-testid="characters-list">
      <character v-for="character in characters" :key="character.id" :name="character.name" :image="character.image" />
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import Character from './components/Character/Character.vue';

export default {
  name: 'App',
  components: {
    Character
  },
  computed: {
    ...mapState(['characters'])
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
