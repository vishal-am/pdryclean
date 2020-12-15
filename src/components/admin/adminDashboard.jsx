import React, { Component } from 'react';

class adminDashboard extends Component {
    state = {  }
    render() { 
        return ( <div className='' style={{ 
            display: '-ms-inline-flexbox'
        }}>
            <h3 style={{
                textAlign: "center",
                color: 'grey',
                marginTop: '10%',
                marginBottom: 15,
                fontFamily: 'Montserrat',
            }}>
                Welcome,  Admin
    </h3>
            
        </div> );
    }
}
 
export default adminDashboard;