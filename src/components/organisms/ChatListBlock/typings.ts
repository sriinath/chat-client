import {
    ChatBlockProps
} from '../../Molecules'
import { Ref } from 'react';

interface ChatListProps extends ChatListStyleProps {
    list: ChatBlockProps[]
    messageEllipsis?: boolean
    userNameEllipsis?: boolean
    profileUserName?: string
    skipUserName?: boolean
}
interface ChatListStyleProps {
    headerHeight: string
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