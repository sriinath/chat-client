import * as React from 'react'
import { Socket } from '../socket'
const SocketContext: React.Context<SocketIOClient.Socket> = React.createContext(new Socket().getSocket)
const { Provider, Consumer } = SocketContext

const SocketProvider = (props: React.PropsWithChildren<any>) => {
    const { children, url } = props
    const socket = new Socket(url)
    return (
        <Provider value={socket && socket.getSocket} >
            {children}
        </Provider>
    )
}

export { SocketProvider, Consumer as SocketConsumer, SocketContext }