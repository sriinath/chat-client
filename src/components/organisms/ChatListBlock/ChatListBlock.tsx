import * as React from 'react'
import { ChatBlock } from '../../Molecules'
import { ChatListProps } from './typings'
import { ChatListWrapper } from './styled'

const ChatListBlock = (props: ChatListProps) => {
    const { list, ...remainingProps } = props
    return (
        <ChatListWrapper {...remainingProps}>
            {list.map((item, index) => <ChatBlock {...item} key={index} {...remainingProps} />)}
        </ChatListWrapper>
    )
}

export { ChatListBlock }