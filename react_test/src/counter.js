var React=require('react');
class Hit extends React.Component {
  constructor(props) {
    super(props);
    this.state={count:0}
  }
  onClick(e) {
        this.setState({
            count: this.state.count + 1
        });
    }

  render(){
    return (
      <div>
      <h3>Hit Count: {this.state.count}</h3>
      <button onClick={this.onClick.bind(this)}>Click Here</button>
      </div>

    )
  }
}
module.exports= Hit;
