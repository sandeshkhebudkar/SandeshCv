import React from 'react';
import './cover.css';
import Img from '../images/superfolio_hello.svg';

function open(){
    var xyz=document.getElementById("form");
    if(xyz.style.display === "none"){
        xyz.style.display="block";
    }else{
        xyz.style.display="none";
    }
}

function cover(props) {
    return (
        <div className="cover">
            <div className="col-12 col-sm-12 col-md-6">
            <img src={Img} alt="Side Pic"/>
            </div>

            <div className="col-12 col-sm-12 col-md-6 " >
                <div >
                    <h2>HELLO!</h2>
                    <p>I'm Sandesh Khebudkar</p>
                    <p>Web Developer & Mobile Application Developer</p>
                </div>
                <div id="form">
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInput" className="form-label">Company Name</label>
                        <input type="text" className="form-control" id="exampleInput" required/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputFile1" className="form-label">File's</label>
                        <input type="file" className="form-control" id="exampleInputFile1"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>

                
                <button onClick={open}>Hire Me</button>
            </div>
      </div>  
        
    );
}

export default cover;