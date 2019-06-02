interface UserListActionTypes {
    type: string
    data?: UserList[]
}
interface ChatType {
    chatId: string
    recipientUserName: string
    starred?: boolean
}
interface UserList {
    userName: string
    chats?: ChatType[]
}
export {
    UserListActionTypes,
    UserList,
    ChatType
}