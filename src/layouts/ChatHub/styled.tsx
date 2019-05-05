import styled, { css } from 'styled-components'
import { ChatWrapperProps } from './typings'

const ChatWrapper = styled.div`
    position: absolute;
    padding: 5px;
    ${(props: ChatWrapperProps) => css`
        width: ${props.width || '100%'};
        height: ${props.height || '100%'};
        border: ${props.borderDimension || '1px'} solid ${props.borderColor || '#a2a2a2'};
        border-radius: ${props.borderRadius || 'unset'};
        top: ${props.top || 'auto'};
        left: ${props.left || 'auto'};
        bottom: ${props.bottom || 'auto'};
        right: ${props.right || 'auto'}
    `}
    min-width: 320px;
    max-width: 100%;
`
export { ChatWrapper }