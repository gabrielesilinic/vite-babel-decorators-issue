<template>
    <div>
        <InfoDisplay/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, toNative } from 'vue-facing-decorator';
    import InfoDisplay from '@/components/InfoDisplay.vue';
    @Component({
        components:{
            InfoDisplay
        }
    })
    class VuxboxView extends Vue {
        
    }
    export default toNative(VuxboxView);
</script>

<style scoped>

</style>