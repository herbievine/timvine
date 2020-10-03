<template>
    <div class="nav">
        <div class="tim">
            <router-link to="/">
                <img src="@/assets/logo.png" alt="Tim Vine Logo" width="140" />
            </router-link>
        </div>
        <div class="els">
            <router-link to="/about">ABOUT</router-link>
            <router-link to="/music">MUSIC</router-link>
            <a class="hover" @click="redirect">ELECTRIC DWARF</a>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Navigation.vue',
    setup() {
        const redirect = () => window.open('https://www.saltpublishing.com/products/the-electric-dwarf-9781784631727?_pos=1&_sid=8ba2ef560&_ss=r')

        return {
            redirect
        }
    }
})
</script>

<style scoped lang="scss">
@import '../main';

.nav {
    padding: 20px 40px;
    display: grid;
    height: $header;

    .hover:hover {
        cursor: pointer;
    }

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
