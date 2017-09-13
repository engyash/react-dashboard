import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {

        var List = React.createClass({
            render: function () {
                return (<div>
                    {this.props.data.map(function (item) {
                        return <div className="Team">
                            <div className="Team-icon">{item.name}</div>
                            <div className="Team-name-wrapper">
                                <div className="Team-name">{item.name}<br/></div>
                                <div className="Team-name-small">{item.name.replace(/ /g, "-")}</div>
                            </div>
                                  <div className="Team-notifications">{item.notifications} Notifications!</div>
                        </div>
                    })
                    }
                </div>);
            }
        });

        var data = [{ name: 'Pink Elephant', url: 'https://www.upwork.com', notifications: 15 }, { name: 'Cognits', url: 'http://www.cognits.com', notifications: 5 }];


      return (

          <div className="Login-wrapper">
              <div className="Login-container">
                  <div className="Login-title">
                      Which team do you want to Log In?
                  </div>
                  <div className="Teams">
                      <div>Your Teams</div>
                      <div>
                          <List data={data} />
                          <div className="Team">
                              <div className="Team-icon"><i>+</i></div>
                               <div className="New-team-name">Create  New Team</div>
                          </div>

                      </div>
                  </div>
                  <div className="SignOut-wrapper">
                      <input type="button" className="btn btn-default btn-signout" value="Sign Out" />
                  </div>
              </div>
          </div>
      );


  }
}

export default App;
