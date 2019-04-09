import * as React from 'react'
import { ChatBlock } from '../../Molecules'
import { ChatListProps } from './typings'

const ChatListBlock = (props: ChatListProps) => {
    const { list, ...remainingProps } = props
    return <>{list.map((item, index) => <ChatBlock {...item} key={index} {...remainingProps} />)}</>
}

export { ChatListBlock }