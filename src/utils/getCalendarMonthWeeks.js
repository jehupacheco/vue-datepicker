
export default function getCalendarMonthWeeks (month, enableOutsideDays) {
  // set utc offset to get correct dates in future (when timezone changes)
  const baseDate = month.clone()
  const firstOfMonth = baseDate.clone().startOf('month').hour(12)
  const lastOfMonth = baseDate.clone().endOf('month').hour(12)

  const currentDay = firstOfMonth.clone()
  let currentWeek = []
  const weeksInMonth = []

  // days belonging to the previous month
  for (let i = 0; i < currentDay.weekday(); i++) {
    const prevDay = enableOutsideDays && currentDay.clone().subtract(i + 1, 'day')
    currentWeek.unshift(prevDay)
  }

  /* eslint-disable no-unmodified-loop-condition */
  while (currentDay < lastOfMonth) {
    currentWeek.push(currentDay.clone())
    currentDay.add(1, 'd')

    if (currentDay.weekday() === 0) {
      weeksInMonth.push(currentWeek)
      currentWeek = []
    }
  }
  /* eslint-enable no-unmodified-loop-condition */

  // weekday() returns the index of the day of the week according to the locale
  // this means if the week starts on Monday, weekday() will return 0 for a Monday date, not 1
  if (currentDay.weekday() !== 0) {
    // days belonging to the next month
    for (let k = currentDay.weekday(), count = 0; k < 7; k++, count++) {
      const nextDay = enableOutsideDays && currentDay.clone().add(count, 'day')
      currentWeek.push(nextDay)
    }

    weeksInMonth.push(currentWeek)
  }

  return weeksInMonth
}
