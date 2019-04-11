import { getUserList } from '../actionType'
import { UserList } from '../types'

const UserListAction = (UserData: [{ userName?: string }]) : UserList => {
    return {
        type: getUserList,
        data: UserData || []
    }
}

export { UserListAction }