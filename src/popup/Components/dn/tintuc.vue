<template>
<div>
    <div>
        <div class="text-base underline text-gray-800 p-2 ml-4">Tin tức mới nhất</div>
        <div class="suggestions text-gray-800">
        <ul class="items" style="">
          <a v-for="item in tintuc[0]" :href="'https://vietstock.vn/'+item.URL" target="_blank"><li class="item">{{item.Title}} ({{formatDate(item.PublishTime)}})</li></a>
        </ul>
      </div>
    </div>
    <div>
        <div class="text-base underline text-gray-800 p-2 ml-4">Kế hoạch - kết quả kinh doanh</div>
        <div class="suggestions text-gray-800">
        <ul class="items" style="">
          <a v-for="item in tintuc[1]" :href="'https://vietstock.vn/'+item.URL" target="_blank"><li class="item">{{item.Title}} ({{formatDate(item.PublishTime)}})</li></a>
        </ul>
      </div>
    </div>
    <div>
        <div class="text-base underline text-gray-800 p-2 ml-4">Giao dịch CĐ lớn - nội bộ</div>
        <div class="suggestions text-gray-800">
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
        tintuc:''
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
        }
    }
}
</script>

<style scoped>

</style>