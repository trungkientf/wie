<template>
<div>
    <div class="flex my-4 pb-4">
        <div class="w-1/4">
                <img class="logo-dn mx-auto my-4 mt-8 " :src="'https://finance.vietstock.vn/image/'+mack.mack" :alt="mack.mack">
            
        </div>
        <div class="w-3/4 p-2 mr-6 bg-blue-100 text-gray-800 text-xs">
            <div v-html="desDN" ></div>
        </div>
    </div>
    <div class="bg-gray-200 shadow-inner p-1">
        <div class="rounded-lg mx-auto mt-4 mb-4 bg-white text-center " style="width:16.25rem">
            <div @click="setActive(1)" :class="(activeTabHS == 1)?'text-white bg-blue-600':'text-blue-600'" class="text-base cursor-pointer py-1 px-4 w-32 rounded-lg inline-block">Cổ đông lớn</div>
            <div @click="setActive(2)" :class="(activeTabHS == 1)?'text-blue-600':'text-white bg-blue-600'" class="text-base cursor-pointer py-1 px-4 w-32 rounded-lg inline-block">Ban lãnh đạo</div>
        </div>
    </div>
    <div class="">
    <div :class="(activeTabHS == 1)?'':'hidden'" class="mb-6">
        <iframe :src="'https://wichart.vn/wiapi/apicodong/'+mack.mack" width="640px" height="300px" frameborder="0"></iframe>
    </div>
    <div :class="(activeTabHS == 2)?'':'hidden'" class="mb-6">
        <iframe :src="'https://wichart.vn/wiapi/apibanlanhdao/'+mack.mack" width="640px" height="300px" frameborder="0"></iframe>
    </div>
    </div>
</div>
</template>

<script>
import Axios from 'axios'
export default {
    name: 'Hoso',
    props: {
        mack:Object,
    },
    data: () => ({
        hosoDN: '',
        desDN: '',
        activeTabHS:1
    }),
    created() {
        Axios.post('https://finance.vietstock.vn/view',{
            name: 'ho-so-doanh-nghiep',
            code: this.mack.mack
        }).then(res => {
            this.desDN = res.data.split('<div class="padder overview-right">')[1].split('</div>')[0]
            this.hosoDN = res.data
        })
    },
    methods: {
        setActive: function(number){
            this.activeTabHS = number
        }
    }
}
</script>

<style scoped>
.logo-dn {
    max-width: 100px;
}
</style>