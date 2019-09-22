export function calculateDate (date) {
  var monthShortNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]

  var publish_date =
    date.getDate() +
    ' ' +
    monthShortNames[date.getMonth()].toUpperCase() +
    ' ' +
    date.getFullYear() +
    ''

  return publish_date
}
