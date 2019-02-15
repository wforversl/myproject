<template>
  <div class="home">
    <div class="home-d1">
      <p class="logo"><img src="static/img/logo.png" /></p>
    </div>
    <div class="home-d2">
      <banner :lunbolist="lunbotus"></banner>
    </div>
    <div class="home-d3 clearfix">
      <div class="home-d3-left">
        <router-link to="/building" target="a">
          <img src="static/img/home-icon1.png" />
          <p>楼盘</p>
        </router-link>
      </div>
      <div class="home-d3-right">
        <router-link to="/building" target="a">
          <img src="static/img/home-icon2.png" />
          <p>新闻</p>
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import banner from '@/components/plugin/banner'

export default {
  name: 'home',
  components: {
    banner
  },
  data () {
    return {
      lunbotus:[]
    }
  },
  mounted(){
    this.banner()
  },
  methods:{
    banner(){
      this.$axios.get('/api/main/index_all_data')
        .then(response=> {
          console.log(response.data.data.data.coverList)
          this.lunbotus=response.data.data.data.coverList
        })
        .catch(function (response) {
          console.log(response);
        });
    },

  },
  computed: {

  }



}
</script>


<style scoped>

</style>
