import React, { Component } from 'react';

class userDashboard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='' style={{ 
					display: '-ms-inline-flexbox'
				}}>
					<h3 style={{
						textAlign: "center",
						color: 'grey',
						marginTop: '10%',
						marginBottom: 15,
						fontFamily: 'Montserrat',
					}}>
						Welcome, User
            </h3>
					
				</div>
         );
    }
}
 
export default userDashboard;