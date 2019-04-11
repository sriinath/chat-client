import * as React from 'react'
import { ChatWrapper } from './styled'
import { UserList } from '../'
const ChatBot = (props: any) => {
    const {
        width,
        height,
        top
    } = props
    return (
        <ChatWrapper {...props} >
            <UserList {...props} />
        </ChatWrapper>
    )
}

export { ChatBot }