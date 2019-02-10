<template>
  <div id="VDatePicker">
    <Input v-if="showInput" :value="formattedDate" @click="toogleDialog" />
    <div v-if="showDialog" class="dialog">
      <Selector v-model="date"/>
      <Calendar :value="date" :isActualDate="isActualDate" @input="selectDate"/>
    </div>
  </div>
</template>

<script>
import Calendar from "./Calendar";
import Selector from "./Selector";
import Input from "./Input";

export default {
  name: "VDateSelector",
  props: {
    value: { type: Date || String },
    showInput: { type: Boolean, default: true }
  },
  components: {
    Calendar,
    Selector,
    Input
  },
  data() {
    return {
      date: this.value || new Date(),
      showDialog: !this.showInput
    };
  },
  methods: {
    onInput() {
      this.toogleDialog();
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
    },
    toogleDialog() {
      this.showDialog = !this.showDialog;
    }
  },
  computed: {
    isActualDate() {
      return this.date.getTime() === this.value.getTime()
    },
    formattedDate() {
      return `${this.date.getDate()}/${this.date.getMonth() + 1}/${this.date.getFullYear()}`
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
  position: relative;
}

.dialog {
  display: block;
  width: 240px;
  border: 1px solid #cacaca;
  border-radius: 8px;
  box-shadow: 0 4px 40px -10px #666;
  overflow: hidden;
  position: absolute;
  left: -6px;

  & > * {
    user-select: none;
  }
}
</style>
