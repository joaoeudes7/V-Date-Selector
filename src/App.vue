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
    date: new Date()
  }),
  mounted() {
    console.log(VDateSelector)
  }
}
</script>

<style lang="scss">
#app {
}
</style>
