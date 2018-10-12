<template>
    <div class="wrap">
        <Carousel></Carousel>
        <div class="sections">
            <section class="introduce">
                <a id="introduce" class="anchor"></a>

                <div class="clearfix">
                    <img src="../../assets/hackathon.png" class="left img">
                    <h3>Introduce</h3>
                    <p>
                        동아리 소개
                    </p>
                </div>
            </section>

            <section class="activities">
                <a id="activities" class="anchor"></a>

                <div class="clearfix">
                    <img src="../../assets/hackathon.png" class="right img">
                    <h3>Activities</h3>
                    <p>
                        동아리 활동
                    </p>
                </div>
            </section>

            <section class="social_impacts">
                <a id="social_impacts" class="anchor"></a>

                <div class="clearfix">
                    <img src="../../assets/hackathon.png" class="left img">
                    <h3>History</h3>
                    <p>
                        동아리 연혁
                    </p>
                </div>
            </section>

            <section class="partners">
                <a id="partners" class="anchor"></a>

                <div class="clearfix">
                    <img src="../../assets/hackathon.png" class="right img">
                    <h3>Partners</h3>
                    <p>
                        동이라 파트너쉽
                    </p>
                </div>
            </section>

            <section class="join_us">
                <a id="join_us" class="anchor"></a>

                <div class="clearfix">
                    <img src="../../assets/hackathon.png" class="left img">
                    <h3>Join US!</h3>
                    <p>
                        우리는 잘났어요!가입하세요!
                    </p>
                    <router-link :to="{name:'SignUp'}"><button class="button">회원가입</button></router-link>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    import Carousel from '../BootStrap/Carousel.vue';
    import Contents from './Contents.vue'

    export default {
        components: {
            Carousel,
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
    .sections {
        width: 1200px;
        margin: 0 auto;
    }

    section {
        position: relative;
        padding: 25px;
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

    section:nth-child(even) {
        background: #f7f7f7;
    }

    section h3 {
        font-size: 40px;
        line-height: 80px;
        height: 80px;
        margin: 0;
    }

    section p {
        text-align: justify;
        word-break: break-all;
        line-height: 2;
        margin: 0;
    }

    .img {
        width: 500px;
        margin-bottom: 30px;
    }

    .right {
        float: right;
        margin-left: 30px;
    }

    .left {
        float: left;
        margin-right: 30px;
    }

    .button {
        background: #059162;
        color: #fff;
        font-size: 13px;
        margin-top: 10px;
        width: 70px;
        height: 35px;
    }

</style>
