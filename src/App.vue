<template>
<div id="app">
  <demo-button></demo-button>
</div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import DemoButton  from './pages/buttons/demo-button.vue'
  export default {
    name: 'app',
    data(){
      return {
      }
    },
    components: {
      HelloWorld,
      DemoButton
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
