import React from "react";
import './index.scss'
import SideBar from '../SideBar/index';
import {Outlet} from 'react-router-dom';

 const Layout= ()=>{
    return (
        <div className="app">
            <SideBar />
            <div className="page">
                <span className="tags top-tags">&lt;body&gt;</span>
                <span className="tags bottom-tags">
                    &lt;/body&gt;
                    <br />
                    <span className="bottom-tags-html">&lt;/html&gt;</span>
                
                </span>
                <Outlet />
            </div>
        </div>
    )

}
export default Layout;