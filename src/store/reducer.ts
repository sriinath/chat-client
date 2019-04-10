import { combineReducers } from 'redux';
import * as Reducers from './reducers'

const ChatApp = combineReducers(Reducers)

export default ChatApp
export { ChatApp }
export type AppState = ReturnType<typeof ChatApp>