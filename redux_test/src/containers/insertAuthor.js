import React,{Component} from 'react';
import AuthorForm from '../components/authorForm';
import {connect} from 'react-redux';

class InsertAuthor extends Component{
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this)
        this.state = {
            imagePreviewUrl:'',
            author:{}
        };
        this.onChangeImage=this.onChangeImage.bind(this);
    }

    componentWillMount(){
       console.log(this.props.params);
        let authors=this.props.authors;
        let authorId='58ca2fe621443b1c705567d2dfdf';
        let test={};
        authors.map((author)=>{
            if(author._id === authorId){
               // console.log(author);
                test=author;
            }
        });
        console.log(test);
        this.setState({
            author:test
        });

    }

    onChangeImage(e){
        //console.log("Image change");
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                imagePreviewUrl: reader.result
            });
        };
        reader.readAsDataURL(file)
    }

    render(){
        return(
            <AuthorForm onChangeImage={this.onChangeImage} imagePreview={this.state.imagePreviewUrl} author={this.state.author}/>
        );
    }
}

function mapStateToProps(state) {

    return {
        authors: state.authors
    }
}

export default connect(mapStateToProps)(InsertAuthor);