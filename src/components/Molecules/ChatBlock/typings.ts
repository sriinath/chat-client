import { ReactNode } from "react";

interface ChatBlockProps extends ChatBlockEvents {
    chatId?: string
    message?: string
    userName: string
    skipUserName?: boolean
    profileUserName?: string
    recipientUserName?: string
    date?: Date
    notificationCount?: number
    userNameEllipsis?: boolean
    MessageEllipsis?: boolean
}
interface ChatBlockEvents {
    renderWrapper?: (props: ChatBlockProps) => ReactNode
    renderUserName?: ( props: { userName: string, userNameEllipsis: boolean } ) => ReactNode
    renderMessage?: (props: { message: string, MessageEllipsis: boolean }) => ReactNode
    renderDate?: (props: Date) => ReactNode
    renderNotificationCount?: (props: number) => ReactNode
    chatBlockHandler?: (chatId: string) => void
}

export { ChatBlockProps, ChatBlockEvents }