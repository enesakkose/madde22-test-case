import IcoMoon, { type IconProps } from 'react-icomoon'
import iconSet from './selection.json'

const Icon = ({ size = '20px', ...props }: IconProps) => (
  <IcoMoon iconSet={iconSet} size={size} {...props} />
)

export default Icon