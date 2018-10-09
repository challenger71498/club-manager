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
                        모든 국민은 양심의 자유를 가진다. 모든 국민은 보건에 관하여 국가의 보호를 받는다. 국회에 제출된 법률안 기타의 의안은 회기중에 의결되지 못한 이유로 폐기되지 아니한다. 다만, 국회의원의 임기가 만료된 때에는 그러하지 아니하다.

                        여자의 근로는 특별한 보호를 받으며, 고용·임금 및 근로조건에 있어서 부당한 차별을 받지 아니한다. 대통령은 국가의 안위에 관계되는 중대한 교전상태에 있어서 국가를 보위하기 위하여 긴급한 조치가 필요하고 국회의 집회가 불가능한 때에 한하여 법률의 효력을 가지는 명령을 발할 수 있다.
                    </p>
                </div>
            </section>

            <section class="activities">
                <a id="activities" class="anchor"></a>

                <div class="clearfix">
                    <img src="../../assets/hackathon.png" class="right img">
                    <h3>Activities</h3>
                    <p>
                        모든 국민은 양심의 자유를 가진다. 모든 국민은 보건에 관하여 국가의 보호를 받는다. 국회에 제출된 법률안 기타의 의안은 회기중에 의결되지 못한 이유로 폐기되지 아니한다. 다만, 국회의원의 임기가 만료된 때에는 그러하지 아니하다.

                        여자의 근로는 특별한 보호를 받으며, 고용·임금 및 근로조건에 있어서 부당한 차별을 받지 아니한다. 대통령은 국가의 안위에 관계되는 중대한 교전상태에 있어서 국가를 보위하기 위하여 긴급한 조치가 필요하고 국회의 집회가 불가능한 때에 한하여 법률의 효력을 가지는 명령을 발할 수 있다.
                    </p>
                </div>
            </section>

            <section class="social_impacts">
                <a id="social_impacts" class="anchor"></a>

                <div class="clearfix">
                    <img src="../../assets/hackathon.png" class="left img">
                    <h3>Social Impacts</h3>
                    <p>
                        모든 국민은 양심의 자유를 가진다. 모든 국민은 보건에 관하여 국가의 보호를 받는다. 국회에 제출된 법률안 기타의 의안은 회기중에 의결되지 못한 이유로 폐기되지 아니한다. 다만, 국회의원의 임기가 만료된 때에는 그러하지 아니하다.

                        여자의 근로는 특별한 보호를 받으며, 고용·임금 및 근로조건에 있어서 부당한 차별을 받지 아니한다. 대통령은 국가의 안위에 관계되는 중대한 교전상태에 있어서 국가를 보위하기 위하여 긴급한 조치가 필요하고 국회의 집회가 불가능한 때에 한하여 법률의 효력을 가지는 명령을 발할 수 있다.
                    </p>
                </div>
            </section>

            <section class="partners">
                <a id="partners" class="anchor"></a>

                <div class="clearfix">
                    <img src="../../assets/hackathon.png" class="right img">
                    <h3>Partners</h3>
                    <p>
                        모든 국민은 양심의 자유를 가진다. 모든 국민은 보건에 관하여 국가의 보호를 받는다. 국회에 제출된 법률안 기타의 의안은 회기중에 의결되지 못한 이유로 폐기되지 아니한다. 다만, 국회의원의 임기가 만료된 때에는 그러하지 아니하다.

                        여자의 근로는 특별한 보호를 받으며, 고용·임금 및 근로조건에 있어서 부당한 차별을 받지 아니한다. 대통령은 국가의 안위에 관계되는 중대한 교전상태에 있어서 국가를 보위하기 위하여 긴급한 조치가 필요하고 국회의 집회가 불가능한 때에 한하여 법률의 효력을 가지는 명령을 발할 수 있다.
                    </p>
                </div>
            </section>

            <section class="join_us">
                <a id="join_us" class="anchor"></a>

                <div class="clearfix">
                    <img src="../../assets/hackathon.png" class="left img">
                    <h3>Join US!</h3>
                    <p>
                        모든 국민은 양심의 자유를 가진다. 모든 국민은 보건에 관하여 국가의 보호를 받는다. 국회에 제출된 법률안 기타의 의안은 회기중에 의결되지 못한 이유로 폐기되지 아니한다. 다만, 국회의원의 임기가 만료된 때에는 그러하지 아니하다.

                        여자의 근로는 특별한 보호를 받으며, 고용·임금 및 근로조건에 있어서 부당한 차별을 받지 아니한다. 대통령은 국가의 안위에 관계되는 중대한 교전상태에 있어서 국가를 보위하기 위하여 긴급한 조치가 필요하고 국회의 집회가 불가능한 때에 한하여 법률의 효력을 가지는 명령을 발할 수 있다.
                    </p>
                    <router-link to="signup"><button class="button">회원가입</button></router-link>
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
