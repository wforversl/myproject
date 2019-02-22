<template>
  <div>
    <newitem :newsitem="newsitem"></newitem>
  </div>
</template>
<style scoped>
</style>
<script>
  import newitem from '@/components/plugin/newitem'
  export default {
    data(){
      return{
        newsitem:[]
      }
    },
    components: {
      newitem
    },
    mounted(){
      this.getnineteen()
    },
    methods:{
      getnineteen(){
        this.$axios.get('/api/article/list?year='+2019)
          .then(response=> {
            this.newsitem=response.data.data.data.items;
            console.log(response.data.data.data.items);
          })
          .catch(function (response) {
            console.log(response);
          });
      }
    }
  }
</script>
