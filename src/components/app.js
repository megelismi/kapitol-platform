import React, { Component } from 'react';
import '../stylesheets/css/index.css';

let kapitol_logo = require('../images/kapitol_logo.png');

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            placeholderText: 'Enter a member name..',
            searchType: 'member',
            inputValue: ''
        }
        this.setPlaceholder = this.setPlaceholder.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
    }

    //FUNCTION TO BE FIRED ON SELECTOR CHANGE
    //CHECKS TARGET VALUE AND SETS PLACEHOLDER AND SEARCH TYPE STATE
    setPlaceholder(event){
        var target = event.target.value;
        if(target === 'members'){
            this.setState({
                placeholderText: 'Enter a member name..',
                searchType: target
            })
        }else{
            this.setState({
                placeholderText: 'Enter a keyword..',
                searchType: target
            })
        }
    }

    updateInputValue(event){
        var target = event.target.value;
        console.log(target);
        this.setState({
            inputValue: target
        })
    }



    render(){
        return(
            <div id='fp-container' className="page-mid">
                <img src={kapitol_logo} alt=""/>
                <div id="fp-search">
                    <input onChange={this.updateInputValue} type="text" placeholder={this.state.placeholderText} className="border-light-gray"/>
                </div>
                <div id="fp-selector" className="select-style">
                    <select onChange={this.setPlaceholder} className="dropdown" name="drop-down">
                        <option value="members">Members</option>
                        <option value="legislation">Legislation</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default App;

