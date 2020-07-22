<template>
  <div class="container">
    <div class="v-suggestions">
      <input type="text" placeholder="" class="input completor-input">
      <div class="suggestions">
        <ul class="items" style="">
          <li class="item">
          Namibia
          </li><li class="item">
            Panama
          </li><li class="item">
            Suriname
          </li><li class="item">
            Viet Nam
          </li>
        </ul>
      </div>
    </div>
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
.container{
    width: 400px;
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
    width: 380px;
}
</style>