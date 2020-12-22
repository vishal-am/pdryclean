import React, { Component } from 'react';
// importing Component
import Head from '../ui/Header'
import { HashRouter } from 'react-router-dom';
// import Switch from 'react-bootstrap/esm/Switch';
import DataContext from '../context/DataContext'
import ContentArea from './ContentArea';

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
                            <ContentArea/>
                    </div>
            </HashRouter>
		);
	}
}
Home.contextType = DataContext;
export default Home;

