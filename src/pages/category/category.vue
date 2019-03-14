<template>
  <div id="app">
    <div class="container with-bottom-nav" style="min-height: 667px; height: 667px;">
      <SearchBar/>
      <div class="search-content" style="display: none;"></div>
      <div class="content" style="height: 617px;">
        <LeftNav/>
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

  export default{
        components:{
            Foot,SearchBar,LeftNav,CategoryContent
        }
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
