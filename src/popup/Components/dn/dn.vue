<template>
    <div>
        <div class="flex-initial -mt-4">
            <div class="inline-block dn-name text-xl w-4/5 p-4">{{mack.ten}}</div>
            <div class="inline-block dn-btn block w-1/5 my-auto float-right">
                <a target="_blank" :href="'https://wichart.vn/mychart?mack='+mack.mack"><button class="bg-blue-600 hover:bg-blue-700 text-white p-2 mx-4 mt-3 w-24 rounded-full shadow-lg hover:shadow-xs text-sm inline-block" ><i class="fe fe-line-chart mr-1"></i> Wichart</button></a>
            </div>
        </div>
        <Status  :mack="mack" :trade="trade" :changeTrade="changeTrade" />
        <div class="text-center">
          <div @click="setActive(1)" :class="(activeTab == 1)?'bg-blue-100 text-blue-500 font-semibold':'text-gray-500 font-medium'" class="inline-block text-base  btn-nav mx-2 my-3 py-2 px-4 hover:text-blue-300">Tổng quan</div>
          <div @click="setActive(2)" :class="(activeTab == 2)?'bg-blue-100 text-blue-500 font-semibold':'text-gray-500 font-medium'" class="inline-block text-base  btn-nav mx-2 my-3 py-2 px-4 hover:text-blue-300">Hồ sơ</div>
          <div @click="setActive(3)" :class="(activeTab == 3)?'bg-blue-100 text-blue-500 font-semibold':'text-gray-500 font-medium'" class="inline-block text-base  btn-nav mx-2 my-3 py-2 px-4 hover:text-blue-300">Tin tức</div>
          <div @click="setActive(4)" :class="(activeTab == 4)?'bg-blue-100 text-blue-500 font-semibold':'text-gray-500 font-medium'" class="inline-block text-base  btn-nav mx-2 my-3 py-2 px-4 hover:text-blue-300">Ghi chú</div>
          <div @click="setActive(5)" :class="(activeTab == 5)?'bg-blue-100 text-blue-500 font-semibold':'text-gray-500 font-medium'" class="inline-block text-base  btn-nav mx-2 my-3 py-2 px-4 hover:text-blue-300">PTKT</div>
        </div>
        <Tongquan v-if="activeTab == 1" :mack="mack" :trade="trade" />
        <Hoso v-if="activeTab == 2" :mack="mack" />
        <Tintuc v-if="activeTab == 3" :mack="mack" />
        <Note v-if="activeTab == 4" :mack="mack" />
        <PTKT v-if="activeTab == 5" :mack="mack" />
      
    </div>
</template>
<script>
  import Axios from 'axios'
  import PTKT from './ptkt.vue'
  import Status from './status.vue'
  import Tongquan from './tongquan.vue'
  import Hoso from './hoso.vue'
  import Tintuc from './tintuc.vue'
  import Note from './note.vue'
  export default {
    name: 'Dn',
    components: {
      PTKT,
      Status,
      Tongquan,
      Hoso,
      Tintuc,
      Note
    },
    props: { mack:Object },
    data: () => ({
      activeTab: 1,
      trade: '',
      changeTrade: ''
    }),
    computed: {
    },
    created () {
        Axios.post('https://finance.vietstock.vn/company/tradinginfo',{
            code: this.mack.mack,
            s: 0
        }).then(res => { this.trade = res.data})
        setInterval(() => {
            Axios.post('https://finance.vietstock.vn/company/tradinginfo',{
            code: this.mack.mack,
            s: 0
          }).then(res => { 
            if (res.data.Change == this.trade.Change) {this.changeTrade = ''} else if (res.data.Change > this.trade.Change) {this.changeTrade = 'bg-green-200'} else {this.changeTrade = 'bg-red-200'}
            this.trade = res.data
            })
        },6000)
    },
    mounted () {
      window.addEventListener('DOMContentLoaded', function(e) {
        var iFrame = document.getElementById( 'tintucdn' );
        iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
      } );
    },
    methods: {
        setActive: function(number){
            this.activeTab = number
        }
    }
  }
</script>
<style>

.layout-btn {
  text-align: center!important;
  padding: 1rem 0rem;
}
.btn-nav {
  border-radius: 0.8rem;
  cursor: pointer;
} 
</style>