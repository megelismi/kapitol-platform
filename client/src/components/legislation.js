import React, {Component} from 'react';
import legislation from '../files/legislation.json';

class Legislation extends Component{
    render(){
        let topic = this.props.match.params.keyword;
        let recentBills = legislation[0][topic]["recent_bills"];
        let recentBillsKeys = Object.keys(recentBills[0]);
        const RecentBillList = (props) => {
            {console.log(recentBills)}
            let currentBillKey =  recentBillsKeys[0];
            return (
                <tr>
                    <td>{currentBillKey}</td>
                    <td>{props.recentBill[currentBillKey].stage}</td>
                    <td>{props.recentBill[currentBillKey].sponsorship_party}</td>
                    <td>{props.recentBill[currentBillKey].results.pass}</td>
                </tr>
            )

            };
        return(
            <div>
                <h1>115th Congressional Voting</h1>
                <h1>{topic}</h1>
                <p>{legislation[0][topic]["description"]}</p>
                {
                    console.log(recentBills)
                }
                <table>
                    <tr>
                        <th>Recent Bills</th>
                        <th>Details</th>
                        <th>Projection</th>
                        <th>Results</th>
                    </tr>
                    <tr>
                        <td>Recent bills put forth in Congress rela;ng to Gun Rights. Click on the bill name to run it through our predic;on algorithms, seen below.</td>
                        <td>Bill details, including bill placement in Congress and bill sponsoring party </td>
                        <td>Kapitol algorithm predic;on for bill passage </td>
                        <td>Bill results updated in real ;me. Results vary out of 100 or 435 depending on chamber</td>
                    </tr>
                    {
                        recentBills.map((bill,index) => {
                            return (
                                <RecentBillList key={index} billkeys={recentBillsKeys[index]} recentBill={bill}/>
                            );
                        })
                    }
                </table>
                </div>
        )
    }
}

export default Legislation;