import React, {Component} from 'react';
import NavBar from './navbar';

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
            </div>
        )
    }
}

export default Legislation;
