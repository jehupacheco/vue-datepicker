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
  name: 'daycalendar',
  props: {
    day: {
      default: moment()
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

.CalendarDay__day {
  display: table-cell;
  vertical-align: middle;

  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
</style>