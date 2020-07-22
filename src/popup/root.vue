<template>
  <div class="container">
    <div class="input-wrapper">
      <input class="search-input" name="q" type="search" placeholder="Nhập mã cổ phiếu!" autocomplete="off" autofocus="">
      <ul class="suggestions" style="display: block;">
        <li><a href="#" tabindex="-1">namecheap</a></li>
      </ul>
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
    width: 300px;
    padding: 0.3em;
}
.search-input {
    padding: 0.5em;
    width: 100%;
    -webkit-appearance: textfield;
}
.search-engines{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    margin: 0.8em 0 0 0;
}
.search-engines.with-suggestions{
    margin-top: 0;
}

.search-engines li{
    flex: 0 50%;
    width: 50%;
}
.search-engines a{
    padding: 0.5em;
    display: flex;
    text-decoration: none;
    color: #115f93;
    border-radius: 2px;
}

.search-engines a:focus {
    background: none;
    outline: 1px solid #789bb9;
    box-shadow: 0 0 2px #333;
}

.search-engines a:hover{
    background: #ddd;
}
.search-engines .node {
    display: none;
}
.search-engines img {
    vertical-align: middle;
    flex: 0 auto;
    width: 16px;
    height: 16px;
}
.search-engines .engine-name{
    padding-left: 0.5em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}


.search-engines.icons-only .engine-name{
    display: none;
}

.search-engines.icons-only li{
    flex: 0 10%;
    width: 12%;
    text-align: center;
}
.search-engines.icons-only a{
    padding: 0.5em;
    display: inline-block;
}

.input-wrapper{
    position:relative;
}

.suggestions{
    /* position: absolute; */
    padding: 0.4em;
    margin: 0;
    background: #ffffff;
    list-style-type: none;
    box-sizing: border-box;
    width: 100%;
    display: none;
}
.suggestions li.active{
    background: #eee;
    font-weight: bold;
}
.suggestions a {
    display: inline-block;
    padding: 0.4em;
    display: block;
    text-decoration: none;
    color: #333;
}
</style>