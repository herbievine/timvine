<template>
    <Navigation />
    <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// @ts-ignore
import Navigation from '@/modules/Navigation.vue'

export default defineComponent({
    name: 'App',
    components: {
        Navigation
    }
})
</script>

<style lang="scss">
@import 'main';
</style>
