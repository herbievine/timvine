declare module '*.vue' {
    import { defineComponent } from 'vue'
    const component: ReturnType<typeof defineComponent>
    export default component
}

import { VueRouter } from 'vue-router/types/router'

declare module 'vue/types/vue/' {
    interface Vue {
        $router: VueRouter
    }
}
