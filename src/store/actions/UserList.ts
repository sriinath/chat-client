import { getUserList } from '../actionType'
import { UserList } from '../types'

const UserListAction = (UserData: [{ userName?: string }]) : UserList => {
    console.log('in actions')
    return {
        type: getUserList,
        data: UserData || []
    }
}

export { UserListAction }