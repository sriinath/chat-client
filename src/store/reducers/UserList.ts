import { getUserList } from '../actionType'
import { UserList } from '../types'

const UserListReducer = (state = {}, action: UserList) => {
  console.log('in reducers')
  switch (action.type) {
        case getUserList:
          return action.data
        default:
          return state
    }
}

export { UserListReducer }