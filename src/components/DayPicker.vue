<template>
  <div>
    <div>
      <input type="text" :name="name" @keydown="return false">
    </div>
    <calendar-month-wrapper :month="date"></calendar-month-wrapper>
  </div>
</template>

<script>
import CalendarMonthWrapper from './CalendarMonthWrapper'
import moment from 'moment'

export default {
  name: 'day-picker',
  props: {
    name: {
      type: String,
      default: ''
    },
    date: {
      default: moment()
    }
  }
  components: {
    'calendar-month-wrapper': CalendarMonthWrapper
  }
}
</script>