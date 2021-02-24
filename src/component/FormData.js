import React from 'react'
import {connect} from 'react-redux'
import {addData} from '../action/postAction'
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
class FormData extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
            body:''
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handlebody=(e,editor)=>{
        const body=editor.getData()
        this.setState({body})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            title:this.state.title,
            body:this.state.body
        }
        this.props.dispatch(addData(formData))
        this.setState({
            body:'',
            title:''
        })
    }
    render(){
        return (
            <div>
                <div>
                    <h1>Add Post</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor='title'>Title</label><br/><br/>
                        <input
                            type='text'
                            name='title'
                            id='title'
                            placeholder='Enter Your Title'
                            value={this.state.title}
                            onChange={this.handleChange}
                            required
                        /><br/><br/>
                        <label htmlFor='body'>Body</label><br/><br/>
                        <CKEditor
                            id='body'
                            editor={ClassicEditor}
                            data={this.state.body}
                            onChange={this.handlebody}
                        /><br/><br/>
                        <input type='submit' value='PUBLISH'/>
                    </form>
                </div>
            </div>
        )
    }
}
export default connect()(FormData)