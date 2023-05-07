import dayjs from 'dayjs'
import useGetWindowSize from '@/utils/hooks/useGetWindowSize'
import 'dayjs/locale/tr'

export const getFormattedDate = (timestamp: number) => {
  return dayjs.unix(timestamp).locale('tr').format('D MMM ddd HH:mm')
}


export const getBreakPoint = (breakPoint: 'SM' | 'MD') => {
  const size = useGetWindowSize()

  if (breakPoint === 'SM') {
    const SM = size === 'SM' || size === 'MD'

    return SM
  }
}
