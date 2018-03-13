import React , { Component } from 'react';
import styleBlog from './Blogs.css';
import imgBlogBanner from './img/1394_wien.jpg';

class Blogs extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    componentWillMount(){
        fetch("http://"+window.location.host+"/getBlog",{
            method:'GET',
        }).then(res=>{
            res.json().then(res=>{
                this.setState({data:res});
            });
        })
    }
    render(){
        let blogs = this.state.data != 0 ? this.state.data.map((item,i)=>{
            console.log(item);
            return(
                <div className="blog_box-Blog">
                    <div className="blogName">{item.head}</div>
                    <div className="shortReview-Blog">
                        {item.shortReview !=''?(
                            <div>{item.shortReview}</div>
                        ):(
                            <div>{item.body.substring(0,154)+'...'}</div>
                        )
                        }
                    </div>
                    <div className="bt_open-Blog">open</div>
                </div>
            )
        }):'';
        return(
            <div class="blog-Blog">
                <img src={imgBlogBanner}/>
                <div className="container-Blog">{blogs}</div>
            </div>
        )
    }
}

export default Blogs;