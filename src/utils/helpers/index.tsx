import dayjs from 'dayjs'
import 'dayjs/locale/tr'

export const getFormattedDate = (timestamp: number) => {
  return dayjs.unix(timestamp).locale('tr').format('D MMM ddd HH:mm')
}
