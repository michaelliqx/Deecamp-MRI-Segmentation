import React, {
  Component
} from 'react';
import Contacts from "./component/contact/Contacts";
import './App.css';
import Header from './component/layout/Header';
import Footer from "./component/layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   Provider
// } from './context';
import EditContact from './component/contact/EditContact';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Welcome from "./component/pages/Welcome";
import About from './component/pages/About';
import NotFound from './component/pages/NotFound';
import Test from './component/test/Test';
import Output from './component/test/Output';
import Report from "./component/test/report";
import {
  Provider
} from 'react-redux';
import store from "./store";


class App extends Component {


  render() {
    return (
      <div className="App">
      <Provider store = {store}>
      <Router>
          <div className="App1">
            <header className="App-header">
              <Header className = "Head"/>
            </header>  
              <div className="container-fluid">
                <Switch>
                  <Route exact path = '/'
                  component = {Welcome} />
                  <Route exact path = '/contact'
                  component = {Contacts} />
                  <Route exact path = '/report'
                  component = {Report}  />
                  <Route exact path = '/contact/edit/:id'
                  component = {EditContact} />
                  <Route exact path = '/about'
                  component = {About} />
                  <Route exact path = '/test' 
                  component = {Test} />
                  <Route component = {NotFound} />
                  <Route exact path = '/Output' 
                  component = {Output} />

                </Switch>
              </div>
             
            <footer>
            <Footer className = "Foot"/>
            </footer>
          </div>
        </Router>
    </Provider>
  </div>
    );
  }
}

export default App;