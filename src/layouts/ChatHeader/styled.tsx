import styled, { css } from 'styled-components'
import { ChatHeaderStyleProps } from './typings'

const ChatHeaderWrapper = styled.div`
    ${(props: ChatHeaderStyleProps) => css`
        width: ${props.width || '100%'};
        height: ${props.height || '40px'};
        background-color: ${props.backgroundColor || '#fff'};
        color: ${props.color || '#000'};
    `}
`
const SearchIcon = styled.div`
`
const GroupIcon = styled.div`
`
const UserIcon = styled.div`
    content: '&#xf007';
`
export {
    ChatHeaderWrapper,
    SearchIcon,
    GroupIcon,
    UserIcon
}