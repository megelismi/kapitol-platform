import React, {Component} from 'react';

class SearchBox extends Component{
    render(){
        return(
            <div id="search-box">
                <ul id='search-options' className="no-padding no-margin text-left list-no-styles">
                    <li>Paul Ryan</li>
                    <li>Paul George</li>
                </ul>
            </div>
        )
    }
}

export default SearchBox;