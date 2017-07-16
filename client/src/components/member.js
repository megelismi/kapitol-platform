import React, {Component} from "react";
import NavBar from "./navbar";
import MemberData from "../services/api";
import FooterComponent from "./footer";
import "../stylesheets/css/index.css";

const capitalize = (str) =>
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

class Member extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        const memberData = MemberData.fetchMember(this.props.match.params);
        this.setState({
            memberData
        });
    }

    componentDidMount(){
        document.title = "Members | Kapitol"
    }

    render(){
        console.log('current param is:', this.props.match.params);

        const member = this.state.memberData.memberBasics;
        const socialMedia = this.state.memberData.memberBasics.socialMedia;

        const getPartyStateDistrict = () => {
            if (member.party === "republican") {
                if (member.district) {
                    return (
                        <h3 className="mp-party-district">
                            <div className="republican">R</div>
                            epublican, {member.state} {member.district} District
                        </h3>
                    )
                } else {
                    return (
                        <h3 className="mp-party-district">
                            <div className="republican">R</div>
                            epublican, {member.state}
                        </h3>
                    )
                }
            } else {
                if (member.district) {
                    return (
                        <h3 className="mp-party-district">
                            <div className="democrat">D</div>
                            emocrat, {member.state} {member.district} District
                        </h3>
                    )
                } else {
                    return (
                        <h3 className="mp-party-district">
                            <div className="democrat">D</div>
                            emocrat, {member.state}
                        </h3>
                    )
                }
            }
        };

        if (!member) {
            return <div/>
        } else {
            return (
                <div className="mp-container">
                    <NavBar/>
                    <div className="mp-details-container">
                        <div className="mp-image">
                            <img src={member.picture}
                                 alt="Congress member"/>
                        </div>
                        <div className="mp-details">
                            <h1>{capitalize(member.name)}</h1>
                            {getPartyStateDistrict()}
                            <ul>
                                <li className="mp-fb">
                                    <a href={socialMedia.facebook.link}
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        &nbsp;&nbsp; {socialMedia.facebook.username}
                                    </a>
                                </li>
                                <li className="mp-twitter">
                                    <a href={socialMedia.twitter.link}
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        &nbsp;&nbsp; {socialMedia.twitter.username}
                                    </a>
                                </li>
                                <li className="mp-instagram">
                                    <a href={socialMedia.instagram.link}
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        &nbsp;&nbsp; {socialMedia.instagram.username}
                                    </a>
                                </li>
                            </ul>
                            <a className="mp-bio"
                               href={member.bio}
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
                    <FooterComponent/>
                </div>
            );
        }
    }
}

export default Member;
