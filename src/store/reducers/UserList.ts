import {
  getUserList
} from '../actionType'
import { UserListActionTypes } from '../types'

const UserListReducer = (state = {}, action: UserListActionTypes) => {
  switch (action.type) {
    case getUserList: {
      const data = action.data && action.data.length && action.data[0] && action.data[0].chats || [] 
      // const StarredChats = data.filter((chat: any) => chat.starred === 'true')
      return data
    }
    default:
      return []
  }
}

export { UserListReducer }