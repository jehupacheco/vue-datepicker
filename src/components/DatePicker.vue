<template>
  <div>
    <div :class="inputWrapperClass">
      <input type="text" :name="name" @click.stop="showCalendar" :value="state.displayValue" :class="inputClass">
    </div>
    <calendar-month-wrapper :month="state.date"
                            v-show="displayCalendar"
                            :onDateChange="changeDate"
                            :minDate="minDate"
                            :maxDate="maxDate">
    </calendar-month-wrapper>
  </div>
</template>

<script>
import CalendarMonthWrapper from './CalendarMonthWrapper'
import moment from 'moment'

export default {
  name: 'date-picker',
  props: {
    name: {
      type: String,
      default: ''
    },
    date: {
      default () {
        return moment()
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
    },
    format: {
      type: String,
      default: 'YYYY/MM/DD'
    },
    displayValue: {
      type: String,
      default: ''
    },
    inputWrapperClass: {
      type: String,
      default: ''
    },
    inputClass: {
      type: String,
      default: ''
    }
  },
  components: {
    'calendar-month-wrapper': CalendarMonthWrapper
  },
  methods: {
    showCalendar () {
      this.displayCalendar = true
    },
    hideCalendar () {
      this.displayCalendar = false
    },
    changeDate (date) {
      this.state.date = moment(date)
      this.state.displayValue = this.state.date.format(this.format)
    }
  },
  data () {
    return ({
      displayCalendar: false,
      state: {
        date: this.date,
        displayValue: this.displayValue
      }
    })
  },
  created () {
    window.addEventListener('click', this.hideCalendar)
  },
  destroyef () {
    window.removeEventListener('click', this.hideCalendar)
  }
}
</script>