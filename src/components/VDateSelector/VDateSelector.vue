<template>
  <div id="VDateSelector">
    <Selector v-model="date" :i18n="i18n"/>
    <Calendar :value="date" :isActualDate="isActualDate" :i18n="i18n" @input="selectDate"/>
  </div>
</template>

<script>
import Calendar from "./Calendar";
import Selector from "./Selector";

export default {
  name: "VDateSelector",
  props: {
    value: { type: Date || String },
    locale: { type: String, default: 'pt-br' }
  },
  components: {
    Calendar,
    Selector
  },
  data() {
    return {
      date: new Date(this.value) || new Date(),
      i18n: {}
    };
  },
  created() {
    this.i18n = require(`../../locales/${this.locale}`).default
  },
  methods: {
    onInput() {
      this.$emit("input", this.date);
    },
    selectDate(value) {
      this.date = value;
      this.onInput();
    }
  },
  computed: {
    isActualDate() {
      return this.date.getTime() === this.value.getTime()
    }
  },
  watch: {
    value: function(val) {
      this.date = val;
    }
  }
};
</script>

<style lang="scss" scoped>
#VDateSelector {
  display: block;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 240px;
  border: 1px solid #cacaca;
  border-radius: 8px;
  box-shadow: 0 4px 40px -10px #666;
  overflow: hidden;

  & > * {
    user-select: none;
  }
}
</style>
