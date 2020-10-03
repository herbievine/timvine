<template>
    <div class="video" @click="redirect">
        <div class="wrapper">
            <div class="player">
                <iframe
                    width="600"
                    height="315"
                    :src="`https://www.youtube.com/embed/${id}`"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                >
                </iframe>
            </div>
            <div class="description">
                <p>{{ description.name }}</p>
                <p>{{ description.location }}</p>
            </div>
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
    },
    setup(props) {
        const redirect = () => window.open(`https://youtu.be/${props.id}`)

        return {
            redirect
        }
    }
})
</script>

<style scoped lang="scss">
@import '../main.scss';

.video {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    & .wrapper {
        width: 90%;
        margin-top: 20px;
        max-width: 600px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        & .description {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
}
</style>
