import * as React from "react";
import * as ReactDOM from "react-dom";
import * as io from 'socket.io-client';
import { IconBackground, ChatMessage, Input } from './components/atoms'
import { ChatListBlock } from './components/organisms'
import { ChatBlockProps } from './components/Molecules'
// const socket = io('http://localhost:3000');

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
            <>
                <IconBackground isFixed={true} />
                <ChatListBlock list={...list} userNameEllipsis={true}/>
                <ChatMessage message='hello world' />
                <ChatMessage message='hello world' leftAligned={false} />
                <Input value='hi'/>
            </>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);