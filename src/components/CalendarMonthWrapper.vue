<template>
  <div class="DayPicker DayPicker--horizontal">
    <div class="DayPickerNavigation DayPickerNavigation--horizontal">
      <span @click="setPreviousMonth" class="DayPickerNavigation__prev DayPickerNavigation__prev--default"> p </span>
      <span @click="setNextMonth" class="DayPickerNavigation__next DayPickerNavigation__next--default"> n </span>
    </div>
    <div class="DayPicker__week-headers">
      <div class="DayPicker__week-header">
        <ul>
          <li v-for="name in monthNames">
            <small>{{ name }}</small>
          </li>
        </ul>
      </div>
    </div>
    <calendarmonth :month="state.month"></calendarmonth>
  </div>
</template>

<script>
import CalendarMonth from './CalendarMonth'
import moment from 'moment'

export default {
  name: 'calendar-month-wrapper',
  components: {
    'calendarmonth': CalendarMonth
  },
  props: {
    month: {
      default: moment()
    },
    monthNames: {
      type: Array,
      default () {
        return ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
      }
    }
  },
  methods: {
    setNextMonth () {
      this.state.month = moment(this.state.month.add(1, 'months'))
    },
    setPreviousMonth () {
      this.state.month = moment(this.state.month.subtract(1, 'months'))
    }
  },
  data () {
    return {
      state: {
        month: this.month
      }
    }
  }
}
</script>

<style>
.DayPicker {
    background: #fff;
    position: relative;
}
.DayPicker--horizontal {
    background: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.07);
    border-radius: 3px;
    width: 318px;
}
.DayPicker--horizontal.DayPicker--portal {
    box-shadow: none;
    position: absolute;
    left: 50%;
    top: 50%}
.DayPicker--vertical.DayPicker--portal {
    position: initial;
}
.DayPicker__week-headers {
    position: relative;
}
.DayPicker__week-header {
    color: #757575;
    position: absolute;
    top: 62px;
    z-index: 2;
    text-align: left;
}
.DayPicker__week-header ul {
    list-style: none;
    margin: 1px 0;
    padding-left: 0;
}
.DayPicker__week-header li {
    display: inline-block;
    width: 39px;
    text-align: center;
}
.DayPicker--horizontal .DayPicker__week-header {
    padding: 0 22px 0 13px;
}
.DayPicker--horizontal .DayPicker__week-header:first-of-type {
    padding: 0 13px 0 22px;
}
.DayPicker--vertical .DayPicker__week-header {
    margin-left: -150px;
    padding: 0 13px;
    width: 300px;
    left: 50%
}
.DayPickerNavigation__prev, .DayPickerNavigation__next {
    cursor: pointer;
    line-height: 0.78;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}
.DayPickerNavigation__prev--default, .DayPickerNavigation__next--default {
    border: 1px solid #dce0e0;
    background-color: #fff;
    color: #757575;
}
.DayPickerNavigation__prev--default:focus, .DayPickerNavigation__prev--default:hover, .DayPickerNavigation__next--default:focus, .DayPickerNavigation__next--default:hover {
    border: 1px solid #c4c4c4;
}
.DayPickerNavigation__prev--default:active, .DayPickerNavigation__next--default:active {
    background: #f2f2f2;
}
.DayPickerNavigation--horizontal {
    position: relative;
}
.DayPickerNavigation--horizontal .DayPickerNavigation__prev, .DayPickerNavigation--horizontal .DayPickerNavigation__next {
    border-radius: 3px;
    padding: 6px 9px;
    top: 18px;
    z-index: 2;
    position: absolute;
}
.DayPickerNavigation--horizontal .DayPickerNavigation__prev {
    left: 22px;
}
.DayPickerNavigation--horizontal .DayPickerNavigation__next {
    right: 22px;
}
.DayPickerNavigation--horizontal .DayPickerNavigation__prev--default svg, .DayPickerNavigation--horizontal .DayPickerNavigation__next--default svg {
    height: 19px;
    width: 19px;
    fill: #82888a;
}
</style>