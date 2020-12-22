import React, { Component } from 'react';
// importing Component
import Head from '../ui/Header'
import { HashRouter } from 'react-router-dom';
// import Switch from 'react-bootstrap/esm/Switch';
import DataContext from '../context/DataContext'
import ContentArea from './ContentArea';
import {Row, Col} from 'react-bootstrap'

class Home extends Component {
	state = {
		expanded: true
	}
	componentDidMount =  () => {
		
		let a = localStorage.getItem('currentUser')
		let b = JSON.parse(a)
		this.setState({ data: b })

	}
	// handleLogout = () => {
	// 	localStorage.removeItem('currentUser');
	// 	this.context.handleLoginChange(false)
	// 	window.location.href = config.url + "#/login";
	// }
	handleDataChange = (e) => {
		this.setState({
			data: e
		})
	}
	
	changeStyle = () => {
		this.setState({
			expanded: !this.state.expanded
		});
	}
	render() {
		return (
            <HashRouter>
                <Head/>
                    <div  style={{ fontFamily: 'Montserrat' }}>
                            
								<Row className=' m-0'>
								<Col
								lg={2}  className=''
								// style={{
								// 	backgroundColor:'#343a40'
								// }}
								>
								asdfasdfasdf
									{/* col 3<div className='border border-danger'></div> */}
								</Col>
									<Col className='p-0' lg={10}>
									<ContentArea/>
									</Col>
								</Row>
							
                    </div>
            </HashRouter>
		);
	}
}
Home.contextType = DataContext;
export default Home;

