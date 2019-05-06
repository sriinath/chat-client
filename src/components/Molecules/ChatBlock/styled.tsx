import Styled, { css } from 'styled-components'
import { Text } from '../../atoms/Text'

const ChatBlockWrapper: any = Styled.div`
    display: grid;
    grid-template-columns: auto auto;
    box-sizing: border-box;
    ${(props: any) => props.skipUserName ? css`
            float: ${props.recipientUserName && props.profileUserName && props.recipientUserName === props.profileUserName && 'right' || 'left'};
            width: ${props.profileUserName ? '80%' : '100%'};
        ` : ``
    }
`
const StyledText = Styled(Text) `
    display: grid;
    justify-content: end;
`
export {
    ChatBlockWrapper,
    StyledText
}