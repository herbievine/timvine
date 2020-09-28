<template><div></div></template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Redirect',
    created() {
        window.open(decodeURI(this.$route.query.url as string))
    }
})
</script>
