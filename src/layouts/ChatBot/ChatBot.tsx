import * as React from 'react'
import { ChatWrapper } from './styled'
import { UserList } from '../'
const ChatBot = (props: any) => {
    return (
        <ChatWrapper width='250px' height='400px'>
            <UserList />
        </ChatWrapper>
    )
}

export { ChatBot }