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
    const { toggleViews } = props
    return (
        <>
            {props.isGroupIconAvailable ? <div onClick={e => toggleViews('group')}>{props.renderGroupIcon()}</div> : ''}
            {props.isUserIconAvailable ? <div onClick={e => toggleViews('person')}>{props.renderUserIcon()}</div> : ''}
            {props.isSearchIconAvailable ? <div onClick={e => toggleViews('search')}>{props.renderSearchIcon()}</div> : ''}
        </>
    )
}

export {
    defaultRenderGroupsIcon,
    defaultRenderSearchIcon,
    defaultRenderUserIcon,
    defaultRenderWrapper
}