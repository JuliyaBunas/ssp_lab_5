import React, { Component } from 'react';
import './App.css';
import Profile from "./components/ProfileComponent";
import TabsComponent from "./components/TabsComponent";

class App extends Component {

  render() {
      return (
      <div>
        <div className="leftBlock">
            <Profile/>
        </div>
          <div className="rightBlock">
            <TabsComponent/>
          </div>
      </div>
    );
  }
}

export default App;
