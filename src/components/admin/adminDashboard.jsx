import React, { Component } from 'react';
import config from '../../env/config'

class adminDashboard extends Component {
    state = {  }
    componentDidMount = () =>{
        this.setState({
            name:config.currentUser.givenName
        })

    }
    redirect =(event)=>{
		console.log(event.target.name)
		window.location.href = '#' + event.target.name
    }
    
    render() { 
        return ( <div className='' style={{ 
            display: '-ms-inline-flexbox',
            textAlign:'center'
        }}>
            <h3 style={{
                textAlign: "center",
                color: 'grey',
                marginTop: '10%',
                marginBottom: 15,
                fontFamily: 'Montserrat',
            }}>
                Welcome, {this.state.name}
    </h3>
{/*             
    <button onClick={this.redirect} name='give' className='btn btn-warning text-white m-1 btn-sm'>Give</button> &  
			<button  onClick={this.redirect} name='take' className='btn btn-danger m-1 btn-sm'>Take</button>
		 */}
        </div> );
    }
}
 
export default adminDashboard;