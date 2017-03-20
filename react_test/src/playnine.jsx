var React = require('react');
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
var StarsFrame=React.createClass({
	render:function(){
		var numberOfStars=this.props.numberOfStars;
		var stars=[];
		for(var i=0;i<numberOfStars;i++){
			stars.push(
					<div className='test' key={'star_'+i}>*</div>
				);
		}
		return (
			<div id='stars-frame'>
			<div className='well'>
			{stars}
			</div>
			</div>
		);
	}
});

var ButtonFrame=React.createClass({
	
	render:function(){
		var disabled,button,correct=this.props.correct;
		switch(correct){
			case true:
				button=(<button className='btn-true'  onClick={this.props.acceptAnswer}>Correct</button>)
				break;
			case false:
			button=(<button className='btn-false' >Wrong</button>)
				break;
			default:
				disabled=(this.props.selectedNumbers.length === 0);
				button=(<button className='btn' disabled={disabled} onClick={this.props.checkAnswer}>=</button>)
		}
	
		return (
			<div id="button-frame">
			{button}
			<br/>
			<button className='btn-redraw' onClick={this.props.redraw} disabled={this.props.redraws == 0}>
			{this.props.redraws+' '}Redraw  
			</button>
			</div>
		);
	}
});
var AnswerFrame=React.createClass({
	render:function(){
		var props=this.props;
		var selectedNumbers=props.selectedNumbers.map(function(i){
			return <span key={'sel_num_'+i} onClick={props.unClickNumber.bind(null,i)}>{i}</span>
		});
		return (
			<div id='answer-frame'>
			<div className='well'>
			{selectedNumbers}
			</div>
			</div>
		);
	}
});
var NumberFrame=React.createClass({
	render:function(){
		var clickNumber=this.props.clickNumber;
		var numbers=[],className,selectedNumbers=this.props.selectedNumbers,usedNumbers=this.props.usedNumbers;
		//console.log(this.props.selectedNumbers);
		
		for(var i=1;i<=9;i++){
			className="number selected-" + (selectedNumbers.indexOf(i)>=0);
			className+=" used-" + (usedNumbers.indexOf(i)>=0);
			numbers.push(<div className={className} key={'a_'+i} onClick={clickNumber.bind(null,i)}>{i}</div>);
		}
		return (
			<div id='numbers-frame'>
			<div className='well'>
			{numbers}
			</div>
			</div>
		);
	}
});

var DoneFrame=React.createClass({
	render:function(){
		return (

			<div className='status-frame'>
				<h2>{this.props.doneStatus}</h2>
				<br/>
				<button className='btn-playagain' onClick={this.props.resetGame}>Play Again</button>
			</div>
		)
	}
});
var possibleCombinationSum=function(arr, n) {
	  if (arr.indexOf(n) >= 0) { return true; }
	  if (arr[0] > n) { return false; }
	  if (arr[arr.length - 1] > n) {
	    arr.pop();
	    return possibleCombinationSum(arr, n);
	  }
	  var listSize = arr.length, combinationsCount = (1 << listSize)
	  for (var i = 1; i < combinationsCount ; i++ ) {
	    var combinationSum = 0;
	    for (var j=0 ; j < listSize ; j++) {
	      if (i & (1 << j)) { combinationSum += arr[j]; }
	    }
	    if (n === combinationSum) { return true; }
	  }
	  return false;
	}
var Game=React.createClass({
	getInitialState:function(){
		return {
			numberOfStars:this.randomNumber(),
			selectedNumbers:[],
			usedNumbers:[],
			correct:null,
			redraws:5,
			doneStatus:null
		}
	},
	resetGame:function(){
		this.replaceState(this.getInitialState());
	},
	randomNumber:function(){
		return Math.floor(Math.random()*9)+1 ;
	},
	clickNumber:function(clickNum){
		if(this.state.selectedNumbers.indexOf(clickNum)<0){
		this.setState({
			selectedNumbers:this.state.selectedNumbers.concat(clickNum),
			correct:null
		})
		}
	},
	unClickNumber:function(clickNum){
		var selectedNumbers=this.state.selectedNumbers,indexOfNumber=selectedNumbers.indexOf(clickNum);
		selectedNumbers.splice(indexOfNumber,1);
		this.setState({
			selectedNumbers:selectedNumbers,
			correct:null
		});
	},
	sumOfSelectedNumbers:function(){
		return this.state.selectedNumbers.reduce(function(p,n){
			return p+n;
		},0);
	},
	checkAnswer:function(){
		var correct=(this.state.numberOfStars == this.sumOfSelectedNumbers());
		this.setState({
			correct:correct
		});

	},
	acceptAnswer:function(){
		var usedNumbers=this.state.usedNumbers.concat(this.state.selectedNumbers);
		this.setState({
			selectedNumbers:[],
			usedNumbers:usedNumbers,
			correct:null,
			numberOfStars:this.randomNumber()
		},function(){
			this.updateDoneStatus();
		});
	},
	redraw:function(){
		if(this.state.redraws > 0){
		this.setState({
			selectedNumbers:[],
			correct:null,
			numberOfStars:this.randomNumber(),
			redraws:this.state.redraws -1
		},function(){
			this.updateDoneStatus();
		});
		}
	},
	updateDoneStatus:function(){
		if(this.state.usedNumbers.length == 9){
			this.setState({doneStatus:'Great,You Won!'});
			return;
		}
		if(this.state.redraws == 0 && !this.possibleSolutions()){
			this.setState({doneStatus:'Game Over!'});
		}
	},
	possibleSolutions:function(){
		var numberOfStars=this.state.numberOfStars,possibleNumbers=[],usedNumbers=this.state.usedNumbers;
		for(var i=0; i<=9;i++){
			if(usedNumbers.indexOf(i)<0) {
				possibleNumbers.push(i);
			}
		}
		return possibleCombinationSum(possibleNumbers,numberOfStars);
	},
	
	render:function(){
		var selectedNumbers=this.state.selectedNumbers,numberOfStars=this.state.numberOfStars,usedNumbers=this.state.usedNumbers,correct=this.state.correct,redraws=this.state.redraws,doneStatus=this.state.doneStatus,bottomFrame;
		if(doneStatus){
			bottomFrame=<DoneFrame doneStatus={doneStatus} resetGame={this.resetGame}/>;
		}else {
			bottomFrame=<NumberFrame selectedNumbers={selectedNumbers} clickNumber={this.clickNumber} usedNumbers={usedNumbers} />;
		}
		return (
			<div id='game'>
			<h2>Play Nine</h2>
			<hr/>
			<div className='clearFix'>
			<StarsFrame numberOfStars={numberOfStars}/>
			<ButtonFrame selectedNumbers={selectedNumbers} correct={correct} checkAnswer={this.checkAnswer} acceptAnswer={this.acceptAnswer} redraw={this.redraw} redraws={redraws} resetGame={this.resetGame}/>
			<AnswerFrame  selectedNumbers={selectedNumbers} unClickNumber={this.unClickNumber}/>
			</div>
			{bottomFrame}
			</div>
		);
	}
});

module.exports=Game;