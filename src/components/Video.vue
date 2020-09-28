<template>
    <div class="video">
        <div class="player">
            <iframe
                width="560"
                height="315"
                :src="`https://www.youtube.com/embed/${id}`"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
        <div class="description">
            <p>{{ description.name }}</p>
            <p>{{ description.location }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Global } from '@/global'

export default defineComponent({
    name: 'Video',
    props: {
        id: {
            type: Object as () => string,
            required: true
        },
        description: {
            type: Object as () => Global.VideoDescription,
            required: true
        }
    }
})
</script>

<style scoped lang="scss"></style>
