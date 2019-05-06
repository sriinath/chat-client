import * as React from "react";
import * as ReactDOM from "react-dom"
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducer'
import { ChatHub } from './layouts'
import { SocketProvider } from './context/Socket'
import thunkMiddleware from 'redux-thunk'
const store = createStore(reducer, applyMiddleware(thunkMiddleware))
import { Global } from './common'
class App extends React.Component {
    render() {
        return (
            <>
            <Global />
            <SocketProvider url='localhost:3000'>
                <ChatHub
                    profileUserName='srinath'
                    width='250px'
                    height='400px'
                    top={'30px'}
                    right={'10px'}
                    chatListBorderColor={'#f5f2f2'}
                    headerHeight='40px'
                    headerBackgroundColor='#443c3c'
                    headerColor='#a4a4a4'
                    chatListSkipBorderTop={true}
                    chatListSkipBorderLeft={true}
                    chatListSkipBorderRight={true}
                    userNameEllipsis={true}
                />
            </SocketProvider>
            </>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);