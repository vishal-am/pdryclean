import React, { Component } from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';
import {Row, Container,Button,Col} from 'react-bootstrap'


//importing component
import adminDashboard from '../admin/adminDashboard';
import userDashboard from '../user/userDashboard';
import Users from '../admin/Users';
import Hotels from '../admin/Hotel';
import Products from '../admin/Product';
import Logs from '../admin/Logs';

import Give from '../../components/user/give'
import Take from '../../components/user/take'


import config from '../../env/config'


const Notfound = () => {
	return ( <Container>
		<Row className="justify-content-md-center">
			<Col lg="6" ><h1 className='m-3'>404
			<br/>
			Page Not Found!</h1>
			<Button href='/' className='m-3'>Back to home</Button></Col>
			
		</Row>
		
	</Container> );
}

class ContentArea extends Component {
    state = {  }
    
    render() { 
        const usertype = config.currentUser.user_type
        return ( <Switch >
            <Redirect exact from="/home" to="/" />


            {/* Admin Routes */}
            <Route exact path={'/'} component={Number(usertype) === 1 ? adminDashboard : userDashboard}/>
            <Route exact path={"/users"} component= { Number(usertype) === 1 ? Users: <Redirect to='/'/>}/>
            <Route exact path={"/hotels"} component={Number(usertype) === 1 ? Hotels: <Redirect to='/'/>}/>
            <Route exact path={"/products"} component={Number(usertype) === 1 ? Products: <Redirect to='/'/>}/>
            <Route exact path={'/logs'} component={Number(usertype) === 1 ? Logs: <Redirect to='/'/>}/>
            <Route exact path={'/logs/:id'} component={Number(usertype) === 1 ? Logs: <Redirect to='/'/>} />

            {/* User Routes */}


            <Route exact path={'/give'} component={Give}/>
            <Route exact path={'/take'} component={Take}/>
        
            <Redirect exact from="/login" to="/" />

            <Route exact path={'*'} component={Notfound}/>
            

        </Switch> );
    }
}
 
export default ContentArea;