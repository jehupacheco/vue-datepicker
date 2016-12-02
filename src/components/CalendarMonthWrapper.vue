<template>
  <div class="DayPicker" @click.stop="">
    <div class="DayPickerNavigation">
      <span @click.stop="setPreviousMonth" class="DayPickerNavigation__prev DayPickerNavigation__prev--default">
        <img src="../assets/arrow-left.png">
      </span>
      <span @click.stop="setNextMonth" class="DayPickerNavigation__next DayPickerNavigation__next--default">
        <img src="../assets/arrow-right.png">
      </span>
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
    <calendar-month :month="state.month"
                    :onDateChange="onDateChange"
                    :minDate="minDate"
                    :maxDate="maxDate"
                    :selected="month">
    </calendar-month>
  </div>
</template>

<script>
import CalendarMonth from './CalendarMonth'
import moment from 'moment'

export default {
  name: 'calendar-month-wrapper',
  components: {
    'calendar-month': CalendarMonth
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
    setNextMonth () {
      this.state.month = moment(this.state.month.add(1, 'months'))
    },
    setPreviousMonth () {
      this.state.month = moment(this.state.month.subtract(1, 'months'))
    },
    avoid (e) {
      e.target.value = ''
    }
  },
  data () {
    return {
      state: {
        month: moment(this.month)
      }
    }
  }
}
</script>

<style>
.DayPicker {
    background: #fff;
    position: absolute;
    top: 51px;
    left: 0;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.07);
    border-radius: 3px;
    width: 318px;
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

.DayPicker__week-header {
    padding: 0 22px 0 13px;
}

.DayPicker__week-header:first-of-type {
    padding: 0 13px 0 22px;
}

.DayPickerNavigation {
    position: relative;
}

.DayPickerNavigation__prev,
.DayPickerNavigation__next {
    cursor: pointer;
    line-height: 0.78;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    border: 1px solid #dce0e0;
    background-color: #fff;
    color: #757575;
    border-radius: 3px;
    padding: 6px 9px;
    top: 18px;
    z-index: 2;
    position: absolute;
}

.DayPickerNavigation__prev {
    left: 22px;
}

.DayPickerNavigation__next {
    right: 22px;
}

.DayPickerNavigation__prev img,
.DayPickerNavigation__next img {
  width: 15px;
}

.DayPickerNavigation__prev:focus,
.DayPickerNavigation__prev:hover,
.DayPickerNavigation__next:focus,
.DayPickerNavigation__next:hover {
    border: 1px solid #c4c4c4;
}

.DayPickerNavigation__prev:active,
.DayPickerNavigation__next:active {
    background: #f2f2f2;
}
</style>