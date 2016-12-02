<template>
  <div class="CalendarMonth">
    <table>
      <caption class="CalendarMonth__caption">
        <strong>{{ monthTitle }}</strong>
      </caption>

      <tbody>
        <tr v-for="(week, i) in weeks" :key="i">
          <td v-for="(day, j) in week" :class="getDayClass(day)" :key="j" @click.stop="onDateChange(day)">
            <div class="CalendarDay">
              <span class="" v-if="day">
                {{ day.date() }}
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import moment from 'moment'
import getCalendarMonthWeeks from '../utils/getCalendarMonthWeeks'

export default {
  name: 'calendar-month',
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
    selected: {
      default: moment()
    },
    monthFormat: {
      type: String,
      default: 'MMMM YYYY'
    },
    onDateChange: {
      type: Function,
      default () {
        return function () {}
      }
    },
    minDate: {
      default () {
        return moment().subtract('years', 100)
      }
    },
    maxDate: {
      default () {
        return moment().add('years', 100)
      }
    }
  },
  methods: {
    getDayClass (day) {
      const outsideClass = (!day || day.month() !== this.month.month()) ? 'CalendarMonth__day--outside' : ''
      const outOfRangeClass = !day ? '' : ((day.isBefore(this.minDate, 'day') || day.isAfter(this.maxDate, 'day')) ? 'CalendarMonth__day--blocked-out-of-range' : '')
      const selected = (!day || !day.isSame(this.selected, 'day') ? '' : 'CalendarMonth__day--selected-start')
      return `CalendarMonth__day ${outsideClass} ${outOfRangeClass} ${selected}`
    }
  }
}
</script>

<style scoped>
.CalendarMonth {
    text-align: center;
    padding: 0 13px;
    vertical-align: top;
    display: inline-block;
    min-height: 100%;
    padding-bottom: 20px;
}

.CalendarMonth table {
    border-collapse: collapse;
    border-spacing: 0;
}

.CalendarMonth__caption {
    color: #3c3f40;
    margin-top: 7px;
    font-size: 18px;
    padding: 15px 0 35px;
    text-align: center;
    margin-bottom: 10px;
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

.CalendarMonth__day:active,
.CalendarMonth__day:hover
{
    background: #e4e7e7;
    border: 1px double #d4d9d9;
}

.CalendarMonth__day--outside {
    border: 0;
    cursor: default;
}

.CalendarMonth__day--outside:hover{
    background-color: white;
    border: 0;
}

.CalendarMonth__day--blocked-out-of-range:hover {
    background-color: white;
}

.CalendarMonth__day--outside:active {
    background: #fff;
}


.CalendarMonth__day--selected-start {
    background: #00a699;
    border: 1px double #00a699;
    color: #fff;
}
.CalendarMonth__day--selected-start:active,
.CalendarMonth__day--selected-start:hover {
    background: #00a699;
}

.CalendarMonth__day--blocked-out-of-range {
    color: #cacccd;
    background: #fff;
    border: 1px solid #e4e7e7;
    cursor: not-allowed;
}

.CalendarMonth__day--blocked-out-of-range:active {
    background: #fff;
}

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