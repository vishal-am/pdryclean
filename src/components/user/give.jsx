import React, { Component } from 'react';
import {Form,Button, Container, Row,Col} from 'react-bootstrap'
import axios from 'axios'


class Give extends Component {
    state = { 
      data:[]
     }

  componentDidMount=()=>{
    axios.post("http://estapi.amwebtech.org/salesestimation/api/manager/region/get",{
      "token":"49b03e16f6dbc9b5d4bcf0ecde26a4c2"
    }).then(res=>{
      if(res.status===200){
        // console.log(res.data.data)
        const ress = res.data.data
        this.setState({
        data:ress,
        data2:ress
      })
          }
          }
      ).catch(err=>{
          console.log(err)
      })
  }
  handleSelect = async ({ currentTarget: input }) => {
    await this.setState({
      [input.name]: input.value,
    });
    // this.handleFilter(this.state.searchString)
  };
  
     render() { 
      const data =  this.state.data
      console.log(this.state)
        return ( <Container fluid>    
        
        <Row className="center mb-5" >
          <Col>
            <div className="d-flex justify-content-between align-items-center h5 my-3">Give & Take Form
          {this.props.match.params.id ? <Button variant='primary' size='sm' onClick={this.handleRedirect}> Back</Button> : ''}
            </div>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
        
        <Col  md='6' lg='6'>
        <Form>
            <div className='card'>
            <div className='p-4'>

            <Form.Row className='mt-1'>
                <Form.Group as={Col} sm={12} lg={12}>
                  <Form.Label className="text-muted">Choose Hotel</Form.Label>
                  <Form.Control
                    as="select"
                    value={this.state.name}
                    name="name"
                    onChange={this.handleSelect}
                  >

                    {data.map(domd => (
                      <option key={domd.id} value={domd.regionName}>
                        {domd.regionName}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
            </Form.Row>
            
            <Form.Row className="">
                <Form.Group as={Col} sm={12} lg={12}>
                  <Form.Label className="text-muted">Today's Date</Form.Label>
                  <Form.Control
                    value={new Date()}
                    name="date"
                    disabled
                  >
                  </Form.Control>
                  <Form.Text className="text-muted">
                    You Can't Change Today's Date
                    </Form.Text>
                    </Form.Group>
            </Form.Row>         
            
            </div>
            
            </div>
            <Row>
              <Col sm={12} lg={6} className='my-3'>
              <div className='card'>
              <div className='p-4'>
            <h4 className='my-4'>Give Order</h4>
            <Form.Row className="">
                <Form.Group as={Col} sm={12} lg={12}>
                  <Form.Label className="text-muted">Product No.1</Form.Label>
                  <Form.Control type='number' placeholder='Enter Quantity of product 1'/>
                  
                    </Form.Group>
            </Form.Row>
            
            <Form.Row className="">
                <Form.Group as={Col} sm={12} lg={12}>
                  <Form.Label className="text-muted">Product No.1</Form.Label>
                  <Form.Control type='number' placeholder='Enter Quantity of product 1'/>
                  
                    </Form.Group>
            </Form.Row>
            <Form.Row className="">
                <Form.Group as={Col} sm={12} lg={12}>
                  <Form.Label className="text-muted">Product No.1</Form.Label>
                  <Form.Control type='number' placeholder='Enter Quantity of product 1'/>
                  
                    </Form.Group>
            </Form.Row>
            <Form.Row className="">
                <Form.Group as={Col} sm={12} lg={12}>
                  <Form.Label className="text-muted">Product No.1</Form.Label>
                  <Form.Control type='number' placeholder='Enter Quantity of product 1'/>
                  
                    </Form.Group>
            </Form.Row>

            <Form.Row className="">
                <Form.Group as={Col} sm={12} lg={12}>
                  <Form.Label className="text-muted">Product No.1</Form.Label>
                  <Form.Control type='number' placeholder='Enter Quantity of product 1'/>
                  
                    </Form.Group>
            </Form.Row>

            <Form.Row className="">
                <Form.Group as={Col} sm={12} lg={12}>
                  <Form.Label className="text-muted">Product No.1</Form.Label>
                  <Form.Control type='number' placeholder='Enter Quantity of product 1'/>
                  
                    </Form.Group>
            </Form.Row>
            </div>
            </div>
           
              </Col>
              <Col sm={12} lg={6} className='my-3'>
              <div className='card'>
              <div className='p-4'>
            <h4 className='my-4'>Take Order</h4>
            
            <Form.Row className="">
                <Form.Group as={Col} sm={12} lg={12}>
                  <Form.Label className="text-muted">Product No.1</Form.Label>
                  <Form.Control type='number' placeholder='Enter Quantity of product 1'/>
                  
                    </Form.Group>
            </Form.Row>
            
            <Form.Row className="">
                <Form.Group as={Col} sm={12} lg={12}>
                  <Form.Label className="text-muted">Product No.1</Form.Label>
                  <Form.Control type='number' placeholder='Enter Quantity of product 1'/>
                  
                    </Form.Group>
            </Form.Row>
            <Form.Row className="">
                <Form.Group as={Col} sm={12} lg={12}>
                  <Form.Label className="text-muted">Product No.1</Form.Label>
                  <Form.Control type='number' placeholder='Enter Quantity of product 1'/>
                  
                    </Form.Group>
            </Form.Row>
            <Form.Row className="">
                <Form.Group as={Col} sm={12} lg={12}>
                  <Form.Label className="text-muted">Product No.1</Form.Label>
                  <Form.Control type='number' placeholder='Enter Quantity of product 1'/>
                  
                    </Form.Group>
            </Form.Row>

            <Form.Row className="">
                <Form.Group as={Col} sm={12} lg={12}>
                  <Form.Label className="text-muted">Product No.1</Form.Label>
                  <Form.Control type='number' placeholder='Enter Quantity of product 1'/>
                  
                    </Form.Group>
            </Form.Row>

            <Form.Row className="">
                <Form.Group as={Col} sm={12} lg={12}>
                  <Form.Label className="text-muted">Product No.1</Form.Label>
                  <Form.Control type='number' placeholder='Enter Quantity of product 1'/>
                  
                    </Form.Group>
            </Form.Row>
            </div>
            </div>
          
              </Col>
            </Row>
            
           
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        
        
        </Row>
            
          </Container>
 );
    }
}
 
export default Give;