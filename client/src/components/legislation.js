import React, {Component} from 'react';
import NavBar from './navbar';
import FooterComponent from './footer';

class Legislation extends Component{

    componentDidMount(){
        document.title = "Legislation | Kapitol"
    }

    render(){
        return(
            <div>
                <NavBar/>
                {
                    console.log(this.props.match.params.keyword)
                }
                <FooterComponent/>
            </div>
        )
    }
}

export default Legislation;
