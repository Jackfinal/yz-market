<template>
  <div id="app">
    <div class="container with-bottom-nav" style="min-height: 667px; height: 667px;">
      <SearchBar/>
      <div class="search-content" style="display: none;"></div>
      <div class="content" style="height: 617px;">
        <LeftNav @getSubList="setSubList"/>
        <CategoryContent/>
      </div>
      <Foot/>
    </div>
  </div>
</template>
<script>
    import Foot from '../../components/footer'
    import SearchBar from './components/searchBar'
    import LeftNav from './components/leftNav'
    import CategoryContent from './components/categoryContent'
    import * as API from '../../modules/js/api/config.js'
    import mixin from '../../modules/js/mixin.js'

  export default{
        components:{
            Foot,SearchBar,LeftNav,CategoryContent
        },
      created(){
          this.setSubList(0)
          this.setTopList()
      },
      methods:{
            setSubList(index,id){
                this.$store.commit('SET_TOPINDEX',index)
                if(index === 0) {
                    this.setRank()
                }else {
                    API.GET(`/category/subList?id=${id}`).then(res => {
                        this.$store.commit('SET_SUBDATA',res.data)
                    })
                }
            },
          setTopList() {
              API.GET('/category/topList').then(res => {
                  this.$store.commit('SET_TOPLIST',res.lists)
              }).catch(res => {})
          },
          setRank() {
              API.GET('/category/rank').then(res => {
                  this.$store.commit('SET_RANK',res.data)
              })
          },
      },
      mixins: [mixin]
  }
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
