import * as React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../store/reducer'
import { SocketContext } from '../../../context/Socket'
import { UserListAction } from '../../../store/actions'
import { StyledChatListBlock } from './styled'
import { UserList } from '../../../store/types';
const stubData: any = [{
    chats: [
        {
            recipientUserName: 'srinath',
            starred: true
        },
        {
            recipientUserName: 'srinath',
            starred: true
        },
        {
            recipientUserName: 'virat',
            starred: true
        },
        {
            recipientUserName: 'virat',
            starred: true
        },
        {
            recipientUserName: 'virat',
            starred: true
        },
        {
            recipientUserName: 'virat',
            starred: true
        },
        {
            recipientUserName: 'virat',
            starred: true
        }
    ]
}]
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
        return <StyledChatListBlock list={data} headerHeight={headerHeight} {...remainingProps} />
    }
}
const mapStateToProps = (state: AppState) => ({
    data: state.UserListReducer
})
export default connect(mapStateToProps)(UserListChat)
export { UserListChat }