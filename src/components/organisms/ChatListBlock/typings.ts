import {
    ChatBlockProps
} from '../../Molecules'

interface ChatListProps {
    list: ChatBlockProps[]
    messageEllipsis?: boolean
    userNameEllipsis?: boolean
}

export { ChatListProps }