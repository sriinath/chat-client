import * as React from 'react'
import { ChatHeaderWrapper } from './styled'
import { ChatHeaderProps } from './typings';
import {
    defaultRenderGroupsIcon,
    defaultRenderSearchIcon,
    defaultRenderUserIcon,
    defaultRenderWrapper
} from './defaultProps'

const ChatHeader = React.forwardRef((props: ChatHeaderProps, ref) => {
    const {
        renderWrapper,
        headerWidth,
        headerHeight,
        headerBackgroundColor,
        headerColor,
        ...remainingProps
    } = props
    const headerProps = {
        headerHeight,
        headerWidth,
        headerBackgroundColor,
        headerColor
    }
    return <ChatHeaderWrapper {...headerProps} >
        {renderWrapper(remainingProps)}
    </ChatHeaderWrapper>
})

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