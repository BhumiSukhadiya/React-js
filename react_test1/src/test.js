import React from'react';
import {BootstrapTable, TableHeaderColumn} from'react-bootstrap-table';
import axios from 'axios';
import {Link} from 'react-router'
import toastr from 'toastr';

class Test extends React.Component {
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this)
        this.state = {
            data: []
        };
      // this.test=this.test.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:3001/getData')
            .then(res => {
                this.setState({
                    data: res.data
                });

            });
    }
    
    test(){
        console.log("clicked");
    }

    render() {
        const options = {
            page: 1,  // which page you want to show as default
            sizePerPageList: [{
                text: '5', value: 5
            }, {
                text: '10', value: 10
            }, {
                text: '15', value: 15
            }, {
                text: '20', value: 20
            }, {
                text: '25', value: 25
            }, {
                text: 'All', value: this.state.data.length
            }], // you can change the dropdown list for size per page
            sizePerPage: 10,  // which size per page you want to locate as default
            pageStartIndex: 1, // where to start counting the pages
            paginationSize: 4,  // the pagination bar size.
            prePage: 'Prev', // Previous page button text
            nextPage: 'Next', // Next page button text
            firstPage: 'First', // First page button text
            lastPage: 'Last', // Last page button text
            clearSearch: true,

        };
        /*const selectRow = {
            mode: 'checkbox',  // multi select
            bgColor: '#eeffcc',
            showOnlySelected: true
        };
        const cellEdit = {
            mode: 'dbclick', // click cell to edit
            blurToSave: true,
        };*/
        var d = [];
        if (this.state.data.length > 0) {
            for (var i = 0; i < this.state.data.length; i++) {
                d[i] = {
                    'sr_no': i + 1,
                    'profile':"/images/"+this.state.data[i].profile,
                    'name': this.state.data[i].firstName + " " + this.state.data[i].lastName,
                    'age': this.state.data[i].age,
                    'action_url': this.state.data[i]._id
                }

            }
           // console.log(d);
        }
        function action_urlFormatter(url, row) {
            return (
                <div style={{padding:"15px"}}>
                <Link to={"/authorUpdate/" + url}>
                    <button className="btn btn-info">Update</button>
                </Link>
                <br/><br/>
                    <button className="btn btn-danger" onClick={()=>deleteAuthor(url)} >Delete</button>
                </div>
            );
        }
        function image_formatter(url, row) {
            return (
                <img src={url} alt="pro_" width="100" height="100"/>
            ); 
        }
        function deleteAuthor(id){
            console.log(id);
            if(confirm("Do you really want to delete this author?")){
                axios.delete('http://localhost:3001/deleteData?id='+id)
             .then(res => {
                toastr.success(res.data);
                /*var self=this;
                 axios.get('http://localhost:3001/getData')
                 .then(response => {
                    self.setState({data: response.data });
                 })
    */
                //window.location.reload();
                //browserHistory.push('/authors/');
             })
            }
    }
        return (
            <BootstrapTable data={d} hover={true} search={ true } pagination={ true } options={options} striped
                           >
                <TableHeaderColumn dataField="sr_no" isKey={true} searchable={false} dataAlign="center" dataSort={true}
                                   width="50px">Sr. No.</TableHeaderColumn>
                <TableHeaderColumn dataField="profile"  dataAlign="center"
                                   width="150px" dataFormat={image_formatter}>Profile Image</TableHeaderColumn>
                <TableHeaderColumn dataField="name" dataSort={true} dataAlign="center"
                                   width="150px">Name</TableHeaderColumn>
                <TableHeaderColumn dataField="age" dataSort={true} dataAlign="center"
                                   width="150px">Age </TableHeaderColumn>
                <TableHeaderColumn dataField="action_url" dataFormat={action_urlFormatter} dataAlign="center"
                                   width="150px" editable={ {type: 'textarea'} }>Action</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}

export default Test;

