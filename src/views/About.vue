<template>
    <div class="about">
        <div class="biography">
            <p>
                Tim Vine is a renowned musician, known primarily as a pianist
                and keyboard player. Born in Jersey, his career is extremely
                varied. Growing up in a musical family, he was a chorister at
                St.Paul's Cathedral in London from the age of 7, where he sang
                at the marriage of Prince Charles to Lady Diana. The choir also
                made several recordings, including an album with Dame Kiri Te
                Kanawa. A music scholarship to Cranleigh School followed, then
                regular lessons and workshops at the Weekend Arts College in
                Kentish Town, mainly taught by Ian Carr. He later attended
                Berklee College of Music in Boston, USA, with personal
                sponsorship from Phil Collins and a scholarship. He left the
                degree course after a few months however to embark on a busy
                recording and touring schedule with many well-known Artists, the
                first big break was with Blue Note Records' Us3 with who he
                became Musical Director.
                <br />
                He has remixed many tracks in the studio including for Beyonce,
                Simply Red, Sia, Moloko, and Anastasia. There have been numerous
                TV appearances, and thousands of gigs ranging from Central Park
                to Buckingham Palace, Madison Square Gardens to Hollywood Bowl,
                Glastonbury Festival to Ronnie Scott's Jazz Club, Indonesia to
                Zimbabwe to Hawaii, Mt Fuji Jazz Festival to the Royal Albert
                Hall. Tim now lives between Paris and London, and has written
                the music for 'The Musical of Dorian Gray', as well as appearing
                in the short film 'Jet-Pack Willy', the video just to the right
                below.
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'About'
})
</script>

<style scoped lang="scss">
@import '../main.scss';

.about {
    width: 100%;
    height: calc(100vh - 58px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    & .biography {
        width: 90%;
        margin-top: 70px;
        max-width: 600px;

        & p {
            text-align: justify;
        }
    }
}
</style>
