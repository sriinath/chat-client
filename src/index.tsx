import * as React from "react";
import * as ReactDOM from "react-dom"
import { IconBackground, ChatMessage, Input } from './components/atoms'
import { ChatListBlock } from './components/organisms'
import { ChatBlockProps } from './components/Molecules'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducer'
import { ChatBot } from './layouts'
import { SocketProvider } from './context/Socket'
import thunkMiddleware from 'redux-thunk'
const store = createStore(reducer, applyMiddleware(thunkMiddleware))

const list: ChatBlockProps[] = [
    {
        userName:'srinath',
        message:'hi',
        date:new Date()
    },
    {
        userName:'virat',
        message:'hello',
        date:new Date()
    }
]
class App extends React.Component {
    render() {
        return (
            <SocketProvider url='localhost:3000'>
                {/* <IconBackground isFixed={true} />
                <ChatListBlock list={...list} userNameEllipsis={true}/>
                <ChatMessage message='hello world' />
                <ChatMessage message='hello world' leftAligned={false} />
                <Input value='hi'/> */}
                <ChatBot
                    width='250px'
                    height='400px'
                    top={'30px'}
                    right={'10px'}
                    chatListSkipBorderTop={true}
                    chatListSkipBorderLeft={true}
                    chatListSkipBorderRight={true} />
            </SocketProvider>
        )
    }
}


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);