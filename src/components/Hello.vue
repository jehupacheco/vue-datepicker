<template>
  <div class="hello">
    <date-picker></date-picker>
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
      month: moment()
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
