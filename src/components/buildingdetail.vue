<template>
  <div>
    <div class="building-header">
      <headers></headers>
      <select class="city" @change="getallarea" v-model="areaselected">
        <option  v-for="(item,index) in arealist" :key="index" :value="item">{{item}}</option>
      </select>
    </div>
    <div class="building-main">
      <ul id="building-ul">
        <li class="clearfix" v-for="item in allareainfo" :key="item.id">
          <a href="buildingdetail.html">
            <img :src="'http://h5.yuntap.com/'+item.cover" />
            <div class="building-text">
              <h2>{{item.name}}</h2>
              <p class="building-add">{{item.address}}</p>
              <p class="building-tel">{{item.tel}}</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <fixdfooter></fixdfooter>
  </div>
</template>
<style>

</style>
<script>
  import headers from '@/components/plugin/header'
  import fixdfooter from '@/components/plugin/fixdfooter'
  export default {
    data(){
      return{
        arealist:['全国'],
        allareainfo:[],
        areaselected:'全国'
      }
    },
    components: {
      headers,
      fixdfooter
    },
    mounted(){
      this. getarealist()
      this.getallarea()
    },
    methods:{
      getarealist(){
        this.$axios.get('/api/project/allarealist')
          .then(response=> {
            this.arealist=this.arealist.concat(response.data.data.data);
            console.log(this.arealist);
          })
          .catch(function (response) {
            console.log(response);
          });
      },
      getallarea(){
        if (this.areaselected==='全国'){
          this.$axios.get('/api/project/list?full=true')
            .then(response=> {
              this.allareainfo=response.data.data.data.items;
              console.log(this.allareainfo)
            })
            .catch(function (response) {
              console.log(response);
            });
        }
        else {
          this.$axios.get('/api/project/list?zone='+this.areaselected)
            .then(response=> {
              this.allareainfo=response.data.data.data.items;
              console.log(this.allareainfo)
            })
            .catch(function (response) {
              console.log(response);
            });
        }
      },
    }
  }
</script>
