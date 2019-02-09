<template>
  <div id="Selector">
    <div class="controllers">
      <div @click="onPrev()" class="icon" v-html="icons.arrowLeft" />
      <div @click="setType('month')">{{ month + 1 }}</div>
      <div @click="setType('year')">{{ year }}</div>
      <div @click="onNext()" class="icon" v-html="icons.arrowRight"/>
    </div>
    <div class="options" hidden="hiddedOptions">
      <div></div>
    </div>
  </div>
</template>

<script>
import icons from './icons.js'

export default {
  name: "Selector",
  props: ['value'],
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
      this.$emit('input', data);
    },
    onPrev() {
      const month = this.date.getMonth()
      this.date.setMonth(month - 1);
      this.onInput(this.date);
    },
    onNext() {
      const month = this.date.getMonth()
      this.date.setMonth(month + 1);
      this.onInput(this.date);
    },
  },
  computed: {
    month() {
      return this.date.getMonth();
    },
    year() {
      return this.date.getFullYear();
    },
    dynamicGet() {
      return `get${this.type}`;
    },
    icons() {
      return icons;
    }
  },
  watch: {
    value: function (val) {
      this.date = new Date(val)
    }
  }
};
</script>

<style lang="scss" scoped>
#Selector {
  display: block;
  background: #6666664a;
  flex-direction: row;
  user-select: none;
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
    background: #6666664a
  }
}
</style>
