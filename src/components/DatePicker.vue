<template>
  <div>
    <div :class="`${inputWrapperClass} InputWrapper ${withCaret}`">
      <input type="text"
            :name="name"
            @click.stop="showCalendar"
            :value="state.displayValue"
            :class="`${inputClass} Input`">
      <calendar-month-wrapper :month="state.date"
                              v-show="displayCalendar"
                              :onDateChange="changeDate"
                              :minDate="minDate"
                              :maxDate="maxDate">
      </calendar-month-wrapper>
    </div>
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
    minDate: {
      default () {
        return moment().subtract(100, 'years')
      }
    },
    maxDate: {
      default () {
        return moment().add(100, 'years')
      }
    },
    format: {
      type: String,
      default: 'YYYY/MM/DD'
    },
    value: {
      default: null
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
  computed: {
    withCaret () {
      return (this.displayCalendar) ? 'withCaret' : ''
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
      if (date.isBetween(this.minDate, this.maxDate, 'day')) {
        this.state.date = moment(date)
        this.state.displayValue = this.state.date.format(this.format)
      }
    }
  },
  data () {
    let opt = {
      displayCalendar: false,
      state: {
        date: moment(),
        displayValue: ''
      }
    }

    if (this.value) {
      opt.state.date = moment(this.value)
      opt.state.displayValue = this.value.format(this.format)
    }

    return opt
  },
  created () {
    window.addEventListener('click', this.hideCalendar)
  },
  destroyed () {
    window.removeEventListener('click', this.hideCalendar)
  }
}
</script>

<style scoped>
.InputWrapper {
  border: 1px solid #cacccd;
  padding: 8px;
  position: relative;
}

.Input {
  width: 100%;
  border: 0;
}

.Input:focus {
  outline: 0;
}

.InputWrapper.withCaret::before, .InputWrapper.withCaret::after {
  content: "";
  display: inline-block;
  position: absolute;
  bottom: auto;
  border: 10px solid transparent;
  border-top: 0;
  left: 22px;
  z-index: 2;
}

.InputWrapper.withCaret::before {
    top: 40px;
    border-bottom-color: rgba(0,0,0,0.1);
}

.InputWrapper.withCaret::after {
    top: 41px;
    border-bottom-color: #fff;
}
</style>