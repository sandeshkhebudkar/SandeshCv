import React from 'react';
import './intro.css';
import Img from '../images/avatar.png';

function intro(props) {
    return (
        <div>
            <section className="about">
        <div className="col-12 col-md-8 col-lg-8">
          <h2>Hello! I'm Sandesh Khebudkar</h2>
          <p style={{width:"80%"}}> 
            I am passionate about UI/UX design and Web Design. I am a skilled
            front-end developer and ,I am a quick learner and a team worker that
            gets the job done. I can easily capitalize on low hanging fruits and
            quickly maximize timely deliverables for real-time schemas.
          </p>
          <p className="form-field">Age : 24</p>
          
          <p><a href="Pune, Maharashtra, India" onClick={()=> window.open("someLink", "_blank")} className=''><i className="fa fa-map-marker "></i></a><span className="form-field">.   Pune, Maharashtra, India </span></p>
          <p><a href="tel:+917741026968" onClick={()=> window.open("someLink", "_blank")} className=''><i className="fa fa-phone "></i></a><span className="form-field"> +91 7741026968</span></p>
        </div>
        <div className="col-12 col-md-4 col-lg-4"><img style={{width:"70%"}}src={Img} alt="profile pic"/></div>
      </section>
        </div>
    );
}

export default intro;