<template>
  <div id="app">
    <VDateSelector v-model="date"/>
  </div>
</template>

<script>
import VDateSelector from './index.js'

export default {
  name: 'app',
  components: {
    VDateSelector
  },
  data: () => ({
    date: new Date('11/1/2018')
  }),
  mounted() {
    console.log(VDateSelector)
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
  margin-top: 60px;
  display: flex;
  justify-content: center;
}
</style>
