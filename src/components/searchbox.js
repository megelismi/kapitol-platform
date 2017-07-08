import React, {Component} from 'react';

class SearchBox extends Component{
    render(){
        return(
            <div id="search-box">
                <ul id='search-options' className="no-padding no-margin text-left list-no-styles">
                    {this.props.searchResults.filter(word =>{
                        if(word.includes(this.props.value)){
                            return word;
                        }else{
                            //TODO the rest of the
                        }
                    }).map(word =>{
                        return <li key={word}>{word}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default SearchBox;
