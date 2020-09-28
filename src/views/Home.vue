<template>
    <div class="home">
        <div class="image">
            <img src="@/assets/timvine2.jpg" alt="Tim Vine" draggable="false" />
        </div>
        <div class="socials">
            <div
                v-for="(social, i) in state.socials"
                :key="i"
                :class="social.id"
                @click="redirect(social.link)"
            >
                <FontAwesome
                    :icon="social.id"
                    prefix="fab"
                    width="20"
                    height="20"
                    color="#111111"
                />
                <p>{{ social.name }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
    name: 'Home',
    setup() {
        const state = reactive({
            socials: [
                {
                    id: 'spotify',
                    name: 'SPOTIFY',
                    link: 'https://spotify.com'
                },
                {
                    id: 'soundcloud',
                    name: 'SOUND CLOUD',
                    link: 'https://soundcloud.com'
                },
                {
                    id: 'twitter',
                    name: 'TWITTER',
                    link: 'https://twitter.com'
                }
            ]
        })

        const redirect = (location: string) => {
            window.open(location, '_BLANK')
        }

        return {
            state,
            redirect
        }
    }
})
</script>

<style scoped lang="scss">
@import '../main.scss';

@media only screen and (min-width: 599px) {
    // Big Screen
    .home {
        width: 100%;
        height: calc(100vh - 58px);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        & .image {
            margin-top: 70px;

            & img {
                width: 600px;
                height: 600px;
            }
        }

        & .socials {
            margin-top: 40px;
            width: 350px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            & div {
                display: flex;
                justify-content: flex-start;

                &:hover {
                    cursor: pointer;
                }

                & p {
                    margin-top: 3px;
                }

                & svg {
                    margin-right: 10px;
                }
            }
        }
    }
}

@media only screen and (max-width: 600px) {
    // Small Screen
    .home {
        width: 100%;
        height: calc(100vh - 58px);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        & .image {
            margin-top: 70px;

            & img {
                width: 90vw;
                height: 90vw;
            }
        }

        & .socials {
            margin-top: 40px;
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;

            & div {
                margin-top: 10px;
                display: flex;
                justify-content: flex-start;

                &:hover {
                    cursor: pointer;
                }

                & p {
                    margin-top: 3px;
                }

                & svg {
                    margin-right: 10px;
                }
            }
        }
    }
}

.spotify:hover {
    & p {
        color: $spotify;
    }

    & svg {
        color: $spotify;
    }
}

.soundcloud:hover {
    & p {
        color: $sound-cloud;
    }

    & svg {
        color: $sound-cloud;
    }
}

.twitter:hover {
    & p {
        color: $twitter;
    }

    & svg {
        color: $twitter;
    }
}
</style>
