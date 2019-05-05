import * as React from 'react'
import { useEffect, useState, Ref } from 'react'
import { ChatWrapper } from './styled'
import {
    UserMessageHeader,
    ChatHeader
} from '../../components/Molecules'
import {
    UserMessage,
    UserList
} from '../../components/organisms'

const ref: Ref<HTMLDivElement> = React.createRef()
const ChatHub = (props: any) => {
    const {
        width,
        height,
        top
    } = props

    const [ headerHeight, setHeaderHeight ] = useState('0px')
    useEffect(() => {
        if(ref.current && ref.current.offsetHeight) {
            setHeaderHeight(ref.current.offsetHeight + 'px')
        }
    })

    return (
        <ChatWrapper {...props}>
            {/* <UserMessageHeader name='srinath' ref={ref} {...props} /> */}
            <ChatHeader />
            {/* <UserMessage {...props} headerHeight={headerHeight} skipUserName={true} /> */}
            <UserList headerHeight={headerHeight} {...props}/>
        </ChatWrapper>
    )
}

export { ChatHub }