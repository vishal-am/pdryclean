import React, { Component } from 'react';

import Datatable from 'react-data-table-component'

class Table extends Component {
    state = {  }
    render() { 
        return ( 
            <Datatable />
         );
    }
}
 
export default Table;


// subHeaderComponent ={
//     <Form.Group>
//        <Form.Control
//        name='searchString' 
//        value ={this.state.searchString} 
//        placeholder ='Search Here..' 
//        onChange={this.handleSelect}/>
//     </Form.Group>} 
