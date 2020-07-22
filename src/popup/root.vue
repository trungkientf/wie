<template>
  <div>
    <ul v-for="item in dataCK">
      <li>{{ item.mack }}</li>
    </ul>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data: () => ({
      dataCK: []
    }),
    computed: { },
    created () { },
    mounted () {
      axios.get('https://wichart.vn/api/danhsachchungkhoan').then(res => { this.dataCK = res.data })
    },
    methods: {
    }
  }
</script>
<style>
</style>