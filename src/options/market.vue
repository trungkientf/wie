<template>
    <div class="flex">
      <div class="grid grid-cols-4 w-1/2 inline-block float-left mx-4 my-8 row-gap-2">
        <div class="text-left">{{ market[0].Name }}</div>
        <div class="text-right">{{ market[0].Price }}</div>
        <div class="text-right">{{ market[0].Change }}</div>
        <div class="text-right">{{ market[0].PerChange }}</div>
        <div class="text-left">{{ market[1].Name }}</div>
        <div class="text-right">{{ market[1].Price }}</div>
        <div class="text-right">{{ market[1].Change }}</div>
        <div class="text-right">{{ market[1].PerChange }}</div>
        <div class="text-left">{{ market[3].Name }}</div>
        <div class="text-right">{{ market[3].Price }}</div>
        <div class="text-right">{{ market[3].Change }}</div>
        <div class="text-right">{{ market[3].PerChange }}</div>
        <div class="text-left">{{ market[4].Name }}</div>
        <div class="text-right">{{ market[4].Price }}</div>
        <div class="text-right">{{ market[4].Change }}</div>
        <div class="text-right">{{ market[4].PerChange }}</div>
        <div class="text-left">{{ market[5].Name }}</div>
        <div class="col-span-3 text-right" >{{ market[5].Price }}USD ~ {{market[6].Price}}trđ</div>
      </div>
      <div class= "inline-block w-1/2 float-right"><iframe id="chart-vnindex" :src="'https://m.cophieu68.vn/embedded/chart_r.php?id=^vnindex'" width="300px" height="170px" frameborder="0"></iframe></div>
    </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'Market',
    data: () => ({
      market: []
    }),
    computed: {
    },
    created () {
      axios.get('https://finance.vietstock.vn/data/getmarketprice?type=2')
      .then(res => {this.market = res.data})
      setInterval(() => {axios.get('https://finance.vietstock.vn/data/getmarketprice?type=2')
      .then(res => {this.market = res.data})},5000)
      setInterval(() => {document.getElementById('chart-vnindex').setAttribute('src','https://m.cophieu68.vn/embedded/chart_r.php?id=^vnindex')},20000)
    },
    mounted () {
    },
    methods: {
    }
  }
</script>
<style>
</style>