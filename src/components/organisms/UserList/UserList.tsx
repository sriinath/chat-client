import * as React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../store/reducer'
import { SocketContext } from '../../../context/Socket'
import { UserListAction } from '../../../store/actions'
import { StyledChatListBlock } from './styled'
import { UserList, ChatType } from '../../../store/types'
class UserListChat extends React.Component<any> {
    static contextType = SocketContext
    socket: SocketIOClient.Socket
    constructor(props: any) {
        super(props)
    }
    bindUserListEvents() {
        this.socket.on('userData', (data: [ UserList ]) => {
            this.props.dispatch(UserListAction(data))
        })
    }
    componentDidMount() {
        this.socket = this.context
        this.bindUserListEvents()
        this.socket.emit('get_chat_list')
    }
    render() {
        const { data, headerHeight, ...remainingProps } = this.props
        const favoritesChat = data.filter((chat: ChatType) => chat.starred === true)
        return <StyledChatListBlock list={favoritesChat} headerHeight={headerHeight} {...remainingProps} />
    }
}
const mapStateToProps = (state: AppState) => ({
    data: state.UserListReducer
})
export default connect(mapStateToProps)(UserListChat)
export { UserListChat }