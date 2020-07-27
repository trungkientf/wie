<template>
<div>
    <div class=" shadow-inner border-b-2 border-gray-200 p-4">
      <div class="rounded  mx-auto bg-white text-center " style="width:491px">
          <div @click="setActive(1)" :class="(activeTab == 1)?'text-white bg-blue-500':'text-blue-500'" class="text-base rounded cursor-pointer py-1 px-4 w-40 inline-block">Tin mới</div>
          <div @click="setActive(2)" :class="(activeTab == 2)?'text-white bg-blue-500':'text-blue-500'" class="text-base rounded cursor-pointer py-1 px-4 w-40 inline-block">KQ Kinh doanh</div>
          <div @click="setActive(3)" :class="(activeTab == 3)?'text-white bg-blue-500':'text-blue-500'" class="text-base rounded cursor-pointer py-1 px-4 w-40 inline-block">GD nội bộ</div>
      </div>
    </div>
    <div>
        <div v-if="activeTab == 1" class="suggestions text-gray-800" style="min-height:300px">
        <ul class="items" style="">
          <a v-for="item in tintuc[0]" :href="'https://vietstock.vn/'+item.URL" target="_blank"><li class="item">{{item.Title}} ({{formatDate(item.PublishTime)}})</li></a>
        </ul>
      </div>
    </div>
    <div>
        <div v-if="activeTab == 2" class="suggestions text-gray-800" style="min-height:300px">
        <ul class="items" style="">
          <a v-for="item in tintuc[1]" :href="'https://vietstock.vn/'+item.URL" target="_blank"><li class="item">{{item.Title}} ({{formatDate(item.PublishTime)}})</li></a>
        </ul>
      </div>
    </div>
    <div>
        <div v-if="activeTab == 3" class="suggestions text-gray-800" style="min-height:300px">
        <ul class="items" style="">
          <a v-for="item in tintuc[4]" :href="'https://vietstock.vn/'+item.URL" target="_blank"><li class="item">{{item.Title}} ({{formatDate(item.PublishTime)}})</li></a>
        </ul>
      </div>
    </div>
</div>
</template>

<script>
import Axios from 'axios'
export default {
    name: 'Tintuc',
    props: {
        mack:Object
    },
    data: () => ({
        tintuc:'',
        activeTab:1
    }),
    created() {
        Axios.post('https://finance.vietstock.vn/data/getnewsbycode',{
            code: this.mack.mack,
            types:[-1,3,4,5,6,7],
            page: 1,
            pageSize: 5
        }).then(res => {
            this.tintuc = res.data
            console.log(this.tintuc)
        })
    },
    methods: {
        formatDate: function(datecode){
            let tradingday = Math.round(datecode.slice(6,-2))
            const d = new Date(tradingday)
            const month = Math.round(d.getMonth())+1
            return d.getDate() + '/' + (month<10?'0':'') + month + '/' + d.getFullYear()
        },
        setActive: function(number){
            this.activeTab = number
        }
    }
}
</script>

<style scoped>

</style>