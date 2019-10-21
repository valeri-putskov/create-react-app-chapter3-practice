import React, {Component} from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
    state = {
        usernames: [
            'user1',
            'user2',
            'user3',
        ]
    };

    changeUsername = (event) => {
        this.setState({
            usernames: [
                event.target.value,
                'user2',
                'user3',
            ]
        });
    };

    render() {
        return (
            <div className="App">
                <UserInput handler={this.changeUsername} initialValue={this.state.usernames[0]}/>
                <UserOutput username={this.state.usernames[0]}/>
                <UserOutput username={this.state.usernames[1]}/>
                <UserOutput username={this.state.usernames[2]}/>
            </div>
        );
    }
}

export default App;
