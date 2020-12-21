import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios'
import DataContext from '../context/DataContext'
import config from '../../env/config'

class Login extends Component {
  state = {
    loginLoading: false
  }


  // constructor() {
  //   super();
  //   if (window.location.href.includes("login") && localStorage.getItem('currentUser')) {
  //     window.location.href = config.url + '#/home';
  //   }
  // }

  responseGoogle = async (response) => {
    if (response.profileObj) {
      this.setState({ loginLoading: true});
      let emailAddress = response.profileObj.email
      setTimeout(() => {
        axios.post(config.login, { email: emailAddress })
        .then(res => {
          this.setState({ loginLoading: false});
          if (res.data.status === 200) {
            res.data.profileObj = response.profileObj
            let user = { ...res.data.data, ...response.profileObj }
            localStorage.setItem('currentUser', JSON.stringify(user))
            config.currentUser = user;
            
            this.context.handleLoginChange(true)
            this.context.handleDataChange(user)
            //  window.location.href='#/home';
          }else if(res.data.status === 201){
            // this.danger(res.data.message)
            console.log('here')
          }
           else {
            console.log('login error from login componnent',)//use toast message here #
          }
          
          // window.location.href='/#/home'
          
        })
        .catch(error => {
          this.setState({ loginLoading: false});
          console.log(error);
        });
         
      }, 500);
      
    }
  }

  render() {
    return (
      <div className="col-md-4 d-block mx-auto my-auto pt-5">
        <div className="card custom-card mt-5 p-5" style={{ borderTop: '5px solid #4285f4' }}>
          {this.state.loginLoading?'':<div className="text-center p-3">
            {/* <img style={{ width: '12rem' }} src={AMW} className="img-responsive" alt="logo" /> */}
            <h5 className="pt-3" style={{ textAlign: "center", color: 'grey', fontFamily: 'Montserrat', }}> Estimation Calculator, From AM Webtech Pvt. Ltd. </h5>
          </div>}
          <div className="card-body p-3 text-center">
            {/* {this.state.loginLoading ? <img style={{width:'150px'}}  src={amwLoader} alt ='loader'/>
           : */}
              <GoogleLogin clientId="1051803384347-91967jipju1ume5ul4dcr5g84bfaja56.apps.googleusercontent.com"
                buttonText="CONTINUE WITH GOOGLE"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
              {/* } */}
          </div>
        </div>
      </div>
    );
  }
}
Login.contextType = DataContext
export default Login;