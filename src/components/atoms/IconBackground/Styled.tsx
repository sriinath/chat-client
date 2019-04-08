import Styled from 'styled-components'
import { css } from 'styled-components'
import { IconBackgroundProps } from './typings'

const BackgroundElement = Styled.div `
    ${(props: IconBackgroundProps) => css`
        background-color: ${props.backgroundColor || 'rgb(19, 170, 82)'};
        width: ${props.width || '60px'};
        height: ${props.height || '60px'};
        border-radius : ${props.isRectangular ? 'none' : '50%'};
    `}
    ${(props: IconBackgroundProps) => props.isFixed ? css`
        position: fixed;
        left: ${props.left || 'auto'};
        right: ${props.right || 'auto'};
        top: ${props.top || 'auto'};
        bottom: ${props.bottom || 'auto'};
    `: css`
        position: relative;
    `}
`

export { BackgroundElement }