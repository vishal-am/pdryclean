import React, { Component } from 'react';
import { Route, HashRouter, Redirect, Switch } from 'react-router-dom';
import adminDashboard from '../admin/adminDashboard';
import userDashboard from '../user/userDashboard';
import Dashboard from '../main/Dashboard'
import Give from '../forms/give'
import Users from '../admin/Users';

class ContentArea extends Component {
    state = {  }
    render() { 
        return ( <Switch >
            <Route exact path={'/admin'} component={adminDashboard} />
			<Route exact path={'/user'} component={userDashboard} />
            <Route exact path={"/home"} component={Dashboard}/>
            <Route exact path={'/'} component={Dashboard}/>
            <Route exact path={'/give'} component={Give}/>
            <Route exact path={"/users"} component= {Users}/>

        </Switch> );
    }
}
 
export default ContentArea;