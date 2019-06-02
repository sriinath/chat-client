import * as React from 'react'
import { SocketContext } from '../../../context/Socket'
import { connect } from 'react-redux'
import { AppState } from '../../../store/reducer'
import { UserListAction } from '../../../store/actions'
import { ChatListBlock } from '../ChatListBlock'

class UserMessageList extends React.Component<any> {
    static contextType = SocketContext
    socket: SocketIOClient.Socket
    constructor(props: any) {
        super(props)
    }
    bindChatEvents() {
        this.socket.on('new_chat', (data: any) => {
            this.props.dispatch(UserListAction(data))
        })
    }
    componentDidMount() {
        const { chatId } = this.props
        this.socket = this.context
        this.bindChatEvents()
        this.socket.emit('new_chat', chatId)
    }
    render() {
        const { data, headerHeight, skipUserName } = this.props
        const { userName } = data
        return <ChatListBlock
                list={data}
                headerHeight={headerHeight}
                profileUserName={userName}
                skipUserName={skipUserName}
            />
    }
}

const mapStateToProps = (state: AppState) => ({
    data: state.UserListReducer
})
export default connect(mapStateToProps)(UserMessageList)

export { UserMessageList }