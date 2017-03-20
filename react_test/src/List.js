var React = require('react');

var List = React.createClass({
  propTypes:{
    type:React.PropTypes.string
  },
  getDefaultProps: function(){
    return {
      type:'Music'
    }
  },
  render: function () {
    var titleText = 'Favorite ' + this.props.type;
    if (this.props.children instanceof Array) {
    	titleText += 's';
    }
    return (
      <div>
        <h1>{titleText}</h1>
        <h3>Hello at {new Date().toString()}</h3>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
});

module.exports = List;
