<template>
  <div id="Selector">
    <div class="labelMonth" v-html="i18[month]" />
    <div class="controllers">
      <VSVG @click="onPrev('month')" name="arrowLeft" class="icon" />
      <div>{{ formattedMonth }}</div>
      <VSVG @click="onNext('month')" name="arrowRight" class="icon"/>
      <VSVG @click="onPrev('year')" name="arrowLeft" class="icon"/>
      <div>{{ year }}</div>
      <VSVG @click="onNext('year')" name="arrowRight" class="icon"/>
    </div>
  </div>
</template>

<script>
import VSVG from "../VSVG";

export default {
  name: "Selector",
  props: ["value", "18n"],
  components: {
    VSVG
  },
  data() {
    return {
      date: this.value
    };
  },
  methods: {
    setMonth(month) {
      const _date = new Date(this.date);
      _date.setMonth(month);
      this.onInput(_date);
    },
    setYear(year) {
      const _date = new Date(this.date);
      _date.setFullYear(year);
      this.onInput(_date);
    },
    onInput(data) {
      this.$emit("input", data);
    },
    onPrev(type) {
      const actionsType = {
        month: () => this.setMonth(this.month - 1),
        year: () => this.setYear(this.year - 1)
      };
      return actionsType[type]();
    },
    onNext(type) {
      const actionsType = {
        month: () => this.setMonth(this.month + 1),
        year: () => this.setYear(this.year + 1)
      };
      return actionsType[type]();
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
    i18() {
      return this.i18n || [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
      ]
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
#Selector {
  display: block;
  width: 100%;
  background: #d2d2d2;
  flex-direction: row;
}

.labelMonth {
  color: #525252;
  text-align: center;
  padding-top: 6px;
}

.controllers {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2px;

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

  &:hover {
    background: #6666664a;
  }

  & > svg {
    fill: #6666664a;
  }
}
</style>
