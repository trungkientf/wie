<template>
    <div class="pb-16">
        <iframe :src="'https://wichart.vn/wiapi/apighichumack/'+mack.mack" width="640px" height="300px" frameborder="0" ></iframe>
    </div>
</template>

<script>
export default {
    name: 'Note',
    props: {mack:Object},
    data: () => ({

    }),
    methods: {
    }

}
</script>

<style>

</style>