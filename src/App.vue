<template>
  <div>
    <v-header :sellers="sellers"></v-header>
    <div class="tab">
      <div class="tab-item">
        <a v-link="{path:'/goods'}">商品</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/ratings'}">评论</a>
      </div>     
      <div class="tab-item">
        <a v-link="{path:'/sellers'}">商家</a>
      </div>
    </div>
    <router-view></router-view> 
  </div>
</template>

<script>
  import header from './components/header/header.vue';
  const ERR_OK = 0;
  export default {
    data() {
      return {
        sellers: {}
      }
    },
    created() {
      this.$http.get('/api/sellers').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.sellers = response.data;
          console.log(this.sellers); 
        }
      });
    },
    components: {
      'v-header': header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      border-bottom: 1px solid #ccc
      .tab-item
          flex: 1
          text-align: center
          & > a
            display: block;
            font-size: 14px;
            color: rgb(77, 85, 93);
            &.active
              color: rgb(240, 20, 20);
</style>
