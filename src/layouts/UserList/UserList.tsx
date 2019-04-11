import * as React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../store/reducer'
import { SocketContext } from '../../context/Socket'
import { UserListAction } from '../../store/actions'
import { ChatListBlock } from '../../components/organisms/ChatListBlock'

class UserListChat extends React.Component<any> {
    static contextType = SocketContext
    socket: SocketIOClient.Socket
    constructor(props: any) {
        super(props)
    }
    bindUserListEvents() {
        this.socket.on('userData', (data: [ {userName: string} ]) => {
            this.props.dispatch(UserListAction(data))
        })
    }
    getUserList() {
        this.socket.emit('get_chat_list')
    }
    componentDidMount() {
        this.socket = this.context
        this.bindUserListEvents()
        this.getUserList()
    }
    render() {
        const { data, ...remainingProps } = this.props
        const chats = data && data[0] && data[0].chats || []
        // filter all the chats starred by user seprately as array from all previous chats
        const StarredChats = chats.filter((chat: any) => chat.starred === true)
        return <ChatListBlock list={StarredChats} {...remainingProps} />
    }
}
const mapStateToProps = (state: AppState) => ({
    data: state.UserListReducer
})
export default connect(mapStateToProps)(UserListChat)
export { UserListChat }