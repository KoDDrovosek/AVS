import React from 'react';
import { Link } from 'react-router-dom';
import headerStyle from './Header.css';

function Header (){
    if((window.location.pathname)!=("/admin")){
        return(
            <div>
                <div className="container-header">
                    <div className="menu_box-header">
                        <ul>
                            <li><Link to='/'>home</Link></li>
                            <li><Link to='/about_ib'>about ib</Link></li>
                            <li><Link to='/posts'>news</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }else{
        return(<div></div>)
    }
}

export default Header;