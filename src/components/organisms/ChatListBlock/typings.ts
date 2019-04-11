import {
    ChatBlockProps
} from '../../Molecules'

interface ChatListProps extends ChatListStyleProps {
    list: ChatBlockProps[]
    messageEllipsis?: boolean
    userNameEllipsis?: boolean
}
interface ChatListStyleProps {
    chatListBorderDimension?: string
    chatListBorderColor?: string
    chatListFontSize?: string
    chatListFontColor?: string
    chatListBackgroundColor?: string
    chatListSkipBorder?: boolean
    chatListSkipBorderLeft?: boolean
    chatListSkipBorderRight?: boolean
    chatListSkipBorderBottom?: boolean
    chatListSkipBorderTop?: boolean
}
export {
    ChatListProps,
    ChatListStyleProps
}