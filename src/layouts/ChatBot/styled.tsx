import styled, { css } from 'styled-components'
import { ChatWrapperProps } from './typings'

const ChatWrapper = styled.div`
    position: relative;
    ${(props: ChatWrapperProps) => css`
        width: ${props.width || '100%'};
        height: ${props.height || '100%'};
        border: ${props.borderDimension || '1px'} solid ${props.borderColor || '#a2a2a2'};
        border-radius: ${props.borderRadius || 'none'};
    `}
`

export { ChatWrapper }