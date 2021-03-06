var React=require('react');
var App=require('./App.js');
class Clock extends React.Component {

  constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );

    }
    componentWillUnmount() {
     clearInterval(this.timerID);
   }
   tick() {
     console.log(this.timerID);
     this.setState({
       date: new Date()
     });
   }
  render(){
  return (
    <div><App />
      <h1>Hello, world!</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>

    </div>
  );
  }
}
module.exports=Clock;
