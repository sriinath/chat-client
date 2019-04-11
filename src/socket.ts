import * as io from 'socket.io-client'

class Socket {
    private socket: SocketIOClient.Socket
    constructor(url?: string) {
        if(url) {
            this.socket = io(url, {query : `userName=srinath`})
        }
    }
    get getSocket() {
        return this.socket
    }
}

export { Socket }