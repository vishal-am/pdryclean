import React, { Component } from "react";
import DataTable ,{defaultThemes} from 'react-data-table-component'
import axios from 'axios';
import {Button,Modal,Col,Form} from 'react-bootstrap'
import {FaPlus,FaTrashAlt,FaEdit,FaTable} from 'react-icons/fa'
import {matchSorter} from 'match-sorter'



class Logs extends Component {
    state = { 
      addUpdateModal:false,
      deleteModal:false,
      data:{}
     }
     handleAddUpdateClose = () =>{
       this.setState({addUpdateModal:false})
     }
     handleAddUpdateOpen = () =>{
       this.setState({
         addUpdateModal:true
       })
     }
     handleDeleteClose = () =>{
      this.setState({deleteModal:false})
    }
    handleDeleteOpen = () =>{
      this.setState({
        deleteModal:true
      })
    }
    componentDidMount=()=>{
        axios.get('https://jsonplaceholder.typicode.com/users/').then(
            res=>{
                console.log(res)
                const ress = res.data
                this.setState({
                  data:ress,
                data2:ress})
            }
        ).catch(err=>{
            console.log(err)
        })
    }
    handleSelect = async ({ currentTarget: input }) => {
        await this.setState({
            [input.name]: input.value,
          });
        this.handleFilter(this.state.searchString)
    };
    handleFilter = (string) =>{
        const data2 = this.state.data2
        let z = matchSorter(data2, string, {keys: ['email']})
        this.setState({
            data:z
        })
    }
    updateRowClick = (property) =>{
      this.setState({
        row:property,
        addUpdateModal:true
      })
      console.log(this.state)
    }
    deleteRowClick =(property) =>{
      this.setState({
        row:property,
        deleteModal:true
      })
      console.log(this.state)
    }

    updateRowApiCall = () =>{
      axios.put('https://jsonplaceholder.typicode.com/users/' + this.state.row.id,
      this.state.row
      )
      .then(res=>{
        console.log(res)
      })
      .catch(err=>{
        console.log(err)
      })
    }
    
    render() { 
      console.log(this.state.data)

        const columns = [
            {
              name: 'S.No',
              selector: 'id',
              sortable: true,
              // minWidth:'1px',
              maxWidth:'12px',
              // center:true,
              // compact:true,
              // right:true,
              // wrap:true
            },
            {
              name: 'Name',
              selector: 'name',
              sortable: true,
              // hide:'sm',
              // compact:true
            //   right: true,
            wrap:true
            },
            {
                name: 'Email',
                selector: 'email',
                sortable:true,
                wrap:true
            },
            {
              name: 'Website',
              selector: 'website',
              sortable:true,
              hide:'sm',

              wrap:true,
              
            },
            {
              // maxWidth:'300',
                // name: 'Update-Delete',
                button: true,
                cell: (row) => 
                <div>  
                 <Button size='sm' className='m-1' onClick={()=>this.updateRowClick(row)}><FaEdit className='pb-1'/></Button>
                 <Button size='sm' variant='danger' className='m-1' onClick={()=>this.deleteRowClick(row)} ><FaTrashAlt className='pb-1'/></Button>
                </div>
                
            }
           
            
        ];
        const customStyles = {
         
          headRow: {
            style: {
              borderTopStyle: 'solid',
              borderTopWidth: '1px',
              borderTopColor: defaultThemes.default.divider.default,
            },
          },
          header: {
            style: {
              minHeight: '56px',
            },
          },
          rows: {
            style: {
              // backgroundColor:'lightgreen'
            }
          },
          headCells: {
            style: {
              paddingLeft: '8px', // override the cell padding for head cells
              paddingRight: '8px',
              backgroundColor:'lightblue',
              fontSize:'1.1rem',
              // margin:'5px'
              

            },
          },
          cells: {
            style: {
              // paddingLeft: '8px', // override the cell padding for data cells
              // paddingRight: '8px',
            },
          },
        };
       
          
        const data=this.state.data
        return ( 
        <div className=''>

          <Modal animation={false} centered show={this.state.addUpdateModal} size='sm' onHide={this.handleAddUpdateClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add or Update</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
              <Form.Row className="">
                <Form.Group as={Col} sm={12} lg={12}>
                  <Form.Label className="text-muted">Logs Name</Form.Label>
                  <Form.Control
                  size="sm"
                    value={this.state.todayDate}
                    name="date"
                  >
                  </Form.Control>
                  {/* <Form.Text className="text-muted">
                    You Can't Change Today's Date
                    </Form.Text> */}
                    </Form.Group>
            </Form.Row>
            <Form.Row className="">
                <Form.Group as={Col} sm={12} lg={12}>
                  <Form.Label className="text-muted">Logs Name</Form.Label>
                  <Form.Control
                    value={this.state.todayDate}
                    name="date"
                    size="sm"
                  >
                  </Form.Control>
                  
                    </Form.Group>
            </Form.Row>
            <Form.Row className="">
                <Form.Group as={Col} sm={12} lg={12}>
                  <Form.Label className="text-muted">Logs Name</Form.Label>
                  <Form.Control
                  size='sm'
                    value={this.state.todayDate}
                    name="date"
                  >
                  </Form.Control>
                  {/* <Form.Text className="text-muted">
                    You Can't Change Today's Date
                    </Form.Text> */}
                    </Form.Group>
            </Form.Row>
            <Button>Add</Button>

              </Form>
            </Modal.Body>
           
          </Modal>

          <Modal animation={false} centered show={this.state.deleteModal} size='sm' onHide={this.handleDeleteClose}>
            <Modal.Header closeButton>
              <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure, you want to delete this Logs!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" size='sm' onClick={this.handleDeleteClose}>
                Close
              </Button>
              <Button variant="danger" size='sm' onClick={this.handleDeleteClose}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>


            <DataTable title ='Logs'
             columns = {columns} 
             data ={this.state.data}
            //  selectableRows
             striped
             pagination 
             responsive 
             selectableRowsHighlight
             onRowClicked={(row)=>window.location.href ="#logs/" + row.id}
            //  progressPending
            button
             highlightOnHover
             persistTableHead
             
             pointerOnHover
             fixedHeader
             subHeader 
             customStyles ={customStyles}
            //  expandableRows
             subHeaderComponent ={<div>
                  <div className="d-flex">
                    <Form.Group className="mb-0" sm='11'>
                      <Form.Control 
                        name='searchString' 
                        value ={this.state.searchString} 
                        placeholder ='Search Here..' 
                        onChange={this.handleSelect}/>
                      </Form.Group>
                    <Button className=" btn-sm ml-3" onClick={this.handleAddUpdateOpen} >
                      <FaPlus className='mr-2 mb-1' />
                      Add New
                    </Button>
                  </div>
                </div>}  />
        </div> );
    }
}
 
export default Logs;