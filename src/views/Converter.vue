<template>
      <v-row>
        <v-col cols="10" md="12" lg="9" xl="6" class="bg--light mx-auto">
        <v-btn
          elevation="2"
          x-small
          @click="toVal"
        >Все Валюты</v-btn>
          <h1 class="text-center mb-4">Конвертатор валют</h1>
          <v-row justify="space-between" no-gutters>
            <v-col cols="12" md="5">
              <v-row no-gutters>
                <v-col class="px-1" cols="3">
                  <v-select @change="convert" label="Из" v-model="selected[0]" :items="countries"></v-select>
                </v-col>
                <v-col class="px-1" cols="9">
                  <v-text-field @input="convert"  v-model="calc" type="number"></v-text-field>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="5">
              <v-row no-gutters>
                <v-col class="px-1" cols="9">
                  <v-text-field v-model="result"  type="number" readonly></v-text-field>
                </v-col>
                <v-col class="px-1" cols="3">
                  <v-select @change="convert" label="В" v-model="selected[1]" :items="countries"></v-select>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      selected: ['RUB', 'USD'],
      calc: '' ,
      result: null,
    }
  },
  mounted() {
    this.$store.dispatch('fetchValutes')
  },
  methods: {
    convert() {
      let defaultValute = {
        Value: 1,
        Nominal: 1
      } 
      
      let firstValute = this.valutes[this.selected[0]] ?? defaultValute,
          firstValuteValue = firstValute.Value * Number(this.calc),
          firstValuteNominal = firstValute.Nominal

     
      let secondValute = this.valutes[this.selected[1]] ?? defaultValute,
          secondValuteValue = secondValute.Value,
          secondValuteNominal = secondValute.Nominal

      let result = (firstValuteValue / firstValuteNominal) / (secondValuteValue / secondValuteNominal)
      
      this.result = result ? Math.floor(result * 10000) / 10000 : null
    },
    toVal() {
      this.$router.push('/valutes')
    }  
  },
  computed: {
    valutes() {
      return this.$store.getters.valutes
    },
    countries() {
      return this.$store.getters.countries
    }
  }
};
</script>