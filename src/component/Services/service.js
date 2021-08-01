import React from 'react';
import './service.css';

function service(props) {
    return (
        
      <div className="serviceBlock"> 
        <div className="main">
          <div className="education col-12 col-md-4">
            <div className="len">Education</div>
            <ul>
              <li>
                <h5 className="year">2018-2020</h5>
                <h5 className="dg"><i className="fa fa-graduation-cap fa-2x "></i> <span style={{marginTop:'1rem'}}>Masters Degree in Computer Science(Msc.Computer Science)</span></h5>
                <div className="location"><i className="fa fa-map-marker"></i><span style={{marginTop:'1rem'}}> Pratibha College Of Commerce And Computer Studies, Pune</span></div>
                <div className="mark">CGPA 8.2/10</div>
              </li>
              <li>
                <h5 className="year">2015-2018</h5>
                <h5 className="dg"><i className="fa fa-graduation-cap fa-2x "></i> <span style={{marginTop:'1rem'}}>Bachelors Degree in Computer Science(Bsc.Computer Science)</span></h5>
                <div className="location"><i className="fa fa-map-marker"></i><span style={{marginTop:'1rem'}}> Modern College Of Commerce Science And Arts, Pune </span></div>
                <div className="mark">Percentage 67.06</div>
              </li>
              <li>
                <h5 className="year">2012-2014</h5>
                <h5 className="dg"><i className="fa fa-university fa-2x"></i><span style={{marginTop:'1rem'}}> High school</span></h5>
                <div className="location"><i className="fa fa-map-marker"></i><span style={{marginTop:'1rem'}}> Swami.Vevekanand Junior College, Dapodi Pune</span></div>
                <div className="mark">Percentage 49.56</div>
              </li>
              <li>
                <h5 className="year">2011-2012</h5>
                <h5 className="dg"><i className="fa fa-university fa-2x"></i><span style={{marginTop:'1rem'}}> Matriculation</span></h5>
                <div className="location"><i className="fa fa-map-marker"></i><span style={{marginTop:'1rem'}}> Shri Fattechand Jain Vidyalaya Pune </span></div>
                <div className="mark">Percentage 63.27</div>
              </li>
            </ul>

            <div className="contactInfo language">
            <h3 className="title2">Language</h3>
            <ul>
              <li>
                <span className="text">English</span>
                  <span className="percent">
                    <div style={{width: '90%'}}></div>
                  </span>
              </li>
              <li>
                <span class="text">Hindi</span>
                <span className="percent">
                    <div style={{width: '100%'}}></div>
                  </span>
              </li>
              <li>
                <span className="text">Marathi</span>
                  <span className="percent">
                    <div style={{width: '100%'}}></div>
                  </span>
              </li>
            </ul>
          </div>

          </div>


          <div className="aboutProject col-12 col-md-8">
            
            <div className="len">Main Project</div>
            <div className="box">
              <div className="year_company col-12 col-md-2">
                <h6>Dec-19 - may-20</h6>
              </div>
              <div className="text col-12 col-md-10">
                <h4 className="projetctTitle">E-Blogging Platform</h4>
                <p class="container">We have developed a system that shows different types of blogs on one click by using its types and all blogs are maintain and verified by the admin . different Bloggers can add their blogs on the system, and provide detail information about news, the user can also make comments on every blog and give their opinion on the system</p>
              </div>
            </div>

            <div className="box">
              <div className="year_company col-12 col-md-2">
                <h6>Aug-18 - Mar-19</h6>
              </div>
              <div className="text col-12 col-md-10">
                <h4 className="projetctTitle">  School Dairy</h4>
                <p class="container">We have developed Digital Diary application to makes ease the work of users by this School dairy By this application a user can store user details, retrieve contact details, send mails, set events for important meetings of works in Schools on a single platform? Thus the user can manage his contacts and daily working schedules through this E dairy. A user who is working on a system can set events for the important work while doing some other work. Events will remind him about that work. It enhances the punctuality of the user.</p>
              </div>
            </div>

            <div className="box">
              <div className="year_company col-12 col-md-2">
                <h6>Aug-17 - feb-18</h6>
              </div>
              <div className="text col-12 col-md-10">
                <h4 className="projetctTitle"> Online Book Shope</h4>
                <p class="container">Here User can see so many books and buy it online and also added them in the cart and see her digital bill online and it provides 24*7 availability and admin also add and remove books from a website and keep track of the stock.</p>
              </div>
            </div>

            <div className="about skills">
            <h2 className="title2">Professional Skills</h2>
            <div className="part">
                <div className="part1">
                    <div className="len">Language</div>
                    <div className="box">
                        <h6>C</h6>
                        <div className="percent">
                            <div style={{width: '90%'}}></div>
                        </div>
                        <h6>C++</h6>
                        <div className="percent">
                            <div style={{width: '90%'}}></div>
                        </div>
                         <h6>Java</h6>
                        <div className="percent">
                            <div style={{width: '90%'}}></div>
                        </div>
                    </div>
                </div>
                <div className="part1">
                    <div className="len">FrontEnd</div>
                    <div className="box">
                        <h6>HTML5</h6>
                        <div className="percent">
                            <div style={{width: '100%'}}></div>
                        </div>
                        <h6>CSS3</h6>
                        <div className="percent">
                            <div style={{width: '100%'}}></div>
                        </div>
                        <h6>JavaScript</h6>
                        <div class="percent">
                            <div style={{width: '80%'}}></div>
                        </div>
                    </div>
                </div>
                <div className="part1">
                    <div className="len">BackEnd</div>
                    <div className="box">
                        <h6>DBMS</h6>
                        <div className="percent">
                            <div style={{width: '100%'}}></div>
                        </div>
                        <h6>MySQL</h6>
                        <div className="percent">
                            <div style={{width: '90%'}}></div>
                        </div>
                        <h6>MongoDB</h6>
                        <div className="percent">
                            <div style={{width: '70%'}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="interest">
            <h2 className="title2">Interest</h2>
            <div>
                <ul>
                  <li><i class="fa fa-gamepad fa-2x" aria-hidden="true"></i>Gaming</li>
                  <li><i class="fa fa-film fa-2x" aria-hidden="true"></i>Watching Movies</li>
                </ul>
            </div>
        </div>
          </div>
          </div>  
          </div>
        
    );
}

export default service;