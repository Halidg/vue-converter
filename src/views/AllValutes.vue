<template>
  <div class="p-6 bg-white rounded">
    <v-row justify="space-between" no-gutters>
    <h1 class="text-4xl mb-4">
      Выберите валюту: 
    </h1>
    <v-btn
      elevation="2"
      x-small
      color="primary"
      @click="toCon"
    >Конвертатор валют</v-btn>
    </v-row>
    <v-select @change="changeValute(selected)" v-model="selected" :items="countries"></v-select>
    <ul class="sm:columns-3 md:columns-4 lg:columns-6 xl:columns-7">
      <li v-for="code, name in valute" :key="name">{{name}} = {{code.toFixed(2)}}  {{selected}} </li>
    </ul>
  </div>
</template>

<script>
export default ({
  data() {
    return {
      selected: 'RUB',
    }
  },
  mounted() {
    this.$store.dispatch('fetchValutes')
    this.$store.dispatch('userSelectedValute', 'RUB')
  },
  methods: {
    changeValute(val) {
      this.$store.dispatch('userSelectedValute', val)
    },
    toCon() {
      this.$router.push('/')
    }
  },
  computed: {
    countries() {
      return this.$store.getters.countries
    },
    valute() {
      return this.$store.getters.valute
    }
  }  
})
</script>