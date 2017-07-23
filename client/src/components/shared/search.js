import React,{Component} from 'react';
import SearchBox from './searchbox';
import '../../stylesheets/css/index.css';
import '../../stylesheets/css/components/App.css'
import InputSearchService from '../../services/api'
import axios from 'axios';

class SearchComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            placeholderText: 'Enter a member name..',
            searchType: 'members',
            inputValue: '',
            searchResults: []
        }
        this.setPlaceholder = this.setPlaceholder.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
    }

    /**
     * FUNCTION TO BE FIRED ON SELECT CHANGE
     * CHECKS TARGET VALUE AND SETS PLACEHOLDER AND SEARCH TYPE STATE
     */
    setPlaceholder(event){
        this.setState({
            inputValue: []
        });
        let target = event.target.value;
        if (target === 'members') {
            axios.get('http://localhost:3004/member-list')
                .then(result => {
                    this.setState({
                        searchType: target,
                        placeholderText: 'Enter a member name...',
                        searchResults: result.data
                    })
                })
        } else {
            this.setState({
                placeholderText: 'Enter a keyword..',
                searchType: target,
                searchResults: ['birth control', 'gun control', 'a.c.a']
            })
        }

        //CLEAR INPUT BAR
        document.getElementById('search-bar').value = '';
    }

    /**
     * FUNCTION TO BE FIRED ON INPUT CHANGE
     * CHECKS TARGET VALUE AND UPDATES INPUT VALUE STATE
     * USE THIS FUNCTION FOR ALL API VALUE CALLS
     */
    updateInputValue(event){
        //KEEP VARIABLE OF INPUT VALUE
        let target = event.target.value.toLowerCase();
        this.setState({
            inputValue: target
        })
    }

    componentDidMount(){
        let _this = this;
        axios.get('http://localhost:3004/member-list')
            .then(result => {
                _this.setState({
                    searchResults: result.data
                })
            })
    }

    render(){
        return(
            <div>
                <input id='search-bar' onChange={this.updateInputValue} type="text" placeholder={this.state.placeholderText} className="border-light-gray"/>
                {this.state.inputValue.length === 0 ? '':
                    <SearchBox
                    searchResults={this.state.searchResults}
                    value={this.state.inputValue}
                    searchType={this.state.searchType}/> }
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

export default SearchComponent;
