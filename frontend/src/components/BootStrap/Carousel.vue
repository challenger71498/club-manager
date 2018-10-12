<template>
    <div class="wrap">
        <b-carousel id="carousel1"
                    style="text-shadow: 1px 1px 2px #333;"
                    controls
                    indicators
                    background="#ababab"
                    :interval="4000000"
                    img-width="1680"
                    img-height="400"
                    v-model="slide"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd">

            <b-carousel-slide>
                <div slot="img" class="slide-image">
                    <img src="../../assets/hackathon.png" alt="hackathon">
                </div>
            </b-carousel-slide>

            <b-carousel-slide>
                <div slot="img" class="slide-image">
                    <img src="../../assets/hackathon.png" alt="hackathon">
                </div>
            </b-carousel-slide>

            <b-carousel-slide>
                <div slot="img" class="slide-image">
                    <img src="../../assets/hackathon.png" alt="hackathon">
                </div>
            </b-carousel-slide>

            <b-carousel-slide>
                <div slot="img" class="slide-image">
                    <img src="../../assets/hackathon.png" alt="hackathon">
                </div>
            </b-carousel-slide>

            <b-carousel-slide>
                <div slot="img" class="slide-image">
                    <img src="../../assets/hackathon.png" alt="hackathon">
                </div>
            </b-carousel-slide>

        </b-carousel>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                slide: 0,
                sliding: null
            }
        },
        methods: {
            onSlideStart (slide) {
                this.sliding = true
            },
            onSlideEnd (slide) {
                this.sliding = false
            }
        }
    }
</script>

<style scoped>
    .wrap {
        width: 100%;
    }

    .slide-image {
        position: relative;
        width: 100%;
        height: 400px;
    }

    .slide-image img {
        width: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
</style>
<!-- carousel-1.vue -->