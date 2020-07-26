<template>
  <div class="container mx-auto">
    <Market />
    <div class="v-suggestions bg-white -mt-12" :class="(listCK.length === 1 || marketshow == true)?'rounded-main':''">
        <input class="input rounded-md shadow-xl bg-gray-200 text-gray-800 completor-input -mt-20 shadow-inner" v-model="val" v-on:keyup.enter="submitkq" type="text" placeholder="Nhập mã chứng khoán" id="searchCK">
        <a href="https://wichart.vn" target="_blank"><img src="/images/wi.svg" class="wi-icon" alt=""></a>
        <div class="inline-block text-base marketwatch-tg font-medium text-blue-700 hover:text-blue-800" @click="changeMV" v-if="marketshow == true"><svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="inline-block mb-1"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> <span class="">Thông tin thị trường</span></div>
        <div class="inline-block text-base marketwatch-tg font-medium text-gray-500 hover:text-gray-600" @click="changeMV" v-if="marketshow == false"><svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="inline-block mb-1"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> <span class="">Thông tin thị trường</span></div>
      
      <div v-if="listCK.length !== 1 && marketshow == false" class="suggestions text-gray-800 -mt-6">
        <ul class="items" style="">
          <li v-for="item in listCK" @click="change(item.mack)" class="item">{{item.mack}} - {{item.ten}}</li>
        </ul>
      </div>
      <Dn v-if="listCK.length === 1 && marketshow == false" :mack="listCK[0]" />
      <MarketWatch v-if="marketshow" :mack="listCK[0]" />
    </div>
    <div v-if="0" class= "inline-block w-1/2 "><iframe id="chart-ck" :src="'https://m.cophieu68.vn/embedded/chart_r.php?id='+listCK[0].mack" width="300px" height="170px" frameborder="0"></iframe></div>
  </div>
</template>
<script>
  import axios from 'axios'
  import Market from './Components/market/market.vue'
  import Dn from './Components/dn/dn.vue'
  import MarketWatch from './Components/market/marketWatch.vue'
  export default {
    components: {
      Market,
      Dn,
      MarketWatch
    },
    data: () => ({
      dataCK: [{"mack": "AAA","ten": "CTCP Nhựa An Phát Xanh"},{"mack": "AAM","ten": "CTCP Thủy sản Mekong"},{"mack": "ABT","ten": "CTCP Xuất nhập khẩu Thủy sản Bến Tre"},{"mack": "ACC","ten": "CTCP Đầu tư và Xây dựng Bình Dương ACC"},{"mack": "ACL","ten": "CTCP Xuất Nhập Khẩu Thủy sản Cửu Long An Giang"},{"mack": "ADS","ten": "CTCP Damsan"},{"mack": "AGF","ten": "CTCP Xuất nhập khẩu Thủy sản An Giang"},{"mack": "AGM","ten": "CTCP Xuất Nhập Khẩu An Giang"},{"mack": "AMD","ten": "CTCP Đầu tư và Khoáng sản FLC Stone"},{"mack": "ANV","ten": "CTCP Nam Việt"},{"mack": "APC","ten": "CTCP Chiếu xạ An Phú"},{"mack": "ASM","ten": "CTCP Tập đoàn Sao Mai"},{"mack": "ASP","ten": "CTCP Tập đoàn Dầu khí An Pha"},{"mack": "AST","ten": "CTCP Dịch vụ Hàng không Taseco"},{"mack": "ATG","ten": "CTCP An Trường An"},{"mack": "BBC","ten": "CTCP BIBICA"},{"mack": "BCE","ten": "CTCP Xây dựng và Giao thông Bình Dương"},{"mack": "BFC","ten": "CTCP Phân bón Bình Điền"},{"mack": "BHN","ten": "Tổng CTCP Bia – Rượu – Nước giải khát Hà Nội"},{"mack": "BMC","ten": "CTCP Khoáng sản Bình Định"}],
      val: 'VNM',
      show: false,
      market: [],
      marketshow: false
    }),
    computed: {
      listCK: function () {
        if(this.val.length == 3){
          return this.dataCK.filter( item => {
            return item['mack'].toLowerCase().includes(this.val.toLowerCase())
          })
          } else {
          return this.dataCK.filter( item => {
            return (item['mack']+" "+item['ten']).toLowerCase().includes(this.val.toLowerCase())
          })
        }
      },
    },
    created () {
      axios.get('https://wichart.vn/api/danhsachchungkhoan')
      .then(res => {this.dataCK = res.data})
      axios.get('https://finance.vietstock.vn/data/getmarketprice?type=2')
      .then(res => {this.market = res.data})
      setInterval(() => {axios.get('https://finance.vietstock.vn/data/getmarketprice?type=2')
      .then(res => {this.market = res.data})},5000)
      setInterval(() => {document.getElementById('chart-ck').setAttribute('src','https://m.cophieu68.vn/embedded/chart_r.php?id='+this.listCK[0].mack)},20000)
    },
    mounted () {
      setTimeout(()=>{document.getElementById("searchCK").focus()},500);
    },
    methods: {
      change: function(maCk){
        this.val = maCk
        //this.show = true
      },
      submitkq: function(){
        this.val = this.listCK[0].mack
        //this.show = true
      },
      nhap: function(){
        document.getElementById("searchCK").focus();
      },
      changeMV: function (){
			this.marketshow = !this.marketshow
		}
    }
  }
</script>
<style>
::-webkit-scrollbar {
display: none;
}
.container{
    width: 650px;
}
.v-suggestions {
    position: relative;
    box-sizing: border-box;
    height: 500px;
}
ul.items{
}
.v-suggestions .item {
  border-bottom: solid 1px #eeeff2;
  margin-bottom: 2px;
    padding: 10px;
    padding-left: 5rem;
    cursor: pointer;
    font-size: 0.875rem;
    border-radius: 0.125rem;
    background: #fff;
}
li.item:hover {
      box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0, 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);
}
.input{
    -webkit-appearance: none;
    -webkit-box-align: center;
    align-items: center;
    display: inline-flex;
    font-size: 1rem;
    -webkit-box-pack: start;
    justify-content: flex-start;
    line-height: 2;
    padding-bottom: calc(.375em - 1px);
    padding-left: calc(.625em - 1px);
    padding-right: calc(.625em - 1px);
    padding-top: calc(.375em - 1px);
    position: relative;
    vertical-align: top;
    width: 280px;
    margin-left: 7rem;
}

textarea:focus, input:focus{
    outline: none;
}

.rounded-main{
    border-top-left-radius: 1.5rem ;
    border-top-right-radius: 1.5rem ;
}
.wi-icon {
  width: 38px;
  position: absolute;
  top: -76px;
  left: 51px;
}
.marketwatch-tg{
  position: absolute;
  top: -72px;
  left: 421px;
  cursor: pointer;
}
</style>