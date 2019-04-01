import * as React from "react";
import * as ReactDOM from "react-dom";
import * as io from 'socket.io-client';
const socket = io('http://localhost:3000');

class App extends React.Component {
    render(){
        return (
            <div>hello world</div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);