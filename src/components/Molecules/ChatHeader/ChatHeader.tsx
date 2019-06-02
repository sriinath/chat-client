import * as React from 'react'
import { ChatHeaderWrapper } from './styled'
import { ChatRefProps } from './typings';
import {
    defaultRenderGroupsIcon,
    defaultRenderSearchIcon,
    defaultRenderUserIcon,
    defaultRenderWrapper
} from './defaultProps'

const ChatHeader = (props: ChatRefProps) => {
    const {
        renderWrapper,
        headerWidth,
        headerHeight,
        headerBackgroundColor,
        headerColor,
        forwardedRef,
        ...remainingProps
    } = props
    const headerProps = {
        headerHeight,
        headerWidth,
        headerBackgroundColor,
        headerColor
    }
    return <ChatHeaderWrapper ref={forwardedRef} {...headerProps} >
        {renderWrapper(remainingProps)}
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