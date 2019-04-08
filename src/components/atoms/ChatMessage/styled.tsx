import Styled, { css } from 'styled-components'
import { ChatMessageProps } from './typings'

const MessageContainer = Styled.div`
    margin: 5px;
    display: flex;
    width: auto
    ${(props: ChatMessageProps) => css`
        color: ${props.color || '#000'};
        background-color: ${props.backgroundColor || '#fff'};
        justify-content: ${props.leftAligned ? 'flex-start' : 'flex-end'}
    `}
`
const MessageElement = Styled.span`
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #000;
    width: fit-content;
`

export { MessageContainer, MessageElement }