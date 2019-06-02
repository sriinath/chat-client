import * as React from 'react'
import { UserMessageHeader } from '../../components/Molecules'
import { UserMessage } from '../../components/organisms'
import { ChatMessageLanderProps } from './typings'

const ChatMessageLander = React.forwardRef((props: ChatMessageLanderProps, ref: React.Ref<HTMLDivElement>) => {
    const { headerHeight, backClickEvent, layout } = props
    const { type, chatId } = layout
    return <>
        <UserMessageHeader
            name='srinath'
            forwardedRef={ref}
            backClickHandler={(e: EventTarget) => backClickEvent({ screen: 'landing', type, chatId })}
        />
        <UserMessage {...props} chatId={chatId} headerHeight={headerHeight} skipUserName={true} />
    </>
})

export { ChatMessageLander }