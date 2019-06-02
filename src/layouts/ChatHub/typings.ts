import { ChatHeaderProps } from '../../components/Molecules'

interface ChatWrapperProps extends ChatHeaderProps {
    width?: string
    height?: string
    borderColor?: string
    borderDimension?: string
    borderRadius?: string
    top?: string
    bottom?: string
    left?: string
    right?: string
}
interface LayoutProps {
    screen: string
    type: string
    chatId: string
}

export { ChatWrapperProps, LayoutProps }