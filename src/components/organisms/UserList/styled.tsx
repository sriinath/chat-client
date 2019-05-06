import styled from 'styled-components'
import { ChatListBlock } from '../../organisms'
import { ChatBlockWrapper } from '../../Molecules'
const StyledChatListBlock = styled(ChatListBlock)`
    ${ChatBlockWrapper} {
        grid-template-columns: 1fr;
    }
`

export { StyledChatListBlock }