<template>
  <div class="CalendarMonth CalendarMonth--horizontal">
    <table>
      <caption class="CalendarMonth__caption js-CalendarMonth__caption">
        <strong>{{ monthTitle }}</strong>
      </caption>

      <tbody class="js-CalendarMonth__grid">
        <tr v-for="(week, i) in weeks" :key="i">
          <td v-for="(day, j) in week" :class="getDayClass(day)" :key="j">
            <daycalendar v-if="day" :day="day"></daycalendar>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import moment from 'moment'
import DayCalendar from './DayCalendar'
import getCalendarMonthWeeks from '../utils/getCalendarMonthWeeks'

export default {
  name: 'calendarmonth',
  components: {
    'daycalendar': DayCalendar
  },
  computed: {
    monthTitle () {
      return this.month.format(this.monthFormat)
    },
    weeks () {
      return getCalendarMonthWeeks(this.month, false)
    }
  },
  props: {
    month: {
      default: moment()
    },
    monthFormat: {
      type: String,
      default: 'MMMM YYYY'
    }
  },
  methods: {
    getDayClass (day) {
      const outsideClass = (!day || day.month() !== this.month.month()) ? 'CalendarMonth__day--outside' : ''
      return `CalendarMonth__day ${outsideClass}`
    }
  }
}
</script>

<style scoped>
.CalendarMonth {
    text-align: center;
    padding: 0 13px;
    vertical-align: top;
}
.CalendarMonth table {
    border-collapse: collapse;
    border-spacing: 0;
}
.CalendarMonth--horizontal {
    display: inline-block;
    min-height: 100%}

.CalendarMonth__caption {
    color: #3c3f40;
    margin-top: 7px;
    font-size: 18px;
    padding: 15px 0 35px;
    text-align: center;
    margin-bottom: 2px;
}
.CalendarMonth__day {
    border: 1px solid #e4e7e7;
    padding: 0;
    box-sizing: border-box;
    color: #565a5c;
    cursor: pointer;
    width: 39px;
    height: 38px;
}
.CalendarMonth__day:active {
    background: #f2f2f2;
}
.CalendarMonth__day--outside {
    border: 0;
    cursor: default;
}
.CalendarMonth__day--outside:active {
    background: #fff;
}
.CalendarMonth__day--hovered {
    background: #e4e7e7;
    border: 1px double #d4d9d9;
    color: inherit;
}
.CalendarMonth__day--blocked-minimum-nights {
    color: #cacccd;
    background: #fff;
    border: 1px solid #e4e7e7;
    cursor: default;
}
.CalendarMonth__day--blocked-minimum-nights:active {
    background: #fff;
}
.CalendarMonth__day--selected-span {
    background: #66e2da;
    border: 1px double #33dacd;
    color: #fff;
}
.CalendarMonth__day--selected-span.CalendarMonth__day--hovered, .CalendarMonth__day--selected-span:active {
    background: #33dacd;
    border: 1px double #00a699;
}
.CalendarMonth__day--selected-span.CalendarMonth__day--last-in-range {
    border-right: #00a699;
}
.CalendarMonth__day--hovered-span, .CalendarMonth__day--after-hovered-start {
    background: #b2f1ec;
    border: 1px double #80e8e0;
    color: #007a87;
}
.CalendarMonth__day--selected-start, .CalendarMonth__day--selected-end, .CalendarMonth__day--selected {
    background: #00a699;
    border: 1px double #00a699;
    color: #fff;
}
.CalendarMonth__day--selected-start:active, .CalendarMonth__day--selected-end:active, .CalendarMonth__day--selected:active {
    background: #00a699;
}
.CalendarMonth__day--blocked-calendar {
    background: #cacccd;
    color: #82888a;
    cursor: default;
}
.CalendarMonth__day--blocked-calendar:active {
    background: #cacccd;
}
.CalendarMonth__day--blocked-out-of-range {
    color: #cacccd;
    background: #fff;
    border: 1px solid #e4e7e7;
    cursor: default;
}
.CalendarMonth__day--blocked-out-of-range:active {
    background: #fff;
}
</style>