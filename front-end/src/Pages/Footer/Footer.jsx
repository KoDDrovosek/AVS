import React from 'react';
import styleFooter from './Footer.css';
import imgIG from './img/instagram.png';
import imgGM from './img/gmail.png';
import imgTW from './img/twitter.png';
import imgFB from './img/facebook.png';
import imgSoGo from './img/SoGo.jpeg';


function Footer (){
    return(
        <div>
            <section class="info_bgc">
                <div class="info_block-upper_footer">
                    <div class="find_us">
                        <div>Find us</div>
                        <a href="https://www.instagram.com/fivemin_av/">
                            <img src={imgIG}/>
                        </a>
                        <a href="">
                            <img src={imgGM}/>
                        </a>
                        <a href="">
                            <img src={imgTW}/>
                        </a>
                        <a href="https://m.facebook.com/5min-151792778814744/">
                            <img src={imgFB}/>
                        </a>
                    </div>
                </div>
        </section>
        <footer>
            <div class="footer_container">
                <div class="sogo">
                    <img src={imgSoGo} alt=""/>
                </div>
                <div>Made by SoGo Web 2018</div>    
            </div>
        </footer>
        </div>
    )
}

export default Footer;