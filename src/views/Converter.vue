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
                <v-col class="px-1" cols="9">
                  <v-text-field @input="convert" placeholder="Ввод"  v-model="calc" ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="5">
              <v-row no-gutters>
                <v-col class="px-1" cols="9">
                  <v-text-field v-model="result" placeholder="Вывод"  type="number" readonly></v-text-field>
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
      const calc = this.calc
      const value = calc.replace(/[^0-9,\s]/g,"")
      const valute = calc.replace(/[^a-zA-Z]+/g,'').toUpperCase()

      let firstValute = this.valutes[valute.split('IN')[0]] ?? defaultValute,
          firstValuteValue = firstValute.Value * Number(value),
          firstValuteNominal = firstValute.Nominal
     
      let secondValute = this.valutes[valute.split('IN')[1]] ?? defaultValute,
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