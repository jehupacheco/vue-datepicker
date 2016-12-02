<template>
  <div class="hello">
    <date-picker :minDate="minDate" :maxDate="maxDate" :value="value"></date-picker>
  </div>
</template>

<script>
import DatePicker from './DatePicker'
import moment from 'moment'

export default {
  name: 'hello',
  components: {
    'date-picker': DatePicker
  },
  data () {
    return ({
      value: moment('2016-10-30'),
      minDate: moment('2016-10-20'),
      maxDate: moment('2017-01-20')
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
