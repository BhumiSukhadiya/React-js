var React = require('react');
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1 style={myStyle}>Enter Your Information</h1>
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
            <table border="1">
              <tr>
                <td>Name:</td>
                <td><input type="text" name="c_name"/></td>
              </tr>
              <tr>
                <td>Email:</td>
                <td><input type="email" name="c_email"/></td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td><input type="number" name="c_number"/></td>
              </tr>
              <tr>
                <td></td>
                <td><input type="submit" name="submit" value="Submit"/></td>
              </tr>
            </table>
            </div>
        );
    }
}
var element=(<div><Header/><Content/></div>);
