<template>
  <div class="CalendarDay">
    <span class="">
      {{ day.date() }}
    </span>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'day-calendar',
  props: {
    day: {
      default: moment()
    },
    onDateChange: {
      type: Function,
      default () {
        return function () {}
      }
    }
  },
  methods: {
    fireDateChange () {
      this.$emit('date-change', this.day)
    }
  }
}
</script>

<style scoped="">
.CalendarDay {
  position: relative;
  display: table;
  height: 100%;
  width: 100%;
}

.CalendarDay span {
  display: table-header-group;
}

.CalendarDay__day {
  display: table-cell;
  vertical-align: middle;

  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
</style>