<template>
    <div class="block bg-gray-200 shadow-inner p-8">
        <div class="flex bg-white mx-4 rounded-lg shadow-md">
            <div class="p-4 pl-6 w-1/2">
            <div v-if="trade.ColorId == 0">
                <span :class="changeTrade" class="text-2xl mr-2 font-semibold text-orange-400">{{new Intl.NumberFormat().format(trade.LastPrice)}} <i class="fe fe-stop"></i></span>
                <span class="text-sm text-orange-400">{{new Intl.NumberFormat().format(trade.Change)}} ({{trade.PerChange}}%)</span>
            </div>
            <div v-if="trade.ColorId == -1">
                <span :class="changeTrade" class="text-2xl mr-2 font-semibold text-red-600">{{new Intl.NumberFormat().format(trade.LastPrice)}} <i class="fe fe-drop-down"></i></span>
                <span class="text-sm text-red-600">{{new Intl.NumberFormat().format(trade.Change)}} ({{trade.PerChange}}%)</span>
            </div>
            <div v-if="trade.ColorId == 1">
                <span :class="changeTrade" class="text-2xl mr-2 font-semibold text-green-700">{{new Intl.NumberFormat().format(trade.LastPrice)}} <i class="fe fe-drop-up"></i></span>
                <span class="text-sm text-green-700">{{new Intl.NumberFormat().format(trade.Change)}} ({{trade.PerChange}}%)</span>
            </div>
            <div v-if="trade.ColorId == -2">
                <span :class="changeTrade" class="text-2xl mr-2 font-semibold text-blue-400">{{new Intl.NumberFormat().format(trade.LastPrice)}} <i class="fe fe-drop-down"></i></span>
                <span class="text-sm text-blue-400">{{new Intl.NumberFormat().format(trade.Change)}} ({{trade.PerChange}}%)</span>
            </div>
            <div v-if="trade.ColorId == 2">
                <span :class="changeTrade" class="text-2xl mr-2 font-semibold text-purple-500">{{new Intl.NumberFormat().format(trade.LastPrice)}} <i class="fe fe-drop-up"></i></span>
                <span class="text-sm text-purple-500">{{new Intl.NumberFormat().format(trade.Change)}} ({{trade.PerChange}}%)</span>
            </div>
            <div>
                <span class="text-sm text-gray-700">{{formatDate(trade.TradingDate)}}</span>
                <span class="text-sm text-gray-700 ml-2 italic">({{trade.StatusName}})</span>
            </div>
            </div>
            <div class="p-4 pl-6">
                <div class="text-lg inline-block p-1 pr-0 font-bold mb-1 text-gray-800 ">{{Math.round(mack.smg)}}</div>
                <div class="text-sm inline-block font-medium">/ 100</div>
                <div class="float-right cursor-pointer mt-1 tooltip" title="Sức mạnh giá CANSLIM">
                    <svg v-if="mack.smg >= 80" viewBox="0 0 24 24" width="24" height="24" stroke="#38B2AC" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                    <svg v-if="mack.smg >=50 && mack.smg < 80" viewBox="0 0 24 24" width="24" height="24" stroke="#F6AD55" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                    <svg v-if="mack.smg < 50" viewBox="0 0 24 24" width="24" height="24" stroke="#F56565" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                </div>
                <div class="smg-progress_container">
                    <div class="smg-progress smg-progress-danger smg-progress-striped active">
                    <div v-if="mack.smg >= 80" class="bar smg-success" :style="{width: mack.smg+'%'}"></div>
                    <div v-if="mack.smg >=50 && mack.smg < 80" class="bar smg-warning" :style="{width: mack.smg+'%'}"></div>
                    <div v-if="mack.smg < 50" class="bar smg-danger" :style="{width: mack.smg+'%'}"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Status',
    props: {mack:Object,trade:Object,changeTrade:String},
    data: () => ({
    }),
    computed: {
    },
    created(){
    },
    methods: {
        formatDate: function(datecode){
            let tradingday = Math.round(datecode.slice(6,-2))
            const d = new Date(tradingday)
            const month = Math.round(d.getMonth())+1
            return d.getDate() + '/' + (month<10?'0':'') + month + '/' + d.getFullYear() + ' ' + d.getHours() +':' + (d.getMinutes()<10?'0':'') + d.getMinutes()
        }
    }
}
</script>

<style scoped>
 .smg-progress_container {
    width: 220px;
}

.smg-progress {
    overflow: hidden;
    height: 18px;
    margin-bottom: 18px;
    background-color: #EDF2F7;
    background-image: -moz-linear-gradient(top, #f5f5f5, #f9f9f9);
    background-image: -ms-linear-gradient(top, #f5f5f5, #f9f9f9);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#f5f5f5), to(#f9f9f9));
    background-image: -webkit-linear-gradient(top, #f5f5f5, #f9f9f9);
    background-image: -o-linear-gradient(top, #f5f5f5, #f9f9f9);
    background-image: linear-gradient(top, #f5f5f5, #f9f9f9);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f5f5f5', endColorstr='#f9f9f9', GradientType=0);
    -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
}

.smg-progress .bar {
    width: 0%;
    height: 18px;
    color: #ffffff;
    font-size: 12px;
    text-align: center;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    background-color: #0e90d2;
    background-image: -moz-linear-gradient(top, #149bdf, #0480be);
    background-image: -ms-linear-gradient(top, #149bdf, #0480be);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#149bdf), to(#0480be));
    background-image: -webkit-linear-gradient(top, #149bdf, #0480be);
    background-image: -o-linear-gradient(top, #149bdf, #0480be);
    background-image: linear-gradient(top, #149bdf, #0480be);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#149bdf', endColorstr='#0480be', GradientType=0);
    -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
    -moz-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: width 0.6s ease;
    -moz-transition: width 0.6s ease;
    -ms-transition: width 0.6s ease;
    -o-transition: width 0.6s ease;
    transition: width 0.6s ease;
}

.smg-progress-striped .bar {
    background-color: #89949B;
    background-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.25, rgba(255, 255, 255, 0.15)), color-stop(0.25, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(255, 255, 255, 0.15)), color-stop(0.75, rgba(255, 255, 255, 0.15)), color-stop(0.75, transparent), to(transparent));
    background-image: -webkit-linear-gradient(-45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-image: -moz-linear-gradient(-45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-image: -ms-linear-gradient(-45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-image: -o-linear-gradient(-45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-image: linear-gradient(-45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    -webkit-background-size: 40px 40px;
    -moz-background-size: 40px 40px;
    -o-background-size: 40px 40px;
    background-size: 40px 40px;
}

.smg-progress.active .bar {
    -webkit-animation: progress-bar-stripes 2s linear infinite;
    -moz-animation: progress-bar-stripes 2s linear infinite;
    animation: progress-bar-stripes 2s linear infinite;
}

.smg-progress-danger .bar {
    background-color: #89949B;
    background-image: -moz-linear-gradient(top, #89949B, #c43c35);
    background-image: -ms-linear-gradient(top, #89949B, #c43c35);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ee5f5b), to(#c43c35));
    background-image: -webkit-linear-gradient(top, #ee5f5b, #c43c35);
    background-image: -o-linear-gradient(top, #89949B, #c43c35);
    background-image: linear-gradient(top, #89949B, #c43c35);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ee5f5b', endColorstr='#c43c35', GradientType=0);
}

.smg-progress-danger.smg-progress-striped .bar {
    background-color: #38B2AC;
    background-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.25, rgba(255, 255, 255, 0.15)), color-stop(0.25, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(255, 255, 255, 0.15)), color-stop(0.75, rgba(255, 255, 255, 0.15)), color-stop(0.75, transparent), to(transparent));
    background-image: -webkit-linear-gradient(-45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-image: -moz-linear-gradient(-45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-image: -ms-linear-gradient(-45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-image: -o-linear-gradient(-45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-image: linear-gradient(-45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}

.smg-success{
    background-color: #38B2AC !important;
}
.smg-warning{
    background-color: #F6AD55 !important;
}
.smg-danger{
    background-color: #F56565 !important;
}


@-webkit-keyframes progress-bar-stripes { 
    from { background-position: 0 0 }

    to { background-position: 40px 0 }
}

@-moz-keyframes progress-bar-stripes { 
    from { background-position: 0 0 }

    to { background-position: 40px 0 }
}

@keyframes progress-bar-stripes { 
    from { background-position: 0 0 }

    to { background-position: 40px 0 }
}
.tooltip:hover:after{
  display: -webkit-flex;
  display: block;
  position: absolute;
  -webkit-justify-content: center;
  justify-content: center;
  background: #444;
  border-radius: 8px;
  color: #fff;
  content: attr(title);
  font-size: 12px;
  padding: 0.5rem;
  left: 480px;
  top: 70px;
}
.tooltip:hover:before{
  border: solid;
  border-color: #444 transparent;
  border-width: 12px 6px 0 6px;
  content: "";
  left: 549px;
  top: 98px;
  position: absolute;
}
</style>