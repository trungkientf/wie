<template>
  <div class="container">
    <div class="v-suggestions">
        <input v-model="val" v-on:keyup.enter="submitkq" type="text" placeholder="Nhập mã chứng khoán" id="searchCK" class="input completor-input">
      <div class="suggestions">
        <ul v-for="item in listCK" class="items" style="">
          <li @click="change(item.mack)" class="item">{{item.mack}} - {{item.ten}}</li>
        </ul>
      </div>
    </div>
    <div class="layout-btn" v-if="listCK.length == 1">
      <a target="_blank" :href="'https://wichart.vn/mychart?mack='+val"><button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm" ><i class="fe fe-bar-chart"></i> Biểu đồ tài chính</button></a>
      <a target="_blank" :href="'https://wichart.vn/bieudophantich/'+val"><button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm" ><i class="fe fe-line-chart"></i> Biểu đồ kỹ thuật</button></a>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data: () => ({
      dataCK: [{"mack": "AAA","ten": "CTCP Nhựa An Phát Xanh"},{"mack": "AAM","ten": "CTCP Thủy sản Mekong"},{"mack": "ABT","ten": "CTCP Xuất nhập khẩu Thủy sản Bến Tre"},{"mack": "ACC","ten": "CTCP Đầu tư và Xây dựng Bình Dương ACC"},{"mack": "ACL","ten": "CTCP Xuất Nhập Khẩu Thủy sản Cửu Long An Giang"},{"mack": "ADS","ten": "CTCP Damsan"},{"mack": "AGF","ten": "CTCP Xuất nhập khẩu Thủy sản An Giang"},{"mack": "AGM","ten": "CTCP Xuất Nhập Khẩu An Giang"},{"mack": "AMD","ten": "CTCP Đầu tư và Khoáng sản FLC Stone"},{"mack": "ANV","ten": "CTCP Nam Việt"},{"mack": "APC","ten": "CTCP Chiếu xạ An Phú"},{"mack": "ASM","ten": "CTCP Tập đoàn Sao Mai"},{"mack": "ASP","ten": "CTCP Tập đoàn Dầu khí An Pha"},{"mack": "AST","ten": "CTCP Dịch vụ Hàng không Taseco"},{"mack": "ATG","ten": "CTCP An Trường An"},{"mack": "BBC","ten": "CTCP BIBICA"},{"mack": "BCE","ten": "CTCP Xây dựng và Giao thông Bình Dương"},{"mack": "BFC","ten": "CTCP Phân bón Bình Điền"},{"mack": "BHN","ten": "Tổng CTCP Bia – Rượu – Nước giải khát Hà Nội"},{"mack": "BMC","ten": "CTCP Khoáng sản Bình Định"}],
      message: 'người đông bến đợi thuyền xuôi ngược',
      val: '',
      show: false
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
      }
    },
    created () {
      axios.get('https://wichart.vn/api/danhsachchungkhoan')
      .then(res => {this.dataCK = res.data})
    },
    mounted () {
      document.getElementById("searchCK").focus()//,2000);
    },
    methods: {
      change: function(maCk){
        this.val = maCk
        //this.show = true
      },
      submitkq: function(){
        this.val = this.listCK[0].mack
        //this.show = true
      }
    }
  }
</script>
<style>
.container{
    width: 600px;
    padding: 0.3em;
}
.v-suggestions {
    position: relative;
    box-sizing: border-box;
}
.v-suggestions .items {
    list-style: none;
    border: 1px solid #eee;
    margin: 0;
    padding: 0;
    border-width: 0 1px 1px;
}
.v-suggestions .item {
    border-bottom: 1px solid #eee;
    padding: .4rem;
    cursor: pointer;
}
.input{
    -webkit-appearance: none;
    -webkit-box-align: center;
    align-items: center;
    border: 1px solid transparent;
    border-radius: 3px;
    display: inline-flex;
    font-size: 1rem;
    -webkit-box-pack: start;
    justify-content: flex-start;
    line-height: 1.5;
    padding-bottom: calc(.375em - 1px);
    padding-left: calc(.625em - 1px);
    padding-right: calc(.625em - 1px);
    padding-top: calc(.375em - 1px);
    position: relative;
    vertical-align: top;
    background-color: #fff;
    border-color: #dbdbdb;
    color: #363636;
    box-shadow: inset 0 1px 2px rgba(10,10,10,.1);
    width: 592px;
}
.layout-btn {
  text-align: center!important;
  padding: 1rem;
}
</style>