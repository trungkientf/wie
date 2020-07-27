<template>
<div>
    <div class="flex my-4">
        <div class="chi-so inline-block float-left px-4 grid grid-cols-4 gap-1">
            <div class="text-sm pl-2">Th. chiếu</div>
            <div class="text-right pr-2 font-semibold text-orange-400 text-sm">{{new Intl.NumberFormat().format(trade.PriorClosePrice)}}</div>
            <div class="text-sm pl-2">KLGD</div>
            <div class="text-right pr-2 text-sm">{{new Intl.NumberFormat().format(trade.TotalVol)}}</div>
            <div class="text-sm pl-2">Giá trần</div>
            <div class="text-right pr-2 font-semibold text-purple-500 text-sm">{{new Intl.NumberFormat().format(trade.CeilingPrice)}}</div>
            <div class="text-sm pl-2">Lưu hành</div>
            <div class="text-right pr-2 text-sm">{{new Intl.NumberFormat().format(Math.round(trade.KLCPLH/1000000))}} Tr cp</div>
            <div class="text-sm pl-2">Giá sàn</div>
            <div class="text-right pr-2 font-semibold text-blue-400 text-sm">{{new Intl.NumberFormat().format(trade.FloorPrice)}}</div>
            <div class="text-sm pl-2">Vốn hóa</div>
            <div class="text-right pr-2 text-sm">{{new Intl.NumberFormat().format(Math.round(trade.MarketCapital/1000000000))}} Tỷ</div>
            <div class="text-sm pl-2">Cao nhất</div>
            <div class="text-right pr-2 text-sm">{{new Intl.NumberFormat().format(trade.HighestPrice)}}</div>
            <div class="text-sm pl-2">EPS</div>
            <div class="text-right pr-2 text-sm">{{new Intl.NumberFormat().format(trade.EPS)}}</div>
            <div class="text-sm pl-2">Thấp nhất</div>
            <div class="text-right pr-2 text-sm">{{new Intl.NumberFormat().format(trade.LowestPrice)}}</div>
            <div class="text-sm pl-2">P/E</div>
            <div class="text-right pr-2 text-sm">{{new Intl.NumberFormat().format(trade.FEPS)}} (lần)</div>
            <div class="text-sm pl-2">Giá TB</div>
            <div class="text-right pr-2 text-sm">{{new Intl.NumberFormat().format(trade.AvrPrice)}}</div>
            <div class="text-sm pl-2">PB</div>
            <div class="text-right pr-2 text-sm">{{new Intl.NumberFormat().format(trade.PB)}} (lần)</div>
        </div>
        <div class="chart-dn">
            <iframe id="chart-ck" :src="'https://m.cophieu68.vn/embedded/chart_r.php?id='+mack.mack" width="290px" height="170px" frameborder="0"></iframe>
        </div>
    </div>
    <div class="p-4">
        <div class="text-lg underline block mb-2">Thống kê giao dịch</div>
        <div class="table-auto">
            <thead>
                <tr>
                    <th class="px-2 py-1 text-sm">Ngày</th>
                    <th class="px-2 py-1 text-sm">Giá</th>
                    <th class="px-2 py-1 text-sm">Thay đổi</th>
                    <th class="px-2 py-1 text-sm">Khối lượng</th>
                    <th class="px-2 py-1 text-sm">BQ mua</th>
                    <th class="px-2 py-1 text-sm">BQ bán</th>
                    <th class="px-2 py-1 text-sm">NN mua</th>
                    <th class="px-2 py-1 text-sm">NN bán</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in tradeday.Data">
                    <td class="border-t border-b border-l text-sm px-1 py-1">{{formatDate(item.TradingDate)}}</td>
                    <td v-if="item.ColorId == 1" class="border-t font-medium text-green-700 border-b text-right text-sm px-1 py-1">{{formatNumber(item.ClosePrice)}}</td>
                    <td v-if="item.ColorId == -1" class="border-t font-medium text-red-700 border-b text-right text-sm px-1 py-1">{{formatNumber(item.ClosePrice)}}</td>
                    <td v-if="item.ColorId == 0" class="border-t font-medium text-orange-400 border-b text-right text-sm px-1 py-1">{{formatNumber(item.ClosePrice)}}</td>
                    <td v-if="item.ColorId == 2" class="border-t font-medium text-purple-500 border-b text-right text-sm px-1 py-1">{{formatNumber(item.ClosePrice)}}</td>
                    <td v-if="item.ColorId == -2" class="border-t font-medium text-blue-400 border-b text-right text-sm px-1 py-1">{{formatNumber(item.ClosePrice)}}</td>
                    <td v-if="item.ColorId == 1" class="border-t font-medium text-green-700 border-b text-right text-sm px-1 py-1">{{formatNumber(item.Change)}} ({{formatPC(item.PerChange)}}%)</td>
                    <td v-if="item.ColorId == -1" class="border-t font-medium text-red-700 border-b text-right text-sm px-1 py-1">{{formatNumber(item.Change)}} ({{formatPC(item.PerChange)}}%)</td><td v-if="item.ColorId == 2" class="border-t font-medium text-purple-500 border-b text-right text-sm px-1 py-1">{{formatNumber(item.Change)}} ({{formatPC(item.PerChange)}}%)</td><td v-if="item.ColorId == -2" class="border-t font-medium text-blue-400 border-b text-right text-sm px-1 py-1">{{formatNumber(item.Change)}} ({{formatPC(item.PerChange)}}%)</td>
                    <td v-if="item.ColorId == 0" class="border-t font-medium text-orange-400 border-b text-right text-sm px-1 py-1">{{formatNumber(item.Change)}} ({{formatPC(item.PerChange)}}%)</td>
                    <td class="border-t border-b text-right text-sm px-1 py-1">{{formatNumber(item.AdjustVolume)}}</td>
                    <td class="border-t border-b text-right text-sm px-1 py-1">{{formatNumber(Math.round(item.BuyAvg))}}</td>
                    <td class="border-t border-b text-right text-sm px-1 py-1">{{formatNumber(Math.round(item.SellAvg))}}</td>
                    <td class="border-t border-b text-right text-sm px-1 py-1">{{formatNumber(item.ForeignBuyVol)}}</td>
                    <td class="border-t border-b text-right border-r text-sm px-1 py-1">{{formatNumber(item.ForeignSellVol)}}</td>
                </tr>
            </tbody>
        </div>
    </div>
</div>
</template>

<script>
import Axios from 'axios'
export default {
    name: 'Tongquan',
    props: {
        mack:Object,
        trade:String
    },
    data: () => ({
        tradeday: ''
    }),
    created() {
        Axios.post('https://finance.vietstock.vn/data/gettradingresult',{
            Code: this.mack.mack,
            OrderBy: '',
            OrderDirection: 'desc',
            PageIndex: 1,
            PageSize: 10,
            FromDate: this.datePast(),
            ToData: this.dateNow(),
            ExportType: 'default',
            Cols: 'TKLGD,TGTGD,VHTT,BQ,GD3,TGG,TGPTG,BQM,BQB,KLGDKL,GTGDKL',
            ExchangeID: 2
        }).then(res => { this.tradeday = res.data})
    },
    methods: {
        formatNumber: function(num){
            return new Intl.NumberFormat().format(num)
        },
        formatDate: function(datecode){
            let tradingday = Math.round(datecode.slice(6,-2))
            const d = new Date(tradingday)
            const month = Math.round(d.getMonth())+1
            return d.getDate() + '/' + (month<10?'0':'') + month + '/' + d.getFullYear()
        },
        dateNow: function(){
            const date = new Date();
            const day = date.getDate();
            const month1 = date.getMonth()+1;
            let month = (month1<10?'0':'') + month1
            const year = date.getFullYear();
            return year + '-' + month + '-' + day
        },
        datePast: function(){
            const datenow = new Date()
            const date = new Date(datenow.getTime() - (7 * 24 * 60 * 60 * 1000));
            const day = date.getDate();
            const month1 = date.getMonth()+1;
            let month = (month1<10?'0':'') + month1
            const year = date.getFullYear();
            return year + '-' + month + '-' + day
        },
        formatPC: function(perchange){
            if(perchange>0){
                return '+'+perchange
            } else {
                return perchange
            }
        }

    }
}
</script>

<style scoped>
.chi-so {
    width: 55%;
}
.chart-dn {
    width: 45%;
}
</style>