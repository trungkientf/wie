<template>
    <div class="my-2">
        <div class="text-center">
            <div class="inline-block cursor-pointer m-4 text-gray-600 hover:text-gray-800 text-base underline"><i class="fe fe-link-external mx-1"></i> Xem kích thước lớn</div>
        </div>
        <iframe :src="'https://dchart.vndirect.com.vn/?language=vi&symbol='+mack.mack+'&timeframe=D'" width="640px" height="420px" frameborder="0" style="border-width: 2px; border-style: solid; border-color: #cdcdcd54; border-radius: 0.25rem"></iframe>
    </div>
</template>

<script>
export default {
    name: 'PTKT',
    props: {mack:Object},
    data: () => ({

    }),
    methods: {

    }

}
</script>

<style>

</style>