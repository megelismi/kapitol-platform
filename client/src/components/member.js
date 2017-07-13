import React, {Component} from 'react';
import NavBar from './navbar';
import '../stylesheets/css/index.css';

class Member extends Component{

    componentDidMount(){
        document.title = "Members | Kapitol"
    }

    render(){
        return(
            <div className="mp-container">
                <NavBar/>
                <div className="mp-details-container">
                    <div className="mp-image">
                        <img src="https://paulryan.house.gov/uploadedphotos/highresolution/3f3943d8-cea4-4f6b-96ac-3c25fd3ef24e.jpg"
                             alt="Congress member"/>
                    </div>
                    <div className="mp-details">
                        <h1>Paul Ryan</h1>
                        <h3 className="mp-party-district"><div className="republican">R</div>epublican, Wisconsin 1st District</h3>
                        <ul>
                            <li className="mp-fb">
                                &nbsp;&nbsp;/speakerryan
                            </li>
                            <li className="mp-twitter">
                                &nbsp;&nbsp;@SpeakerRyan
                            </li>
                            <li className="mp-instagram">
                                &nbsp;&nbsp;/SpeakerRyan
                            </li>
                        </ul>
                        <a className="mp-bio"
                           href="https://en.wikipedia.org/wiki/Paul_Ryan"
                           target="_blank"
                           rel="noopener noreferrer">
                            Read biography&nbsp;&nbsp;
                        </a>
                    </div>
                </div>
                <div className="mp-table">
                    member table data
                </div>
                <div className="mp-issues">
                    member stance on issues
                </div>
            </div>
        )
    }
}

export default Member;
