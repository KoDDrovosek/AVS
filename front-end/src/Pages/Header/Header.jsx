import React from 'react';
import headerStyle from './Header.css';

function Header (){
    return(
        <div>
            <div className="container-header">
                <div className="menu_box-header">
                    <ul>
                        <li><a>home</a></li>
                        <li><a>about us</a></li>
                        <li><a>news</a></li>
                        <li><a>lorem</a></li>     
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;