import * as React from 'react'
import { ChatMessageProps } from './typings'
import { MessageElement, MessageContainer } from './styled'

const ChatMessage: React.SFC<ChatMessageProps> = (props) => {
    return (
        <MessageContainer {...props}>
            <MessageElement>{props.message}</MessageElement>
        </MessageContainer>
    )
}
ChatMessage.defaultProps = {
    leftAligned: true
}

export { ChatMessage }