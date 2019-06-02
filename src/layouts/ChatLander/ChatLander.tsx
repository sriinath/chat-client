import * as React from 'react'
import { ChatHeader } from '../../components/Molecules'
import { UserList } from '../../components/organisms'
import { ChatLanderProps } from './typings'

const ChatLander = React.forwardRef((props: ChatLanderProps, ref: React.Ref<HTMLDivElement>) => {
    const {
        layout,
        ...remainingProps
    } = props
    const { type, ...remainingLayout } = layout
    const { toggleViewClickHandler } = remainingProps

    return <>
        <ChatHeader
            forwardedRef={ref}
            toggleViews={(view: string) => toggleViewClickHandler({ type: view, ...remainingLayout })}
        />
        {type === 'person' && <UserList chatBlockHandler={(chatId: string) => toggleViewClickHandler({ type: 'person', screen: 'messageList', chatId })} {...remainingProps}  />}
        {type === 'group' && <div>Group page is under construction</div>}
        {type === 'search' && <div>Search page is under construction</div>}
    </>
})

export { ChatLander }