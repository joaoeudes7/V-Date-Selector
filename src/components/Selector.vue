<template>
  <div id="Selector">
    <div class="controllers">
      <div @click="onPrev()" class="icon" v-html="icons.arrowLeft"/>
      <div @click="setType('month')">{{ formattedMonth }}</div>
      <div @click="setType('year')">{{ year }}</div>
      <div @click="onNext()" class="icon" v-html="icons.arrowRight"/>
    </div>
    <div class="options" hidden="hiddedOptions">
      <div></div>
    </div>
  </div>
</template>

<script>
import icons from "./icons.js";

export default {
  name: "Selector",
  props: ["value"],
  data: () => ({
    type: "Month", // Month || FullYeah,
    hiddedOptions: true,
    date: new Date()
  }),
  methods: {
    setType(type) {
      this.type = type;
    },
    onInput(data) {
      this.$emit("input", data);
    },
    onPrev() {
      this.date.setMonth(this.month - 1);
      this.onInput(this.date);
    },
    onNext() {
      this.date.setMonth(this.month + 1);
      this.onInput(this.date);
    }
  },
  computed: {
    month() {
      return this.date.getMonth();
    },
    year() {
      return this.date.getFullYear();
    },
    formattedMonth() {
      return ("0" + (this.month + 1)).slice(-2);
    },
    icons() {
      return icons;
    }
  },
  watch: {
    value: function(val) {
      this.date = new Date(val);
    }
  }
};
</script>

<style lang="scss" scoped>
#Selector {
  display: block;
  width: 100%;
  background: #6666664a;
  flex-direction: row;
}

.controllers {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  div {
    padding: 5px;
  }
}

.icon {
  background: none;
  width: 24px;
  height: 24px;
  padding: 5px;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  &:hover {
    background: #6666664a;
  }
}
</style>
