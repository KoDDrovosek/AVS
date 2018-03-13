import React from 'react';
import styleIB from './IB.css';
import imgIB from './img/campus.jpg';
import imgAM from './img/am.jpg';
import imgST from './img/st.jpg';
import imgCAMP from './img/WU-Campus.jpg';

function IB (){
    return(
        <div className="IB">
            <img className="banner-IB" src={imgIB}/>
            <div className="container_bgc_aboutib-IB">
                <div className="container_aboutib-IB">
                    <img src={imgAM}/>
                    <div className="aboutib_text-IB">
                        IB programmes are based on 3 main items:
                        <ul>
                            <li>Ask challenging questions</li>
                            <li>Think critically</li>
                            <li>Develop research skills proven to help them in higher education</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container_bgc_main-IB">
                <div className="container_main-IB">
                <div className="aboutib_text-IB">
                    Any student of IB school has to be active in his community and has to take his learning beyond academic study.
                    The whole process of IB consists of 4 programmers and are divided by student age. Each of the program bears a  certain idea. We took explanation of each programmer from IB Global Center information:
                        <ul>
                            <li>Primary Years Programme</li>
                            <li> The PYP prepares students to become active, caring, lifelong learners who demonstrate respect for themselves and others and have the capacity to participate in the world around them. It focuses on the development of the whole child.</li>
                        </ul>
                        <ul>
                            Age range:
                            <li>3-12</li>
                        </ul>
                        <ul>
                            <li>Middle Years Programme</li>
                            <li> A challenging framework that encourages students to make practical connections between their studies and the real world, the MYP is inclusive by design; students of all interests and academic abilities can benefit from their participation.</li>
                        </ul>
                        <ul>
                            Age range:
                            <li>16-19</li>
                        </ul>
                        <ul>
                            <li>Career-related Programme</li>
                            <li>The CP is a framework of international education addressing the needs of students engaged in career-related education. It leads to further/higher education apprenticeships or employment.</li>
                        </ul>
                        <ul>
                            Age range:
                            <li>16-19</li>
                        </ul>
                    </div>
                    <img  src={imgST}/>
                </div>
            </div>
            <div className="container_bgc_diploma-IB">
                <div className="container_diploma-IB">
                    <img src={imgCAMP}/>
                    <div className="diploma_text-IB">
                        
                        The most important year is the 10th  ( the last year of Pre- Diploma Programmer) when every student has to make decision about his future direction of life. He will choose 6 subjects which  he has to study during 11th and 12ve years and the final assessment on these subjects will be the final result of all achievements during IB pathway. And to make right decision you’ll need time to understand what is the most close for your soul to do.
                        
                        And now our first advice: if you don’t know what to choose read articles about famous people, their history and biography. Go to Universities during  open days  and just during semester. Talk to your parents about their way. They definitely have what to say. Ask you teachers what they would recommend. If all these attempts don’t work – just choose those subjects in which you are the most successful. But for those who knows what they want to do in their life – go ahead to your dream!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IB;