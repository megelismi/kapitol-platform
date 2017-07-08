import React, { Component } from 'react';
import SearchBox from './searchbox';
import '../stylesheets/css/index.css';
import InputSearchService from '../services/api';


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

    //FUNCTION TO BE FIRED ON INPUT CHANGE
    //CHECKS TARGET VALUE AND UPDATES INPUT VALUE STATE
    //TO DO: WITHIN THIS FUNCTION, THROTTLE EVERY X SECONDS AND HIT API BACKEND FOR MEMBERS/LEGISLATION
    updateInputValue(event){
        //KEEP VARIABLE OF INPUT VALUE
        var target = event.target.value;
        //KEEP VARIABLE OF KEYWORD LIST
        var keyWords = InputSearchService.fetchKeyWords();

        //TODO FILTER THROUGH THE KEYWORD LIST FOR MATCHES IN INPUT VALUE
        console.log(target);
        console.log(keyWords);
    }



    render(){
        return(
            <div id='fp-container' className="page-mid">
                <img src={kapitol_logo} alt=""/>
                <div id="fp-search">
                    <input onChange={this.updateInputValue} type="text" placeholder={this.state.placeholderText} className="border-light-gray"/>
                    <SearchBox/>
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

