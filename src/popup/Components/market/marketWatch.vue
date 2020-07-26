<template>
    <div>
        <div class="dn-block -mt-4">
            <div class="dn-name text-2xl text-center p-4">Thông tin thị trường</div>
        </div>
        <div class="text-center">
          <div @click="setActive(1)" :class="(activeTab == 1)?'bg-blue-100 text-blue-500 font-semibold':'text-gray-500 font-medium'" class="inline-block text-base  btn-nav mx-2 my-3 py-2 px-4">Ảnh hưởng</div>
          <div @click="setActive(2)" :class="(activeTab == 2)?'bg-blue-100 text-blue-500 font-semibold':'text-gray-500 font-medium'" class="inline-block text-base  btn-nav mx-2 my-3 py-2 px-4">Thanh Khoản</div>
          <div @click="setActive(3)" :class="(activeTab == 3)?'bg-blue-100 text-blue-500 font-semibold':'text-gray-500 font-medium'" class="inline-block text-base  btn-nav mx-2 my-3 py-2 px-4">Độ rộng</div>
        </div>
        <div class="my-2 mb-6">
            <iframe :class="(activeTab == 1)?'':'hidden'" src="https://mkw.vndirect.com.vn/leader_lagger?index=VNINDEX&size=10&lang=vi" width="640px" height="400px" frameborder="0"></iframe>
            <iframe :class="(activeTab == 2)?'':'hidden'" src="https://mkw.vndirect.com.vn/liquidity?index=VNINDEX&lang=vi" width="640px" height="400px" frameborder="0"></iframe>
            <iframe :class="(activeTab == 3)?'':'hidden'" src="https://mkw.vndirect.com.vn/gainerslosers?index=VNINDEX&lang=vi" width="640px" height="400px" frameborder="0"></iframe>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'MarketWatch',
    data: () => ({
        activeTab: 1
    }),
    computed: {
    },
    created () {
    },
    mounted () {
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
.dn-block {
    border-bottom: 2px solid #edf2f7;
}
.btn-nav {
  border-radius: 0.8rem;
  cursor: pointer;
}
</style>