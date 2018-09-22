<template>
    <div class="sections">
        <section class="introduce">
            <a name="introduce" class="anchor">Introduce</a>
            <div class="big">introduce</div>
        </section>

        <section class="activities">
            <a name="activities" class="anchor">Activities</a>
            <div class="big">activities</div>
        </section>

        <section class="social_impacts">
            <a name="social_impacts" class="anchor">Social Impacts</a>
            <div class="big">social_impacts</div>
        </section>

        <section class="partners">
            <a name="partners" class="anchor">Partners</a>
            <div class="big">partners</div>
        </section>

        <section class="join_us">
            <a name="join_us" class="anchor">Join Us</a>
            <div class="big">join_us</div>
        </section>
    </div>
</template>

<script>
    import Menu from '../Menu.vue';

    export default {
        components: { Menu },

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
