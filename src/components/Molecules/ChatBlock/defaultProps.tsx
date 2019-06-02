import * as React from 'react'
import { Text } from '../../atoms'
import {
    ChatBlockWrapper,
    StyledText
} from './styled'
import { ChatBlockProps } from './typings'
const defaultRenderUserName = ({ userName, userNameEllipsis }: { userName: string, userNameEllipsis: boolean }) => {
    return userName ? <Text isHeading={false} isTitle={true} text={userName} ellipsis={userNameEllipsis} /> : null
}
const defaultRenderMessage = ({ message, MessageEllipsis }: { message: string, MessageEllipsis: boolean} ) => {
    return message ? <Text isHeading={false} isTitle={false} text={message} ellipsis={MessageEllipsis} /> : null
}
const defaultRenderNotificationCount = (notificationCount: number) => {
    return notificationCount ? <StyledText isHeading={false} isTitle={false} text={notificationCount.toString()} /> : null
}
const defaultRenderWrapper = (props: ChatBlockProps) => {
    const {
        skipUserName,
        userName,
        chatId,
        recipientUserName,
        renderUserName,
        date,
        userNameEllipsis,
        MessageEllipsis,
        renderDate,
        message,
        renderMessage,
        notificationCount,
        renderNotificationCount,
        chatBlockHandler,
        profileUserName
    } = props
    return (
        <ChatBlockWrapper
            onClick={(e: EventTarget) => chatBlockHandler(chatId)}
            profileUserName={profileUserName}
            recipientUserName={recipientUserName}
            skipUserName={skipUserName}
        >
            {skipUserName ? <div></div> : userName && renderUserName({ userName, userNameEllipsis }) || recipientUserName && renderUserName({ userName: recipientUserName, userNameEllipsis })}
            {/* Added a empty div for notification count as this is inside grid and need a dom for proper UI*/}
            {notificationCount && renderNotificationCount(notificationCount) || <div></div>}
            {message && renderMessage({ message, MessageEllipsis })}
            {date && renderDate(date)}
        </ChatBlockWrapper>
    )
}

export {
    defaultRenderMessage,
    defaultRenderUserName,
    defaultRenderWrapper,
    defaultRenderNotificationCount
}