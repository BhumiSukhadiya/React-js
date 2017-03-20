var React=require('react');
var ReactDOM=require('react-dom');
import './index.css';
import $ from 'jquery';
var axios = require('axios');
//import { Button } from 'reactstrap';
var Com=React.createClass({

	getInitialState:function(){
		return {
		items:[]
		}
	},
	render:function(){
		axios.get('/zip_code_to_county_code.csv')
		  .then(function (response) {
		    console.log(response);
		    var data=response['data'];
		    data=data.split('|','\n');
		   document.getElementById('div1').innerHTML=data;
		   //alert(typeof data);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
		if ($('input:checkbox').is(':checked')){
				$('#deleteError').hide();
		}
		return (
			<div>
			<div id="div1">
			</div>
			<div className='divcls'>
			<h1>To Do App</h1>
			<input type="text" className="inp" id="task"/>
			<button onClick={this.btnClick} className='btn'>Add</button>
			<div><List listdata={this.state.items} /></div>
			{this.state.items.length >0 && <div><button onClick={this.checkAll} className='check'>Check All</button><button onClick={this.deleteTask} className='btn'>Delete Task</button><span id="deleteError" className="err">Please select any task to delete</span></div> }
			</div>
			</div>
		)
	},
	checkAll:function(){
		
	    	if($('input:checkbox').is(':checked')){
	    		$('input:checkbox').removeAttr('checked');
	    		$('.check').html('Check All');
	    	}
	    	else{
				$('input:checkbox').attr('checked',true);
				$('.check').html('Uncheck All');
	    		
	    	}

		
	},
	btnClick:function(){
		var input=document.getElementById('task').value;
		if(input == ''){
			return false;
		}
		document.getElementById('task').value='';
		var a=this.state.items;
		a.push(input);
		this.setState({items:a});
		//console.log(this.state.items);
	},
	deleteTask:function(){
		var arr1=[];
		var test=$("input:checkbox[name=checkbox_task]:checked");
		//console.log(test);
		if(test.length == 0){
			$('#deleteError').show();
		}

		test.each(function(){
		    arr1.push($(this).val());
		});
		//console.log(arr);
		var arr2=this.state.items;
		//console.log(this.state.items);
		arr2 = arr2.reduce(function (prev, value) {

	    var isDuplicate = false;
	    for (var i = 0; i < arr1.length; i++) {
	        if (value == arr1[i]) {
	            isDuplicate = true;
	            arr2.splice(i, -1);
	            break;
	        }
	    }
	      
	    if (!isDuplicate) {
	        prev.push(value);
	    }
	       
	    return prev;
		        
		}, []);

		//console.log(arr2);
		this.setState({
			items:arr2,
		})
	}
});

var List=React.createClass({
	render:function(){
		 var listItems = this.props.listdata.map((data,i) =>
		    <li key={data+'_'+i} ><input type="checkbox" className="cbox" name="checkbox_task" value={data}/>{data}</li>
		  );
		  return (
		    <ul className='uiclass'>{listItems}</ul>
		  );

	}	
});
module.exports=Com;