import React, { Component } from 'react';
import '../stylesheets/css/index.css';

let kapitol_logo = require('../images/kapitol_logo.png');

class App extends Component{

    render(){
        return(
            <div id='fp-container' className="page-mid">
                <img src={kapitol_logo} alt=""/>
                <div id="fp-search">
                    <input type="text" placeholder="Enter a member name.." className="border-light-gray"/>
                    <button className="no-border kapitolRed">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </div>
                <div id="fp-selector" className="select-style">
                    <select className="dropdown" name="drop-down">
                        <option value="members">Members</option>
                        <option value="legislation">Legislation</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default App;

