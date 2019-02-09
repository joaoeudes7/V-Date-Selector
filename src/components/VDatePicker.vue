<template>
  <div id="VDatePicker">
    <div class="displayDate">{{ date }}</div>
    <div class="dialog">
      <Selector v-model="date" />
      <Calendar v-model="date" />
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
  data: () => ({
    date: new Date()
  }),
  mounted() {
    if (this.value) {
      this.date = new Date(this.value)
    }
  },
  methods: {
    onChange() {
      this.$emit("change", this.date);
    },
    selectDay(value) {
      this.day = value;
      this.onChange();
    },
    selectMonth(value) {
      this.date.setMonth(value);
      this.onChange();
    },
    selectYeah(value) {
      this.date.setFullYear(value);
      this.onChange();
    }
  },
  watch: {
    date: function() {
      this.$emit('input', this.date)
    }
  }
};
</script>

<style lang="scss" scoped>
#VDatePicker {
  width: 240px;
  overflow: hidden;
  user-select: none;
}
</style>
