import React,{Component} from 'react';
import '../../../stylesheets/css/index.css';
import SearchComponent from '../../shared/search';
import FooterComponent from '../../shared/footer';
import { connect } from 'react-redux';
import { fetchList } from '../../../actions/getRequests';


let kapitol_logo = require('../../../images/kapitol_logo.png');


class Home extends Component{

    componentDidMount(){
        document.title = "Home | Kapitol";
        this.props.dispatch(fetchList());
    }

    render(){
        return(
            <div id='fp-container'>
                {
                    this.props.memberList.length > 0 ?
                        <div></div> :
                        <div className="loading">
                            <div className="page-mid loading-screen">
                                <div className="page-mid loading-icon">
                                    <span className="flag-star">&#9733;</span>
                                    <span className="flag-star">&#9733;</span>
                                    <span className="flag-star">&#9733;</span>
                                    <div className="flag-bar">&nbsp;</div>
                                    <div className="flag-bar">&nbsp;</div>
                                </div>
                            </div>
                        </div>
                }
                <div className="page-mid">
                    <img src={kapitol_logo} alt="Kapitol logo"/>
                    <div id="fp-search">
                        <SearchComponent/>
                    </div>
                </div>
                <FooterComponent/>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    memberList: state.home.memberListReceived,
    keywordList: state.home.keywordListReceived
});

export default connect (mapStateToProps)(Home);


