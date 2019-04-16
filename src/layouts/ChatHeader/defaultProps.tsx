import * as React from 'react'
import { ChatHeaderProps } from './typings';
import {
    SearchIcon,
    GroupIcon,
    UserIcon
} from './styled'
const defaultRenderGroupsIcon = () => <GroupIcon />
const defaultRenderUserIcon = () => <UserIcon />
const defaultRenderSearchIcon = () => <SearchIcon />
const defaultRenderWrapper = (props: ChatHeaderProps) => {
    return (
        <>
            {props.isGroupIconAvailable ? props.renderGroupIcon() : ''}
            {props.isUserIconAvailable ? props.renderUserIcon() : ''}
            {props.isSearchIconAvailable ? props.renderSearchIcon() : ''}
        </>
    )
}

export {
    defaultRenderGroupsIcon,
    defaultRenderSearchIcon,
    defaultRenderUserIcon,
    defaultRenderWrapper
}