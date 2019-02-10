<template>
  <div id="VDatePicker">
    <div class="dialog">
      <Selector v-model="date"/>
      <Calendar :value="date" @input="selectDate"/>
    </div>
  </div>
</template>

<script>
import Calendar from "./Calendar";
import Selector from "./Selector";

export default {
  name: "VDatePicker",
  props: {
    value: { type: Date || String }
  },
  components: {
    Calendar,
    Selector
  },
  data() {
    return {
      date: new Date(this.value) || new Date()
    };
  },
  methods: {
    onInput() {
      this.$emit("input", this.date);
    },
    selectDate(value) {
      this.date = value;
      this.onInput();
    },
    selectMonth(value) {
      this.date.setMonth(value);
      this.onInput();
    },
    selectYeah(value) {
      this.date.setFullYear(value);
      this.onInput();
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
#VDatePicker {
  display: block;
  width: 240px;
  border-radius: 4px;
  overflow: hidden;

  & > * {
    user-select: none;
  }
}
</style>
