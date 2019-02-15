<template>
  <div class="lunbocontainer">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item,index) in lunbolist" :key="index">
        <img :src="'http://h5.yuntap.com/'+item.url"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import '../../../static/css/swiper.min.css'
  import { swiper,swiperSlide } from "vue-awesome-swiper"
  export default {
    name: "banner",
    components:{
      swiper,
      swiperSlide
    },
    props:[
      "lunbolist",
    ],
    data(){
      return{
        swiperOption:{
          pagination:{
            el:".swiper-pagination",
          },
          autoplay:{
            delay:1500
          }
        }
      }
    },
    computed:{
      swiper(){
        return this.$refs.mySwiper.swiper;
      }
    }
  }
</script>

<style scoped>
  .lunbocontainer{
    text-align: center;
  }
  .lunbocontainer img{
    height: 100%;
  }
  .full{
    width: 100%;
  }
</style>
