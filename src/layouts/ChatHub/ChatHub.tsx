import * as React from 'react'
import { useEffect, useState, Ref } from 'react'
import { ChatWrapper } from './styled'
import { LayoutProps } from './typings'
import {
    ChatLander,
    ChatMessageLander
} from '../'

const ref: Ref<HTMLDivElement> = React.createRef()

const ChatHub = (props: any) => {
    const {
        width,
        height,
        top
    } = props

    const [ headerHeight, setHeaderHeight ] = useState('0px')
    const [ currLayout, setLayout ] = useState({
        'screen': 'landing',
        'type': 'person',
        'chatId': ''
    })

    useEffect(() => {
        if(ref.current && ref.current.offsetHeight) {
            setHeaderHeight(ref.current.offsetHeight + 'px')
        }
    })

    return (
        <ChatWrapper {...props}>
            {currLayout.screen === 'messageList' ?
                <ChatMessageLander
                    headerHeight={headerHeight}
                    ref={ref}
                    layout={currLayout}
                    backClickEvent={(newLayout: LayoutProps) => setLayout(newLayout)}
                />
                :
                <ChatLander
                    headerHeight={headerHeight}
                    ref={ref}
                    layout={currLayout}
                    toggleViewClickHandler={(newLayout: LayoutProps) => setLayout(newLayout)}
                />
            }
        </ChatWrapper>
    )
}

export { ChatHub }