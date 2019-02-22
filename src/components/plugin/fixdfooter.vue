<template>
  <div>
    <nav class="nav">
      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><a href="about.html">关于华宇</a></li>
        <li><router-link to="/news">华宇资讯</router-link></li>
        <li><a href="estate.html">地产集团</a></li>
        <li><a href="business.html">商业集团</a></li>
        <li><a href="fubon.html">金控集团</a></li>
        <li><a href="construction.html">建设集团</a></li>
        <li><a href="property.html">物业集团</a></li>
        <li><a href="overseas.html">海外公司</a></li>
      </ul>
    </nav>
    <footer class="commonfooter">
      <div class="container">
        <img src="../../../static/img/logo.png" />
        <p>
          Copyright©2016<br />
          重庆华宇集团有限公司 <br />
          渝ICP备16012662号
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
  import '../../../static/css/swiper.min.css'
  import { swiper,swiperSlide } from "vue-awesome-swiper"
  export default {
  }
</script>

<style scoped>

</style>
