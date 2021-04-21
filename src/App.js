import React from 'react';

import Axios from 'axios';


export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            friends: [],
            name: '',
            age: 0,
            users:[],
            username:'',
            password:''
        }
    }

    componentDidMount() {
        Axios.get('/api/login')
            .then((response) => {
                this.setState({
                    users: response.data,
            })})
            .catch(error => console.error(error));
    }

    componentDidUpdate() {
    }

    onClick() {
        const newPerson = { 
            "username": this.state.username,
            "password": this.state.password

        };

        console.log("newPerson:"+ JSON.stringify(newPerson));
        Axios.post('/api/login', newPerson)
            .then(() => {
                return Axios.get('/api/login')
            })
            .then(response => {
                console.log(JSON.stringify(response));
                this.setState({
                    users: response.data,
            })
            } 
            )
            .catch(error => console.error(error))
    }

    render() {
        const renderedFriends = [];
        for(let i = 0; i < this.state.users.length; i++ ){
            const user = this.state.users[i];
            renderedFriends.push(
                <div className="friend">
                    {user.username} - {user.password}
                </div>
            )
        }
        return (
            <div>
                <h1>Hello, these are my friends</h1>
                {/* {renderedFriends} */}
                <div>
                    {JSON.stringify(this.state.users)}
                </div>
                <label >Username:</label>
                <input type="text" value={this.state.username} onChange={e => this.setState({username: e.target.value})}></input>
                <label >Password:</label>
                <input type="text" value={this.state.password} onChange={e => this.setState({password: e.target.value})}></input>
                <button onClick={() => this.onClick()}>Add New User</button>
            </div>

        )
    }



    // onClick() {
    //     const newPerson = {
    //         name: this.state.name,
    //         age: this.state.age
    //     };

    //     Axios.post('/api/people', newPerson)
    //         .then(() => {
    //             return Axios.get('/api/people')
    //         })
    //         .then(response => 
    //             this.setState({
    //                 friends: response.data,
    //         }))
    //         .catch(error => console.error(error))
    // }

    // render() {

    //     const renderedFriends = [];

    //     for(let i = 0; i < this.state.friends.length; i++ ){
    //         const friend = this.state.friends[i];
    //         renderedFriends.push(
    //             <div className="friend">
    //                 {friend.name} - {friend.id} - {friend.age}
    //             </div>
    //         )
    //     }

    //     return (

    //         <div>
    //             <h1>Hello, these are my friends</h1>
    //             {renderedFriends}
    //             <div>
    //                 {JSON.stringify(this.state.friends)}
    //             </div>
    //             <label >Name:</label>
    //             <input type="text" value={this.state.name} onChange={e => this.setState({name: e.target.value})}></input>
    //             <label >Age:</label>
    //             <input type="number" value={this.state.age} onChange={e => this.setState({age: e.target.value})}></input>
    //             <button onClick={() => this.onClick()}>Add New Friend</button>
    //         </div>

    //     )
    // }

}
