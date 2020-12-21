import React, { Component } from 'react';
import {Form,Button, Container, Row,Col} from 'react-bootstrap'


class Take extends Component {
    state = {  }
    render() { 
        return ( <Container fluid>    
        
        <Row className="border-bottom" >
          <Col>
            <div className="d-flex justify-content-between align-items-center h5 my-3">Take Data Form
          {this.props.match.params.id ? <Button variant='primary' size='sm' onClick={this.handleRedirect}> Back</Button> : ''}
            </div>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
        
        <Col  md='6' lg='6'>
        <Form>
            <Form.Row >
                <Form.Group as={Col} sm={12} lg={12}>
                  <Form.Label className="text-muted">Choose Tel</Form.Label>
                  <Form.Control
                    as="select"
                    // value={this.state.regions}
                    name="regions"
                    // onChange={this.handleSelect}
                  >

                    {/* {filterCountries.map(reg => (
                      <option key={reg.id} value={reg.regionId}>
                        {reg.countryName}
                      </option>
                    ))} */}
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
 
export default Take;