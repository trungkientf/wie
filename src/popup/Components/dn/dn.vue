<template>
    <div>
        <div class="flex-initial -mt-4">
            <div class="inline-block dn-name text-xl w-4/5 p-4">{{mack.ten}}</div>
            <div class="inline-block dn-btn block w-1/5 my-auto float-right">
                <a target="_blank" :href="'https://wichart.vn/mychart?mack='+mack.mack"><button class="bg-blue-600 hover:bg-blue-700 text-white p-2 mx-4 mt-3 w-24 rounded-full shadow-lg hover:shadow-xs text-sm inline-block" ><i class="fe fe-line-chart mr-1"></i> Wichart</button></a>
            </div>
        </div>
        <div class="block h-24 bg-gray-200 shadow-inner "></div>
        <div class="text-center">
          <div @click="setActive(1)" :class="(activeTab == 1)?'bg-blue-100 text-blue-500 font-semibold':'text-gray-500 font-medium'" class="inline-block text-base  btn-nav mx-2 my-3 py-2 px-4">Tổng quan</div>
          <div @click="setActive(2)" :class="(activeTab == 2)?'bg-blue-100 text-blue-500 font-semibold':'text-gray-500 font-medium'" class="inline-block text-base  btn-nav mx-2 my-3 py-2 px-4">Hồ sơ</div>
          <div @click="setActive(3)" :class="(activeTab == 3)?'bg-blue-100 text-blue-500 font-semibold':'text-gray-500 font-medium'" class="inline-block text-base  btn-nav mx-2 my-3 py-2 px-4">Tin tức</div>
          <div @click="setActive(4)" :class="(activeTab == 4)?'bg-blue-100 text-blue-500 font-semibold':'text-gray-500 font-medium'" class="inline-block text-base  btn-nav mx-2 my-3 py-2 px-4">Ghi chú</div>
          <div @click="setActive(5)" :class="(activeTab == 5)?'bg-blue-100 text-blue-500 font-semibold':'text-gray-500 font-medium'" class="inline-block text-base  btn-nav mx-2 my-3 py-2 px-4">PTKT</div>
        </div>
        <div v-if="0" class="my-2">
            <iframe :class="(activeTab == 1)?'':'hidden'" src="https://mkw.vndirect.com.vn/leader_lagger?index=VNINDEX&size=10&lang=vi" width="640px" height="400px" frameborder="0"></iframe>
            <iframe :class="(activeTab == 2)?'':'hidden'" src="https://mkw.vndirect.com.vn/liquidity?index=VNINDEX&lang=vi" width="640px" height="400px" frameborder="0"></iframe>
            <div class="text-center">
              <div class="inline-block cursor-pointer m-4 text-gray-600 hover:text-gray-800 text-base underline"><i class="fe fe-link-external mx-1"></i> Xem kích thước lớn</div>
            </div>
            <iframe :class="(activeTab == 5)?'':'hidden'" :src="'https://dchart.vndirect.com.vn/?language=vi&symbol='+mack.mack+'&timeframe=D'" width="640px" height="420px" frameborder="0" style="border-width: 2px; border-style: solid; border-color: #cdcdcd54; border-radius: 0.25rem"></iframe>
        </div>
        <PTKT v-if="activeTab == 5" :mack="mack" />
        <img v-if="true" class="w-24 mx-6 my-4" :src="'https://finance.vietstock.vn/image/'+mack.mack" :alt="mack.mack" >
        <iframe v-if="false" v-resize="{ log: true }" width="640px" :src="'https://wichart.vn/tintuc/'+mack.mack" frameborder="0" scrolling="yes" ></iframe>
      
    </div>
</template>
<script>
  import PTKT from './ptkt.vue'
  export default {
    name: 'Dn',
    components: {
      PTKT
    },
    props: { mack:Object },
    data: () => ({
      activeTab: 5,
    }),
    computed: {
    },
    created () {
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