import React, { Component } from 'react';
import Header from '../ui/Header';
import ContentArea from './ContentArea';
import Footer from '../ui/Footer';
import { HashRouter } from 'react-router-dom';
import Sidebar from '../ui/Sidebar';
import {Container,Row,Col,Table} from 'react-bootstrap'



class main extends Component {
    state = {  }
    render() { 
        return ( 
        
        <HashRouter>
            <Container  fluid className='h-100 p-0'>
            <Header/>
                
                <ContentArea/>

                    
            {/* <Footer/> */}
            </Container>
        </HashRouter>
     
        );
    }
}
 
export default main;


            
            //  style={{ fontFamily: 'Montserrat' }}

            // <HashRouter>
        //     <div className="wrapper " >
        //         <Sidebar/>
        //         <div className='mainContent '>
        //             <Header/>
        //             <ContentArea/>
        //             {/* <Footer/> */}
        //         </div>
        //     </div>
        // </HashRouter>
                
            
