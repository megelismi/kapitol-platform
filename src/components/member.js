import React, {Component} from 'react';

class Member extends Component{
    render(){
        return(
            <div>
                <h1>Member Page</h1>
                {
                    console.log(this.props.match.params.name)
                }
            </div>
        )
    }
}

export default Member;