<template>
    <div class="bg-market pt-2">
        <div class="flex bg-white mx-auto mt-4 mb-8 p-4 pb-16 w-11/12 rounded-lg shadow-2xl">
            <div class="market-price grid grid-cols-4 w-1/2 inline-block float-left py-6 row-gap-2">
                <div class="text-sm font-medium text-left">{{ market[0].Name }}</div>
                <div :class="changeVal[0]" v-if="market[0].Color == '#39ca32'" class="text-sm text-right border-green-400 text-green-700 font-medium">{{ market[0].Price }}</div>
                <div :class="changeVal[0]" v-if="market[0].Color == '#F00'" class="text-sm text-right border-red-400 text-red-700 font-medium">{{ market[0].Price }}</div>
                <div :class="changeVal[0]" v-if="market[0].Color == '#39ca32'" class="text-sm text-right border-green-400 text-green-700 font-medium">{{ market[0].Change }} <i class="fe fe-drop-up"></i></div>
                <div :class="changeVal[0]" v-if="market[0].Color == '#F00'" class="text-sm text-right border-red-400 text-red-700 font-medium">{{ market[0].Change }} <i class="fe fe-drop-down"></i></div>
                <div :class="changeVal[0]" v-if="market[0].Color == '#39ca32'" class="text-sm text-right border-green-400 text-green-700 font-medium">{{ market[0].PerChange }}%</div>
                <div :class="changeVal[0]" v-if="market[0].Color == '#F00'" class="text-sm text-right border-red-400 text-red-700 font-medium">{{ market[0].PerChange }}%</div>
                <div class="text-sm font-medium text-left">{{ market[1].Name }}</div>
                <div :class="changeVal[0]" v-if="market[1].Color == '#39ca32'" class="text-sm text-right border-green-400 text-green-700 font-medium">{{ market[1].Price }}</div>
                <div :class="changeVal[0]" v-if="market[1].Color == '#F00'" class="text-sm text-right border-red-400 text-red-700 font-medium">{{ market[1].Price }}</div>
                <div :class="changeVal[0]" v-if="market[1].Color == '#39ca32'" class="text-sm text-right border-green-400 text-green-700 font-medium">{{ market[1].Change }} <i class="fe fe-drop-up"></i></div>
                <div :class="changeVal[0]" v-if="market[1].Color == '#F00'" class="text-sm text-right border-red-400 text-red-700 font-medium">{{ market[1].Change }} <i class="fe fe-drop-down"></i></div>
                <div :class="changeVal[0]" v-if="market[1].Color == '#39ca32'" class="text-sm text-right border-green-400 text-green-700 font-medium">{{ market[1].PerChange }}%</div>
                <div :class="changeVal[0]" v-if="market[1].Color == '#F00'" class="text-sm text-right border-red-400 text-red-700 font-medium">{{ market[1].PerChange }}%</div>
                <div class="text-sm font-medium text-left">{{ market[3].Name }}</div>
                <div :class="changeVal[0]" v-if="market[3].Color == '#39ca32'" class="text-sm text-right border-green-400 text-green-700 font-medium">{{ market[3].Price }}</div>
                <div :class="changeVal[0]" v-if="market[3].Color == '#F00'" class="text-sm text-right border-red-400 text-red-700 font-medium">{{ market[3].Price }}</div>
                <div :class="changeVal[0]" v-if="market[3].Color == '#39ca32'" class="text-sm text-right border-green-400 text-green-700 font-medium">{{ market[3].Change }} <i class="fe fe-drop-up"></i></div>
                <div :class="changeVal[0]" v-if="market[3].Color == '#F00'" class="text-sm text-right border-red-400 text-red-700 font-medium">{{ market[3].Change }} <i class="fe fe-drop-down"></i></div>
                <div :class="changeVal[0]" v-if="market[3].Color == '#39ca32'" class="text-sm text-right border-green-400 text-green-700 font-medium">{{ market[3].PerChange }}%</div>
                <div :class="changeVal[0]" v-if="market[3].Color == '#F00'" class="text-sm text-right border-red-400 text-red-700 font-medium">{{ market[3].PerChange }}%</div>
                <div class="text-sm font-medium text-left">{{ market[4].Name }}</div>
                <div :class="changeVal[0]" v-if="market[4].Color == '#39ca32'" class="text-sm text-right border-green-400 text-green-700 font-medium">{{ market[4].Price }}</div>
                <div :class="changeVal[0]" v-if="market[4].Color == '#F00'" class="text-sm text-right border-red-400 text-red-700 font-medium">{{ market[4].Price }}</div>
                <div :class="changeVal[0]" v-if="market[4].Color == '#39ca32'" class="text-sm text-right border-green-400 text-green-700 font-medium">{{ market[4].Change }} <i class="fe fe-drop-up"></i></div>
                <div :class="changeVal[0]" v-if="market[4].Color == '#F00'" class="text-sm text-right border-red-400 text-red-700 font-medium">{{ market[4].Change }} <i class="fe fe-drop-down"></i></div>
                <div :class="changeVal[0]" v-if="market[4].Color == '#39ca32'" class="text-sm text-right border-green-400 text-green-700 font-medium">{{ market[4].PerChange }}%</div>
                <div :class="changeVal[0]" v-if="market[4].Color == '#F00'" class="text-sm text-right border-red-400 text-red-700 font-medium">{{ market[4].PerChange }}%</div>
                <div class="text-sm font-medium text-left">Spot Gold</div>
                <div :class="changeVal[0]" v-if="market[6].Color == '#39ca32'" class="text-sm text-right border-green-400 text-green-700 font-medium col-span-3" >{{ market[6].Price }} USD ~ {{((market[5].Price/1000000)).toFixed(2)}} trđ <i class="fe fe-drop-up"></i></div>
                <div :class="changeVal[0]" v-if="market[6].Color == '#F00'" class="text-sm text-right border-red-400 text-red-700 font-medium col-span-3" >{{ market[6].Price }} USD ~ {{((market[5].Price/1000000)).toFixed(2)}} trđ <i class="fe fe-drop-down"></i></div>
            </div>
            <div class= "market-chart inline-block float-right"><iframe id="chart-vnindex" :src="'https://m.cophieu68.vn/embedded/chart_r.php?id=^vnindex'" width="270px" height="170px" frameborder="0"></iframe></div>
        </div>
    </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'Market',
    data: () => ({
      market: [],
      changeVal: ['', '', '', '', '', '', '']
    }),
    computed: {
    },
    created () {
      axios.get('https://finance.vietstock.vn/data/getmarketprice?type=2')
      .then(res => {this.market = res.data})
      setInterval(() => {axios.get('https://finance.vietstock.vn/data/getmarketprice?type=2')
      .then(res => {
        if (res.data[0].Change == this.market[0].Change){this.changeVal[0] = ''} else if (res.data[0].Change > this.market[0].Change) {this.changeVal[0] = 'bg-green-100'} else {this.changeVal[0] = 'bg-red-100'}
        if (res.data[1].Change == this.market[1].Change){this.changeVal[1] = ''} else if (res.data[1].Change > this.market[1].Change) {this.changeVal[1] = 'bg-green-100'} else {this.changeVal[1] = 'bg-red-100'}
        if (res.data[3].Change == this.market[3].Change){this.changeVal[3] = ''} else if (res.data[3].Change > this.market[3].Change) {this.changeVal[3] = 'bg-green-100'} else {this.changeVal[3] = 'bg-red-100'}
        if (res.data[4].Change == this.market[4].Change){this.changeVal[4] = ''} else if (res.data[4].Change > this.market[4].Change) {this.changeVal[4] = 'bg-green-100'} else {this.changeVal[4] = 'bg-red-100'}
        if (res.data[6].Change == this.market[6].Change){this.changeVal[6] = ''} else if (res.data[6].Change > this.market[6].Change) {this.changeVal[6] = 'bg-green-100'} else {this.changeVal[6] = 'bg-red-100'}
        this.market = res.data
      })},2000)
      setInterval(() => {document.getElementById('chart-vnindex').setAttribute('src','https://m.cophieu68.vn/embedded/chart_r.php?id=^vnindex')},20000)
    },
    mounted () {
    },
    methods: {
    }
  }
</script>
<style>
.bg-market {
    background-image: url("/images/bg.svg");
    height: 360px;
    background-size: cover;
    background-position: center center;
}
.market-chart{
    width:264px
}
.market-price{
    width: 300px
}
</style>