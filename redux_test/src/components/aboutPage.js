
import React,{Component} from 'react';
import {Link} from 'react-router';
class About extends Component{
    render(){
        return (
            <div>
                <h1>About</h1>
                <p>
                    This application uses following technologies:
                </p>
                <ul>
                    <li>React</li>
                    <li>React Router</li>
                    <li>Redux</li>
                    <li>Node</li>
                    <li>Bootstrap</li>
                </ul>

            </div>
        );
    }
}
export default About;