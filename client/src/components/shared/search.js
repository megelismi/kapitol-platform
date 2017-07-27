import React,{Component} from 'react';
import SearchBox from './searchbox';
import '../../stylesheets/css/index.css';
import '../../stylesheets/css/components/App.css'
import { connect } from 'react-redux';
import { fetchList } from '../../actions/getRequests';
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
            this.setState({
                searchType: target,
                placeholderText: 'Enter a member name...',
            })
        } else {
            this.setState({
                placeholderText: 'Enter a keyword..',
                searchType: target
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
        //..
    }

    render(){
        return(
            <div>
                <input id='search-bar' onChange={this.updateInputValue} type="text" placeholder={this.state.placeholderText} className="border-light-gray"/>
                {this.state.inputValue.length === 0 ? '':
                    <SearchBox
                    searchResults={ this.state.searchType === 'members' ? this.props.memberList : this.props.keywordList}
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

const mapStateToProps = state => ({
    memberList: state.home.memberListReceived,
    keywordList: state.home.keywordListReceived
});

export default connect (mapStateToProps)(SearchComponent);
