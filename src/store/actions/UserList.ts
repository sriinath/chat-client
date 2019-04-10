import { getUserList } from '../actionType'
import { UserList } from '../types'

const UserListAction = () : UserList => {
    console.log('in action')
    return {
        type: getUserList,
        data: [{
            userName: 'karthikeyan'
        }]
    }
}

export { UserListAction }