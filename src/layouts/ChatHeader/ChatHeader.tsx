import * as React from 'react'
import { ChatHeaderWrapper } from './styled'
import { ChatHeaderProps } from './typings';
import {
    defaultRenderGroupsIcon,
    defaultRenderSearchIcon,
    defaultRenderUserIcon,
    defaultRenderWrapper
} from './defaultProps'
const ChatHeader: React.FC<ChatHeaderProps> = (props) => {
    return <ChatHeaderWrapper>

    </ChatHeaderWrapper>
}

ChatHeader.defaultProps = {
    isSearchIconAvailable: true,
    isGroupIconAvailable: true,
    isUserIconAvailable: true,
    renderGroupIcon: defaultRenderGroupsIcon,
    renderSearchIcon: defaultRenderSearchIcon,
    renderUserIcon: defaultRenderUserIcon,
    renderWrapper: defaultRenderWrapper
}

export { ChatHeader }