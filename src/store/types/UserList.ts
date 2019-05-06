interface UserListActionTypes {
    type: string
    data?: UserList[]
}
interface ChatType {
    chatId: string
    recipientUserName: string
    starred?: 'true' | 'false'
}
interface UserList {
    userName: string
    chats?: ChatType[]
}
export {
    UserListActionTypes,
    UserList
}