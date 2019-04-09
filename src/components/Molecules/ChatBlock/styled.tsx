import Styled from 'styled-components'
import { Text } from '../../atoms/Text'

const ChatBlockWrapper = Styled.div `
    display: grid;
    grid-template-columns: 1fr 80px;
`
const StyledText = Styled(Text) `
    display: grid;
    justify-content: end;
`
export {
    ChatBlockWrapper,
    StyledText
}