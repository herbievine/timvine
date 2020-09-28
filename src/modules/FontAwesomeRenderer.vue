<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :class="$props.class"
        :viewBox="`0 0 ${width} ${height}`"
    >
        <path fill="currentColor" :d="svgPath" />
    </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'
import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types'

export default defineComponent({
    name: 'FontAwesomeRenderer',
    props: {
        icon: {
            type: String,
            required: true
        },
        prefix: {
            type: String,
            required: true
        },
        class: String
    },
    setup(props) {
        const definition = computed(() =>
            findIconDefinition({
                prefix: props.prefix as IconPrefix,
                iconName: props.icon as IconName
            })
        )
        const width = computed(() => definition.value.icon[0])
        const height = computed(() => definition.value.icon[1])
        const svgPath = computed(() => definition.value.icon[4])

        return {
            width,
            height,
            svgPath
        }
    }
})
</script>
