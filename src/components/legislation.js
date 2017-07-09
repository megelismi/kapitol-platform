import React, {Component} from 'react';

class Legislation extends Component{
    render(){
        return(
            <div>
                <h1>Legislation Page</h1>
                {
                    console.log(this.props.match.params.keyword)
                }
            </div>
        )
    }
}

export default Legislation;