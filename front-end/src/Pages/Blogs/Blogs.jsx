import React , { Component } from 'react';
import styleBlog from './Blogs.css';
import imgBlogBanner from './img/1394_wien.jpg';
import ReactModal from 'react-modal';


class Blogs extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            currentBlog:props.currentBlog,
            modalIsOpen:false
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.renderModal = this.renderModal.bind(this);
        this.getData = this.getData.bind(this);
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
    getData(id){
        this.state.data.forEach((item)=>{
            if(item._id == id){
                localStorage.setItem("Blog",JSON.stringify(item));
            }
        }); 
    }
    openModal(id) {
        this.getData(id);
        this.setState({modalIsOpen:true});
        console.log(this.state.modalIsOpen);
    }
    closeModal() {
        localStorage.clear();
        this.setState({modalIsOpen: false});
    }
    renderModal() {
        if(JSON.parse(localStorage.getItem("Blog")) !=null){
            return(
                <div className="modal">
                    <div className="modal_title-Blog">{JSON.parse(localStorage.getItem("Blog")).head}</div>
                    <div className="modal_body-Blog">{JSON.parse(localStorage.getItem("Blog")).body}</div>
                    <div onClick={this.closeModal} className="modal_bt-Blogs">Close</div>
                </div>
            )
        }else{
            <div className="modal"></div>
        }
	}
    render(){
        let blogs = this.state.data != 0 ? this.state.data.map((item,i)=>{
            return(
                <div className="blog_box-Blog">
                    <div className="blogName">{item.head}</div>
                    <div className="shortReview-Blog">
                        {item.shortReview !=''?(
                            <div>{item.shortReview}</div>
                        ):(
                            <div>{item.body.substring(0,150)+'...'}</div>
                        )
                        }
                    </div>
                    <div className="bt_open-Blog" onClick={()=>{this.openModal(item._id)}}>open</div>
                </div>
            )
        }):'';
        return(
            <div class="blog-Blog">
                <img src={imgBlogBanner}/>
                <div className="container-Blog">{blogs}</div>
                <ReactModal
					isOpen={this.state.modalIsOpen}
					onRequestClose={this.closeModal}
					style={{
						overlay: {
						  position: 'fixed',
						  top: 0,
						  left: 0,
						  right: 0,
						  bottom: 0,
						  backgroundColor: 'rgba(255, 255, 255, 0.75)'
						},
						content: {
						  position: 'absolute',
						  top: '30%',
						  left: '30%',
						  right: '30%',
						  border: '1px solid #ccc',
						  background: '#fff',
						  overflow: 'auto',
						  WebkitOverflowScrolling: 'touch',
						  borderRadius: '4px',
						  outline: 'none',
						  padding: '20px'
						}
					  }}
				>
					{this.renderModal()}
				</ReactModal>
            </div>
            
        )
    }
}

export default Blogs;