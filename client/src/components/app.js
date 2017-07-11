import React,{ Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './home';
import Member from './member';
import Legislation from './legislation';


class App extends Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path = '/member/:name' component={Member}/>
                <Route path = '/legislation/:keyword' component={Legislation}/>
            </Switch>
        )
    }
}

export default App;

