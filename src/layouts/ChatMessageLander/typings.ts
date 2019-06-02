import { LayoutProps } from '../ChatHub'

interface ChatMessageLanderProps { 
    headerHeight: string
    layout: LayoutProps
    backClickEvent: (layout: LayoutProps) => void
}

export { ChatMessageLanderProps }
