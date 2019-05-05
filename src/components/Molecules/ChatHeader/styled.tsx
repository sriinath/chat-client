import styled, { css } from 'styled-components'
import { ChatHeaderStyleProps } from './typings'

const ChatHeaderWrapper = styled.div`
    ${(props: ChatHeaderStyleProps) => css`
        width: ${props.headerWidth || '100%'};
        height: ${props.headerHeight || 'auto'};
        background-color: ${props.headerBackgroundColor || '#fff'};
        color: ${props.headerColor || '#000'};
        display: flex;
        justify-content: space-around;
        align-items: center;
        box-sizing: border-box;
        min-width: min-content;
    `}
`
const SearchIcon = styled.div`
    font-family: FontAwesome;
    font-size: 16px;
    &::before {
        content: "\f002";
    }
`
const GroupIcon = styled.div`
    font-family: FontAwesome;
    font-size: 16px;    
    &::before {
        content: "\f0c0";
    }
`
const UserIcon = styled.div`
    font-family: FontAwesome;
    font-size: 16px;
    &::before {
        content: "\f007";
    }
`
export {
    ChatHeaderWrapper,
    SearchIcon,
    GroupIcon,
    UserIcon
}