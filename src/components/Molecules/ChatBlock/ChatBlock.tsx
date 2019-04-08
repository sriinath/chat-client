import * as React from 'react'
import { useEffect } from 'react'
import { ChatBlockProps } from './typings'
import {
    defaultRenderMessage,
    defaultRenderUserName,
    defaultRenderWrapper,
    defaultRenderNotificationCount
} from './defaultProps'
import { ChatDate } from '../../atoms'

const ChatBlock: React.FC<ChatBlockProps> = (props) => {
    const { renderWrapper } = props
    return (
        <>
            {renderWrapper(props)}
        </>
    )
}
ChatBlock.defaultProps = {
    renderMessage: defaultRenderMessage,
    renderUserName: defaultRenderUserName,
    renderWrapper: defaultRenderWrapper,
    renderDate: ChatDate,
    renderNotificationCount: defaultRenderNotificationCount
}

export { ChatBlock }