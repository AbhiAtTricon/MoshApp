import React, { Component } from 'react';
import Counter from './counter';
import { BrowserRouter as Router,Link} from 'react-router-dom';
import Route  from 'react-router-dom/Route';
import PersonList from './PersonList';
import PersonInput from './PersonInput';

const User = ({match}) => {
    return (<h1>Welcome {match.params.username}</h1>);
}

class Counters extends Component {
    state = { 
        counters:[
            {id:1, value:2},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0},
        ]
     }

     handleDelete = (counterId) => {
         //console.log("Clicked id is ", counterId);
         const counters = this.state.counters.filter(c => c.id!==counterId);
         this.setState({counters : counters});
     }

    render() { 
        return ( 
        <div>
        <Router>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/user/Abhi">User</Link></li>
            </ul>

            <Route path="/" exact strict render = { () => {
                return (<h1>Welcome Home</h1>)
            }
            }
            />
            <Route path="/about" exact strict render = {() => {
                return (<h1>Welcome to about</h1>)
            }} />
            <Route path="/user/:username" exact strict component = {User}>

            </Route>
        </Router>

        <div>
            {this.state.counters.map(counter => <Counter key = {counter.id} 
            onDelete = {this.handleDelete}
            value = {counter.value} 
            id = {counter.id}/>)}
        </div>

        <PersonInput />
        <PersonList />
        </div>
         );
    }
}
 
export default Counters;