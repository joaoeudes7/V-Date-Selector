<template>
  <div id="Calendar">
    <div class="days">
      <span v-for="(day, index) in days" class="day" v-html="day" :key="`day-${index}`"/>
    </div>
    <div v-for="(week, iweek) in mapMonth" :key="iweek">
      <template v-for="(date, idate) in week">
        <span class="date" v-html="date" :key="`date-${idate}-${iweek}`" @click="selectDate(date) "/>
      </template>
    </div>
  </div>
</template>

<script>
// import Day from "./Day";

export default {
  name: "Calendar",
  components: {
    // Day
  },
  props: ['value'],
  data () {
    return {
    days: ["D", "S", "T", "Q", "Q", "S", "S"],
    date: this.value
  }
  },
  methods: {
    selectDate(date) {
      const _date = this.date;
      _date.setDate(date)
      this.$emit("input", _date);
    }
  },
  computed: {
    totalDays() {
      const month = this.date.getMonth();
      const year = this.date.getFullYear();

      return new Date(year, month + 1, 0).getDate();
    },
    month() {
      return this.date.getMonth();
    },
    year() {
      return this.date.getFullYear();
    },
    mapWeek() {
      const week = [[], [], [], [], [], [], []];

      const firstDayMonth = new Date(this.year, this.month, 1).getDay();
      const lastDayMonth = new Date(this.year, this.month + 1, 0).getDay();

      const PrevMonth = new Date(this.year, this.month, 0);
      const NextMonth = new Date(this.year, this.month + 1, 1);

      const lastDayPrevMonth = PrevMonth.getDay();
      let lastDatePrevMonth = PrevMonth.getDate();

      const firstDayNextMonth = NextMonth.getDay();
      let firstDateNextMonth = NextMonth.getDate();

      if (lastDayPrevMonth != 6) {
        for (let day = lastDayPrevMonth; day > -1; day--) {
          week[day].push(lastDatePrevMonth);
          lastDatePrevMonth--;
        }
      }

      const currentDate = new Date(this.year, this.month, 1);
      for (let date = 1; date <= this.totalDays; date++) {
        const _day = currentDate.getDay();

        week[_day].push(date);
        currentDate.setDate(date + 1);
      }

      for (let day = firstDayNextMonth; day <= 6; day++) {
        week[day].push(firstDateNextMonth);
        firstDateNextMonth++;
      }

      return week;
    },
    mapMonth() {
      const month = [[], [], [], [], []];
      for (let index = 0; index < 5; index++) {
        month[index] = this.mapWeek.map(days => days[index]);
      }
      return month;
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
#Calendar {
  user-select: none;;
}

.days {
  background: #dedede;
}

.day {
  display: inline-block;
  color: #5f5f5f;
  padding: 5px;
  width: 24px;
}

.date {
  display: inline-block;
  background: #f3f3f3;
  padding: 5px;
  width: 24px;
  cursor: pointer;

  :hover {
    background: #d3d3d3;
  }
}

.day-week {
}
</style>
