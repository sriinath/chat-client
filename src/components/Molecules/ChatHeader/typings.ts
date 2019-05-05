import { ReactNode } from "react";
interface ChatHeaderProps extends ChatHeaderStyleProps, ChatHeaderRenderEvents {
    isSearchIconAvailable?: boolean
    isUserIconAvailable?: boolean
    isGroupIconAvailable?: boolean
}
interface ChatHeaderStyleProps {
    headerWidth?: string
    headerHeight?: string
    headerBackgroundColor?: string
    headerColor?: string
}
interface ChatHeaderRenderEvents {
    renderWrapper?: (props: ChatHeaderProps) => ReactNode
    renderGroupIcon?: () => ReactNode
    renderUserIcon?: () => ReactNode
    renderSearchIcon?: () => ReactNode
}
export {
    ChatHeaderProps,
    ChatHeaderStyleProps,
    ChatHeaderRenderEvents
}