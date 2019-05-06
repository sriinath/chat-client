import styled, { css } from 'styled-components'
import { Text } from '../../atoms'
import { ChatHeaderStyleProps } from '../ChatHeader'

const UserMessageWrapper = styled.div`
    ${(props: ChatHeaderStyleProps) => css`
        width: ${props.headerWidth || '100%'};
        height: ${props.headerHeight || 'auto'};
        background-color: ${props.headerBackgroundColor || '#fff'};
        color: ${props.headerColor || '#000'};
    `}
    display: flex;
    align-items: center;
    box-sizing: border-box;
    min-width: min-content;
`
const BackIcon = styled.div`
    font-family: FontAwesome;
    font-size: 16px;
    &::before {
        content: "\f060";
    }
    padding: 0px 10px;
`
const StyledText = styled(Text)`
    margin: 0px;
`

export {
    UserMessageWrapper,
    BackIcon,
    StyledText
}