import { getUserList } from '../actionType'
import { UserList } from '../types'

const UserListReducer = (state = {}, action: UserList) => {
  switch (action.type) {
    case getUserList:
      return action.data
    default:
      return state
  }
}

export { UserListReducer }