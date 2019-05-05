import * as React from 'react'
import { ChatHeaderProps } from './typings';
import {
    SearchIcon,
    GroupIcon,
    UserIcon
} from './styled'
import { IconBackground } from '../../atoms'

const defaultRenderGroupsIcon = () => {
    return (
        <IconBackground
            isFixed={false}
            isRectangular={false}
        >
            <GroupIcon />
        </IconBackground>
    )
}
const defaultRenderUserIcon = () => {
    return(
        <IconBackground
            isFixed={false}
            isRectangular={false}
        >
            <UserIcon />
        </IconBackground>
    )
}
const defaultRenderSearchIcon = () => {
    return (
        <IconBackground
            isFixed={false}
            isRectangular={false}
        >
            <SearchIcon />
        </IconBackground>
    )
}
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