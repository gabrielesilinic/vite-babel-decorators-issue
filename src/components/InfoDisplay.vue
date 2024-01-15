<template>
    <div>
        <span>{{ currentCount }}</span>
        <span><button @click="increment();">+</button><button @click="decrement();">-</button></span>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, toNative } from 'vue-facing-decorator';
    import { InfoStore } from '@/stores/testManagement';
    @Component
    class InfoDisplay extends Vue {
        @InfoStore.vuexNamespace.Mutation('increment') increment! : InfoStore.Increment;
        @InfoStore.vuexNamespace.Mutation('decrement') decrement! : InfoStore.Decrement;
        @InfoStore.vuexNamespace.Getter('currentCount') currentCount! : number;
        
    }
    export default toNative(InfoDisplay)
</script>

<style scoped>

</style>