<template>
    <div class="nav">
        <div class="tim">
            <router-link to="/">TIM VINE</router-link>
        </div>
        <div class="els">
            <router-link to="/about">ABOUT</router-link>
            <router-link to="/music">MUSIC</router-link>
            <router-link to="/">ELECTRIC DWARF</router-link>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Navigation.vue',
})
</script>

<style scoped lang="scss">
@import '../main';

.nav {
    padding: 20px 40px;
    display: grid;

    @media only screen and (min-width: 599px) {
        // Big Screen
        grid-template-columns: repeat(2, 277px);
        justify-content: space-between;

        & .els {
            & a:not(:last-child) {
                margin-right: 50px;
            }
        }
    }

    @media only screen and (max-width: 600px) {
        // Small Screen

        & .tim {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        & .els {
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
}
</style>
