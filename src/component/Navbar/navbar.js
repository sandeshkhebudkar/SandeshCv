import React from 'react';
import './navbar.css';

function navbar(props) {
    return (
        <div className="">
            <nav className="navbar header">
                <div className="container-fluid">
                    <div className="col-12 col-sm-12 col-md-6">
                    <span ><h1>Sandesh Khebudkar</h1></span>
                    </div>
                    <div  className="linkDiv col-12 col-sm-12 col-md-6" >
                    
                        <a href="https://www.instagram.com/sandesh_khebudkar6968" onClick={()=> window.open("someLink", "_blank")} className=''><i className="fa fa-instagram fa-2x"></i></a>
                        <a href="https://www.facebook.com/sandesh.khebudkar/" onClick={()=> window.open("someLink", "_blank")} className=''><i className="fa fa-facebook fa-2x"></i></a>
                        <a href="mailto:skhebudkar1@gmail.com" onClick={()=> window.open("someLink", "_blank")} className=''><i className="fa fa-envelope fa-2x"></i></a>
                        <a href="https://www.linkedin.com/in/sandesh-khebudkar-ab3946132/" onClick={()=> window.open("someLink", "_blank")} className=''><i className="fa fa-linkedin fa-2x"></i></a>
                
                   </div>
                </div>
            </nav>
        </div>
    );
}

export default navbar;