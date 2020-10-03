<template>
    <div class="music">
        <div class="display">
            <Video
                v-for="(video, i) in state.music"
                :key="i"
                :id="video.id"
                :description="video.description"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Video from '@/components/Video.vue'
import { music as importedMusic } from '@/plugins/music'

export default defineComponent({
    name: 'Music',
    components: {
        Video
    },
    setup() {
        const state = reactive({
            music: [...importedMusic]
        })

        return {
            state
        }
    }
})
</script>

<style scoped lang="scss">
@import '../main.scss';

.music {
    width: 100%;
    height: calc(100vh - 58px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    & .display {
        width: 90%;
        margin-top: 50px;
        max-width: 600px;

        & p {
            text-align: justify;
        }
    }
}
</style>
