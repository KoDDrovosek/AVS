import React, { Component } from 'react';
import adminStyle from './Admin.css';

class Admin extends Component{
    constructor(props){
        super(props);
        this.state={
            head:'',
            shortReview:'',
            body:''
        }
        this.setTitleBlog = this.setTitleBlog.bind(this);
        this.setSummeryBlog = this.setSummeryBlog.bind(this);
        this.setTextBlog = this.setTextBlog.bind(this);
        this.sendBlog = this.sendBlog.bind(this);
    }
    setTitleBlog(e){
        console.log(e.target.value);
        this.setState({head:e.target.value});
    }
    setSummeryBlog(e){
        this.setState({shortReview:e.target.value});
    }
    setTextBlog(e){
        this.setState({body:e.target.value});
    }
    sendBlog(){
        fetch("http://"+window.location.host+"/addBlog",{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify(this.state)
    })
    .then(res=>{
        if(res.status == 200){
            alert("Done");
            this.setState({head:'',body:'',shortReview:''});
        }else{
            alert("Error");
        }
    })
    }
    render(){
        return(
            <div>
                <form className="form-Admin">
                    <label htmlFor="blog_name">Blog title</label>
                    <textarea id="blog_name" onChange={this.setTitleBlog} value={this.state.head}/>
                    <label htmlFor="shortReview">Blog summary</label>
                    <textarea id="shorReview"onChange={this.setSummeryBlog} value={this.state.shortReview}/>
                    <label htmlFor="blog_main">Blog text</label>
                    <textarea id="blog_main"onChange={this.setTextBlog} value={this.state.body}/>
                    <div className="submit_bt-Admin" onClick={this.sendBlog}>Send blog</div>
                </form>
            </div>
        )
    }
}

export default Admin;