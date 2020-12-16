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
                
            


        // <Row>
        //         <Col className='border border-danger' sm={2}>Sidebar</Col>
        //         <Col className='border border-danger p-0 m-0' >
        //         <Header/>
        //         <Table striped bordered hover responsive="sm">
        //         <thead>
        //             <tr>
        //             <th>#</th>
        //             <th>First Name</th>
        //             <th>Last Name</th>
        //             <th>Username</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             <tr>
        //             <td>1</td>
        //             <td>Mark</td>
        //             <td>Otto</td>
        //             <td>@mdo</td>
        //             </tr>
        //             <tr>
        //             <td>2</td>
        //             <td>Jacob</td>
        //             <td>Thornton</td>
        //             <td>@fat</td>
        //             </tr>
        //             <tr>
        //             <td>2</td>
        //             <td>Jacob</td>
        //             <td>Thornton</td>
        //             <td>@fat</td>
        //             </tr>
        //             <tr>
        //             <td>2</td>
        //             <td>Jacob</td>
        //             <td>Thornton</td>
        //             <td>@fat</td>
        //             </tr>
        //             <tr>
        //             <td>3</td>
        //             <td colSpan="2">Larry the Bird</td>
        //             <td>@twitter</td>
        //             </tr>
                
        //         </tbody>
        //         </Table>
        //         </Col>
        //     </Row>
        //     <Row>
        //         <Col className='border border-danger' xs={1} md={3}>xs=6 md=4</Col>
        //         <Col className='border border-danger' xs={11} md={9}>xs=6 md=4</Col>
        //         {/* <Footer/> */}
                
        //     </Row>