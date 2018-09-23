<template>
    <div class="sections">
        <section class="introduce">
            <a name="introduce" class="anchor"></a>
            <Contents :image="content[0].image" :text="content[0].text"></Contents>
        </section>

        <section class="activities">
            <a name="activities" class="anchor"></a>
            <div class="big">activities</div>
        </section>

        <section class="social_impacts">
            <a name="social_impacts" class="anchor"></a>
            <div class="big">social_impacts</div>
        </section>

        <section class="partners">
            <a name="partners" class="anchor"></a>
            <div class="big">partners</div>
        </section>

        <section class="join_us">
            <a name="join_us" class="anchor"></a>
            <div class="big">join_us</div>
        </section>
    </div>
</template>

<script>
    import Menu from '../Menu.vue';
    import Contents from './Contents.vue'

    export default {
        components: {
            Menu,
            Contents
        },
        data() {
            return {
                content: [
                    { image: require('../../assets/hackathon.png'), text:"TEST1" }
                ]
            }
        }
    };
</script>

<style scoped>
    section {
        position: relative;
    }

    .anchor {
        position: absolute;
        top: -100px;
        opacity: 0;
        z-index: -1;
        width: 1px;
        height: 1px;
        overflow: hidden;
    }

    .big {
        height: 500px;
    }
</style>
