import React,{Component} from 'react';
import '../stylesheets/css/index.css';
import SearchComponent from './search';
import FooterComponent from './footer';

let kapitol_logo = require('../images/kapitol_logo.png');


class Home extends Component{

    componentDidMount(){
        document.title = "Home | Kapitol"
    }

    render(){
        return(
            <div id='fp-container'>
                <div className="page-mid">
                    <img src={kapitol_logo} alt=""/>
                    <div id="fp-search">
                        <SearchComponent/>
                    </div>
                </div>
                <FooterComponent/>
            </div>

        )
    }
}


export default Home;
