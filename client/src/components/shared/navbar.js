import React, {Component} from 'react';
import SearchComponent from './search';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchList } from '../../actions/getRequests';


import kapitol_logo from '../../images/kapitol_logo.png';

class NavBar extends Component{

    componentDidMount(){
        this.props.dispatch(fetchList());
    }

    render(){
        return(
            <div className="navigation-bar">
                <Link to="/"><img src={kapitol_logo} alt="kapitol_logo"/></Link>
                <div className="nav-search-container">
                    <SearchComponent/>
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    memberList: state.home.memberListReceived,
    keywordList: state.home.keywordListReceived
});

export default connect (mapStateToProps)(NavBar);


