import React, { Component } from 'react';
import { Route, HashRouter, Redirect } from 'react-router-dom';
import adminDashboard from '../admin/adminDashboard';
import userDashboard from '../user/userDashboard';



class ContentArea extends Component {
    state = {  }
    render() { 
        return ( <div>
            <Route exact path={'/admin'} component={adminDashboard} />
			<Route exact path={'/user'} component={userDashboard} />
        </div> );
    }
}
 
export default ContentArea;