import { getUserList } from '../actionType'
import { UserList, UserListActionTypes } from '../types'

const UserListAction = (UserData: [UserList]) : UserListActionTypes => {
    return {
        type: getUserList,
        data: UserData
    }
}

export { UserListAction }