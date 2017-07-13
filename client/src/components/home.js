import React,{Component} from 'react';
import '../stylesheets/css/index.css';
import SearchComponent from './search';

let kapitol_logo = require('../images/kapitol_logo.png');


class Home extends Component{

    componentDidMount(){
        document.title = "Home | Kapitol"
    }

    render(){
        return(
            <div id='fp-container' className="page-mid">
                <img src={kapitol_logo} alt=""/>
                <div id="fp-search">
                    <SearchComponent/>
                </div>
            </div>
        )
    }
}


export default Home;
