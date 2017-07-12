import React, {Component} from 'react';
import SearchComponent from './search'

import kapitol_logo from '../images/kapitol_logo.png';

class NavBar extends Component{
  render(){
      return(
          <div className="navigation-bar">
              <img src={kapitol_logo} alt="kapitol_logo"/>
              <div className="nav-search-container">
                  <SearchComponent/>
              </div>
          </div>
      )
  }
};

export default NavBar;
