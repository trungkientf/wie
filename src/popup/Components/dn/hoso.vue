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
    <div class="rounded-lg mx-auto mt-8 mb-6 bg-gray-200 text-center shadow-inner " style="width:16.25rem">
        <div @click="setActive(1)" :class="(activeTabHS == 1)?'text-white bg-blue-600':'text-blue-600'" class="text-base cursor-pointer py-1 px-4 w-32 rounded-lg inline-block">Cổ đông lớn</div>
        <div @click="setActive(2)" :class="(activeTabHS == 1)?'text-blue-600':'text-white bg-blue-600'" class="text-base cursor-pointer py-1 px-4 w-32 rounded-lg inline-block">Ban lãnh đạo</div>
    </div>
    <div class="">
    <div :class="(activeTabHS == 1)?'':'hidden'" class="mb-6">
        <iframe :src="'https://wichart.vn/codong/'+mack.mack" width="640px" height="290px" frameborder="0"></iframe>
    </div>
    <div :class="(activeTabHS == 2)?'':'hidden'" class="mb-6">
        <iframe :src="'https://wichart.vn/banlanhdao/'+mack.mack" width="640px" height="300px" frameborder="0"></iframe>
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