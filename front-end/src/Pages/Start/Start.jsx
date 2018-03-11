import React , {Components} from 'react';
import startStyle from './Start.css';
import imgWe from './img/we.jpeg';
import imgGoal from './img/goal.jpeg';
import imgLogo from './img/logo.png';
import videoMP4 from './video/videoplayback.mp4';
import videoWEBM from './video/videoplayback.webm';
function Start(){
    return(
        <div>
            <div className="bg_container" >
                <div className="video">
                    <video autoPlay >
                        <source src={videoMP4}/>
                        <source src={videoWEBM}/>
                    </video>
                    <div className="logo_container">
                        <div>
                            <img src={imgLogo}/>
                        </div>
                    </div>
                </div>
            </div>
            <main className="container-main">
                <section className="about_us-main">
                    <div className="bgc-ww_block-about_us">
                        <div className="ww_block-about_us">
                            <div className="img_box-about_us">
                                <img src={imgWe}/>
                            </div>
                            <div className="text_block">
                                <div>
                                    Who are we?
                                </div>
                                <div>   
                                    We are a group of self-motivated students “Fivemin” and we are from Amadeus International school in Vienna. Our goal is not to be just another ordinary blog but on the contrary: we want to tell you all about IB diploma program and all pros and cons about student life in the Austrian capital in the first person.
                                </div>
                            </div> 
                    </div>
                    </div>
                    <div className="bgc-og_block-about_us">
                        <div className="og_block-about_us">
                            <div className="text_block">
                                <div>
                                    What is this blog about?
                                </div>
                                <div>
                                    We are going to give you a lot of tips and tricks on how to succeed in IB program. All pieces of advice are going to be in time for exams and other important occasions in IB student’s life.
                                    Moreover, once a week we are going to tell you about interesting places and cool events for students to visit in Vienna.
                                    Feeling interested? Then stay tuned for our posts!
                                </div>
                            </div>
                            <div className="img_box-about_us">
                                <img src={imgGoal}/>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Start;