import * as React from 'react'
import { ChatWrapper } from './styled'
import { UserList } from '..'
const ChatHub = (props: any) => {
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

export { ChatHub }