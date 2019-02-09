<template>
  <div id="app">
    <div>{{ date }}</div>
    <VDatePicker v-model="date"/>
  </div>
</template>

<script>
import VDatePicker from './components/VDatePicker'

export default {
  name: 'app',
  components: {
    VDatePicker
  },
  data: () => ({
    date: new Date()
  })
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
}
</style>
