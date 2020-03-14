import React from 'react';
import {SportsStoreDataStore} from "./data/DataStore";
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {ShopConnector} from "./shop/ShopConnector";


function App() {
    return (
        <Provider store={SportsStoreDataStore}>
            <Router>
                <Switch>
                    <Route path="/shop" component={ShopConnector}></Route>
                    <Redirect to="/shop"></Redirect>
                </Switch>
            </Router>

        </Provider>
    );
}

export default App;
