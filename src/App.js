import React from 'react';

import Axios from 'axios';


export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            friends: [],
            name: '',
            age: 0,
        }
    }

    componentDidMount() {
        console.log("message 1");
        Axios.get('/api/people')
            .then((response) => {
                console.log("message 2");
                this.setState({
                    friends: response.data,
            })})
            .catch(error => console.error(error));
        console.log("message 3");
    }

    componentDidUpdate() {

    }

    onClick() {
        const newPerson = {
            name: this.state.name,
            age: this.state.age
        };

        Axios.post('/api/people', newPerson)
            .then(() => {
                return Axios.get('/api/people')
            })
            .then(response => 
                this.setState({
                    friends: response.data,
            }))
            .catch(error => console.error(error))
    }

    render() {

        const renderedFriends = [];

        for(let i = 0; i < this.state.friends.length; i++ ){
            const friend = this.state.friends[i];
            renderedFriends.push(
                <div className="friend">
                    {friend.name} - {friend.id} - {friend.age}
                </div>
            )
        }

        return (

            <div>
                <h1>Hello, these are my friends</h1>
                {renderedFriends}
                <div>
                    {JSON.stringify(this.state.friends)}
                </div>
                <label >Name:</label>
                <input type="text" value={this.state.name} onChange={e => this.setState({name: e.target.value})}></input>
                <label >Age:</label>
                <input type="number" value={this.state.age} onChange={e => this.setState({age: e.target.value})}></input>
                <button onClick={() => this.onClick()}>Add New Friend</button>
            </div>

        )
    }

}
