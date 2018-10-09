<template>
    <div class="wrap">
        <div class="banner">
            <span>{{category}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Category",
        props: {
            category: String,
        }
    }
</script>

<style scoped>
    .banner {
        height: 150px;
        background: url('https://images.pexels.com/photos/533930/pexels-photo-533930.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
        background-size: cover;
        background-position: 50% 50%;
        position: relative;
        text-align: center;
        line-height: 150px;
        color: white;
        font-size: 24px;
    }

    .banner::before {
         position:  absolute;
         content: '';
         display: block;
         width:  100%;
         height: 100%;
         top: 0;
         left: 0;
         background: #000;
         opacity: 0.7;
     }

    .banner span {
        position: relative;
    }
</style>