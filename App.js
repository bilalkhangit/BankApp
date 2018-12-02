import React, { Component } from 'react';
import Header from './components/Header'
import Transactions from './components/Accounts/Transactions'
import Footer from './components/Footer'
import Main from './components/Main'
import AddNewAccount from './components/Accounts/Create'
import ViewAccounts from './components/Accounts/Index'
import Display from './components/Accounts/Display'
import WithDraw from './components/Accounts/WithDraw'
import Deposit from './components/Accounts/Deposit'
import DisplayTrans from './components/Accounts/DisplayTrans'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux'
class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              {/* <Route path="/Account" component={Account} /> */}
              <Route path="/Accounts/WithDraw/:id" component={WithDraw} />
              <Route path="/Accounts/Deposit/:id" component={Deposit} />
              <Route path="/Accounts/Transactions" component={Transactions} />
              <Route path="/Accounts/Create" component={AddNewAccount} />
              <Route path="/Accounts/DisplayTrans/:id" component={DisplayTrans} />
              <Route path="/Accounts/Display/:id" component={Display} />
              <Route path="/Accounts" component={ViewAccounts} />
              <Route exact path="/" component={Main} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );

  }

}

export default App;
