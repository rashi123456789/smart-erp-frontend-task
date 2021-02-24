import React from 'react'
import {connect} from 'react-redux'
import parse from "html-react-parser";
class ListData extends React.Component{
    constructor(props){
        super(props)
        this.state={
            search:''
        }
    }
    handleSearch=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    render(){
        return(
            <div>
                <h1>Post Details</h1>
                <form>
                    <input
                        type='search'
                        value={this.state.search}
                        name='search'
                        onChange={this.handleSearch}
                        placeholder='search with title or body'
                    />
                </form>
                <div className='scrolling'>
                    {
                        this.props.post.filter(post=>post.title.toLowerCase().includes(this.state.search)||post.body.toLowerCase().includes(this.state.search)).map((ele,i)=>{
                            return(
                                <div className='card' key={i}>
                                    <h2>{ele.title}</h2>
                                    <p>{parse(ele.body)}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        post:state.post
    }
}
export default connect(mapStateToProps)(ListData)