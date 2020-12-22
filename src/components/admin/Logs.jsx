import React, { Component } from "react";
import {Form} from 'react-bootstrap'
import DataTable from 'react-data-table-component'
import axios from 'axios';
import {Button} from 'react-bootstrap'
import {FaPlus,FaTrashAlt,FaEdit} from 'react-icons/fa'
import {matchSorter} from 'match-sorter'



class Logs extends Component {
    state = { 
        data:{}
     }
   
    componentDidMount=()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos/').then(
            res=>{
                // console.log(res)
                const ress = res.data
                this.setState({data:ress,
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
        let z = matchSorter(data2, string, {keys: ['title']})
        this.setState({
            data:z
        })
    }
    render() { 
        const columns = [
            {
              name: 'User ID',
              selector: 'userId',
              sortable: true,
            },
            {
              name: 'ID',
              selector: 'id',
              sortable: true,
            //   right: true,
            },
            {
                name: 'Title',
                selector: 'title',
                sortable:true
            },
            {
                // name: 'Update-Delete',
                button: true,
                cell: () => 
                <div>   <Button size='sm' className='m-1' ><FaEdit className='pb-1'/></Button>
                <Button size='sm' variant='danger' className='m-1'><FaTrashAlt className='pb-1'/></Button></div>
                ,
            },
           
            
          ];
          const customStyles = {
            rows: {
              style: {
                // backgroundColor:'lightgreen'
              }
            },
            headCells: {
              style: {
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px',
                backgroundColor:'lightblue'

              },
            },
            cells: {
              style: {
                // paddingLeft: '8px', // override the cell padding for data cells
                // paddingRight: '8px',
              },
            },
          };
          
        return ( <div className=''>
            <DataTable title ='Users'
             columns = {columns} 
             data ={this.state.data}
            //  selectableRows
             striped

             pagination 
             responsive      
             selectableRowsHighlight
            //  progressPending
            button
             highlightOnHover
             persistTableHead
             
             pointerOnHover
             fixedHeader
             subHeader 
             customStyles ={customStyles}
             subHeaderComponent ={
                 <div>
                 <div className="d-flex">
                  <Form.Group className="mb-0" sm='11'>
                    <Form.Control 
                      name='searchString' 
                value ={this.state.searchString} 
                placeholder ='Search Here..' 
                onChange={this.handleSelect}
                    />
                  </Form.Group>
                 

                  <Button className=" btn-sm ml-3" >
                    <FaPlus className='mr-2 mb-1' />
                    Add New
                  </Button>
                </div>
                    


                 </div>
             }  />
        </div> );
    }
}
 
export default Logs;