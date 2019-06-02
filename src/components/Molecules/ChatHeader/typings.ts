import {
    ReactNode,
    Ref
} from "react"

interface ChatHeaderProps extends ChatHeaderStyleProps, ChatHeaderRenderEvents, ChatHeaderEventHandlers {
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
interface ChatRefProps extends ChatHeaderProps {
    forwardedRef: Ref<HTMLDivElement>
}
interface ChatHeaderRenderEvents {
    renderWrapper?: (props: ChatHeaderProps) => ReactNode
    renderGroupIcon?: () => ReactNode
    renderUserIcon?: () => ReactNode
    renderSearchIcon?: () => ReactNode
}
interface ChatHeaderEventHandlers {
    toggleViews: (view: string) => void
}
export {
    ChatHeaderProps,
    ChatHeaderStyleProps,
    ChatHeaderRenderEvents,
    ChatRefProps
}