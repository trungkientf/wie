<template>
    <div>
        <div class="flex-initial dn-block -mt-4">
            <div class="inline-block dn-name text-xl w-4/5 p-4">{{mack.ten}}</div>
            <div class="inline-block dn-btn block w-1/5 my-auto float-right">
                <a target="_blank" :href="'https://wichart.vn/mychart?mack='+mack.mack"><button class="bg-blue-600 hover:bg-blue-700 text-white p-2 mx-4 mt-3 w-24 rounded-full shadow-lg hover:shadow-xs text-sm inline-block" ><i class="fe fe-line-chart mr-1"></i> Wichart</button></a>
            </div>
        </div>
        <img v-if="true" class="w-24 mx-6 my-4" :src="'https://finance.vietstock.vn/image/'+mack.mack" :alt="mack.mack" >
        <iframe v-resize="{ log: true }" width="640px" :src="'https://wichart.vn/tintuc/'+mack.mack" frameborder="0" scrolling="yes" ></iframe>
      
    </div>
</template>
<script>
  export default {
    name: 'Dn',
    props: { mack:Object },
    data: () => ({
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
.dn-name{

}
.dn-btn{

}
</style>