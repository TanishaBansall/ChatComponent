import React from 'react';
import './index.css';
import ChatList from './container/ChatList';
import ChatArea from './container/ChatArea';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <>
    <div className="main_div">
    <Router>
    
      <ChatList />
      <Switch>
      <Route exact path="/" ><ChatArea user="user1" /></Route>
      <Route exact path="/user2" ><ChatArea user="user2" /></Route>
      <Route exact path="/user3" ><ChatArea user="user3" /></Route>
      
      </Switch>

    </Router>
   </div>
    </>
  );
}

export default App;
