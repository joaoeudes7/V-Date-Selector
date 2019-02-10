<template>
  <div id="Calendar">
    <div class="days">
      <span v-for="(day, index) in weekDays" class="day" v-html="day" :key="`day-${index}`"/>
    </div>
    <div class="dates">
      <template v-for="(_date, idate) in datesPrevMonth">
        <span class="date-disable" v-html="_date" :key="`pm-${idate}`"/>
      </template>

      <template v-for="(_date, idate) in datesCurrentMonth">
        <span v-html="_date" :class="['date']" :key="`cm-${idate}`" @click="selectDate(_date) "/>
      </template>

      <template v-for="(_date, idate) in datesNextMonth">
        <span class="date-disable" v-html="_date" :key="`nm-${idate}`"/>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calendar",
  props: ["value", "i18n"],
  data() {
    return {
      weekDays: this.i18n || ["D", "S", "T", "Q", "Q", "S", "S"],
      currentDate: this.value
    };
  },
  methods: {
    selectDate(date) {
      const _date = new Date(this.currentDate);
      _date.setDate(date);
      this.$emit("input", _date);
    }
  },
  computed: {
    totalDays() {
      return new Date(this.year, this.month + 1, 0).getDate();
    },
    month() {
      return this.currentDate.getMonth();
    },
    year() {
      return this.currentDate.getFullYear();
    },
    date() {
      return this.currentDate.getDate();
    },
    datesPrevMonth() {
      const firstDayMonth = new Date(this.year, this.month, 1).getDay();

      let dates = [];
      if (firstDayMonth != 0) {
        const lastDayPrevMonth = firstDayMonth - 1;
        let lastDatePrevMonth = new Date(this.year, this.month, 0).getDate();
        for (let day = lastDayPrevMonth; day > -1; day--) {
          dates.push(lastDatePrevMonth);
          lastDatePrevMonth--;
        }
      }
      return dates.reverse();
    },
    datesNextMonth() {
      const lastDayMonth = new Date(this.year, this.month + 1, 0).getDay();

      let dates = [];
      if (lastDayMonth != 6) {
        const firstDayNextMonth = lastDayMonth + 1;
        let firstDateNextMonth = 1;
        for (let day = firstDayNextMonth; day <= 6; day++) {
          dates.push(firstDateNextMonth);
          firstDateNextMonth++;
        }
      }
      return dates;
    },
    datesCurrentMonth() {
      let dates = [];

      for (let date = 1; date <= this.totalDays; date++) {
        dates.push(date);
      }

      return dates;
    }
  },
  watch: {
    value: function(val) {
      this.currentDate = val;
    }
  }
};
</script>

<style lang="scss" scoped>
#Calendar {
  display: block;
  width: 100%;
}

.days {
  background: #dedede;
}

.day {
  display: inline-block;
  color: #5f5f5f;
  font-size: 12px;
  padding: 5px;
  width: 24px;
}

.dates {
  display: inline-grid;
  width: 100%;
  grid-template-columns: repeat(7, 1fr);
  background-color: #f3f3f3;
}

.date {
  display: inline-block;
  background: #f3f3f3;
  padding: 5px;
  width: 24px;
  cursor: pointer;

  &:hover {
    background: #0061df;
    color: #ffffff;
  }

  &-current {
    @extend .date;
    background: #2081ff;
    color: #ffffff;
  }

  &-disable {
    @extend .date;
    color: #8f8f8f;
    cursor: auto;

    &:hover {
      background: #f3f3f3;
      color: #8f8f8f;
    }
  }
}
</style>
