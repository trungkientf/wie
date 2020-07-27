<template>
    <div>
        <div class="dn-block -mt-4">
            <div class="dn-name text-2xl text-center p-4">Thông tin thị trường</div>
        </div>
        <div class="text-center">
          <div @click="setActive(1)" :class="(activeTab == 1)?'bg-blue-100 text-blue-500 font-semibold':'text-gray-500 font-medium'" class="inline-block text-base hover:text-blue-400 btn-nav mx-2 my-3 py-2 px-4">Ảnh hưởng</div>
          <div @click="setActive(2)" :class="(activeTab == 2)?'bg-blue-100 text-blue-500 font-semibold':'text-gray-500 font-medium'" class="inline-block text-base hover:text-blue-400 btn-nav mx-2 my-3 py-2 px-4">Thanh Khoản</div>
          <div @click="setActive(3)" :class="(activeTab == 3)?'bg-blue-100 text-blue-500 font-semibold':'text-gray-500 font-medium'" class="inline-block text-base hover:text-blue-400 btn-nav mx-2 my-3 py-2 px-4">Độ rộng</div>
          <div @click="setActive(4)" :class="(activeTab == 4)?'bg-blue-100 text-blue-500 font-semibold':'text-gray-500 font-medium'" class="inline-block text-base hover:text-blue-400 btn-nav mx-2 my-3 py-2 px-4">Tin mới</div>
        </div>
        <div class="my-2 mb-6">
            <iframe :class="(activeTab == 1)?'':'hidden'" src="https://mkw.vndirect.com.vn/leader_lagger?index=VNINDEX&size=10&lang=vi" width="640px" height="400px" frameborder="0"></iframe>
            <iframe :class="(activeTab == 2)?'':'hidden'" src="https://mkw.vndirect.com.vn/liquidity?index=VNINDEX&lang=vi" width="640px" height="400px" frameborder="0"></iframe>
            <iframe :class="(activeTab == 3)?'':'hidden'" src="https://mkw.vndirect.com.vn/gainerslosers?index=VNINDEX&lang=vi" width="640px" height="400px" frameborder="0"></iframe>
            <div :class="(activeTab == 4)?'':'hidden'" class="suggestions text-gray-800" style="min-height:300px">
            <ul class="items border-t border-gray" style="">
              <a v-for="item in tintuc" :href="'https://vietstock.vn/'+item.URL" target="_blank"><li class="item">{{item.Title}} ({{formatDate(item.PublishTime)}})</li></a>
            </ul>
            </div>
            </div>
    </div>
</template>
<script>
import Axios from 'axios'
  export default {
    name: 'MarketWatch',
    data: () => ({
        activeTab: 1,
        tintuc: ''
    }),
    computed: {
    },
    created () {
      Axios.post('https://finance.vietstock.vn/data/headernews',{
            type:1,
            pageSize: 5
        }).then(res => {
            this.tintuc = res.data
            console.log(this.tintuc)
        })
    },
    mounted () {
    },
    methods: {
        setActive: function(number){
            this.activeTab = number
        },
        formatDate: function(datecode){
            let tradingday = Math.round(datecode.slice(6,-2))
            const d = new Date(tradingday)
            const month = Math.round(d.getMonth())+1
            return d.getDate() + '/' + (month<10?'0':'') + month + '/' + d.getFullYear()
        }
    }
  }
</script>
<style>

.layout-btn {
  text-align: center!important;
  padding: 1rem 0rem;
}
.dn-block {
    border-bottom: 2px solid #edf2f7;
}
.btn-nav {
  border-radius: 0.8rem;
  cursor: pointer;
}
</style>