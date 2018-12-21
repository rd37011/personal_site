import React, { Component } from 'react';
import './styles/App.css';
import './styles/bootstrap.min.css';
import './styles/font-awesome.min.css';
import './styles/main.css';


class App extends Component {
  render() {
    return (
        <div>
          <div id="header" className="header">
            <div className="container">
              <div className="row centered">
                <div className="col-lg-12">
                  {/* EDIT: name */}
                  <h1>Ryan Diaz</h1>
                  {/* EDIT: title | email */}
                  <h3>
                    Student pursuing a BSc in Computer Science at the
                    University of Miami |{" "}
                    <a href="mailto:rd37011@gmail.com">
                      rd37011@gmail.com
                    </a>
                  </h3>
                </div>
                {/*/.col-lg-12 */}
              </div>
              {/*/.row */}
            </div>
            {/*/.container */}
          </div>
          {/*/.header */}
          <section id="about" name="about" />
          <div className="about">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-lg-offset-1">
                  <h5>About me</h5>
                </div>
                <div className="col-lg-6">
                  {/* EDIT: about */}
                  <p>
                    Hi, I'm Ryan! I'm a fourth-year student at the University
                    of Miami working towards a BSc in Computer Science, with
                    minors in Japanese and Mathematics. I thoroughly enjoy
                    solving problems using creative, streamlined solutions,
                    and optimizing and streamlining to both create beautiful
                    code and save time.
                  </p>
                  <p>
                    This website is still under construction! Come back later :)
                  </p>

                </div>
                <div className="col-lg-3">
                  {/* EDIT: download link */}
                  <p>
                    <a href="RYAN_DIAZ_RESUME_DEC_2018.pdf" target="_blank">
                      <i className="icon-file" />
                      <sm>DOWNLOAD MY RESUME</sm>
                    </a>
                  </p>
                </div>
              </div>
              {/*/.row */}
            </div>
            {/*/.container */}
          </div>
          {/*/ #intro */}
          <section id="resume" name="resume" />
          {/* EDUCATION SECTION */}
          <div className="container desc">
            <div className="row">
              <div className="col-lg-2 col-lg-offset-1">
                <h5>Education</h5>
              </div>
              {/* EDIT: education line 1 */}
              <div className="col-lg-6">
                <p>
                  <t>Bachelors of Science in Computer Science </t>
                  <br />
                  University of Miami
                  <br/><i>with Minors in Mathematics and Japanese <br/>
                  -Coursework in Computer Architecture, System Programming in C, Operating Systems,
                  Artificial Intelligence, Data Structures and Algorithm Analysis, Database Management and Design, Computer
                  Networks, Machine Learning
                </i>
                </p>
              </div>
              <div className="col-lg-3">
                <p>
                  <sm>August 2015 - Expected May 2019
                    <br/>
                    Coral Gables, FL
                  </sm>
                  <br />
                  <imp>
                    <sm>In progress!</sm>
                  </imp>
                </p>
              </div>
              <div className="col-lg-2 col-lg-offset-1">
              </div>
              <div className="col-lg-6">
                <p>
                  <t>Study Abroad</t>
                  <br />
                  Sophia University (上智大学)
                  <br/><i>Participated in a 4-month exchange program at Sophia University in Tokyo, Japan, where I undertook
                  coursework in Linguistics, studies of Japanese society, International Relations, and Japanese language.</i>
                </p>
              </div>
              <div className="col-lg-3">
                <p>
                  <sm>March 2017-August 2017
                    <br/>
                    Chiyoda-ku, Tokyo, Japan
                  </sm>
                </p>
              </div>



            </div>
            {/*/.row */}
            <br />
            <hr />
          </div>

          {/*/.container */}
          {/* WORK SECTION */}
          <div className="container desc">
            <div className="row">
              <div className="col-lg-2 col-lg-offset-1">
                <h5>Work Experience</h5>
              </div>
              {/* EDIT: work line 1 */}
              <div className="col-lg-6">
                <p className="tight">
                  <t>
                    Software Engineering Intern<br />
                    JPMorgan Chase & Co, Corporate and Investment Banking
                  </t>
                </p>
                <p>
                  <i>
                    -Built a UI to help streamline internal processes with developers as end users, on React, Spring Boot, and an
                    internal React toolkit, while learning all technologies on the job.<br/>
                    -Worked as part of a 2-person team using an Agile development strategy to increase productivity.<br/>
                    -Conducted weekly stand-up meetings with team lead to discuss client requirements and stay on track.
                  </i>
                </p>
              </div>
              <div className="col-lg-3">
                <p>
                  <sm>
                    June 2018 - August 2018 <br />
                    Tampa, FL{" "}
                  </sm>
                </p>
              </div>
              <div className="col-lg-2 col-lg-offset-1">
              </div>
              <div className="col-lg-6">
                <p className="tight">
                  <t>
                    Senior Computer Operator - Office of Assessment, Research
                    and Data Analysis <br />
                    Miami-Dade County Public Schools
                  </t>
                </p>
                <p>
                  <i>
                    -Redesigned and implemented changes to the county website
                    using HTML and CSS; given free rein to optimize in areas
                    seen fit.<br />
                    -Wrote critical macros in VB to help streamline and speed
                    up workflow, collectively saving weeks of work.<br />
                    -Entering, verifying and maintaining student standardized
                    assessment records.<br />
                    -Troubleshooting and discussing hardware and software
                    hurdles for coworkers looking for creative solutions.
                  </i>
                </p>
              </div>
              <div className="col-lg-3">
                <p>
                  <sm>
                    June 2015 - June 2018 <br />
                    Miami, FL{" "}
                  </sm>
                </p>
              </div>
            </div>
            {/*/.row */}
            <br />
            <hr />
          </div>
          {/*/.container */}
          <div className="container desc">
            <div className="row">
              <div className="col-lg-2 col-lg-offset-1">
                <h5>Projects</h5>
              </div>
              {/* EDIT: work line 1 */}
              <div className="col-lg-6">
                <p className="tight">
                  <t>BlockRx</t>
                  <br />
                  Early 2018
                </p>
                <p>
                  <i>
                    -A medical billing web-app made to streamline and secure patient-doctor relations
                    and communications, built on the Ethereum network using Solidity, connected to a MongoDB database.
                    Developed as part of a 4-person team during a 36-hour hackathon.
                  </i>
                </p>
                <p className="tight">
                  <t>Poseidon</t>
                  <br />
                  Late 2017
                </p>
                <p>
                  <i>
                    -Web-app made during JP Morganʼs Code for Good 2017 challenge,
                    meant to educate children on ocean conservation. Backend built on Python and MongoDB, frontend on pure HTML/CSS,
                    myself handling server and frontend communication in JavaScript and Node.JS. (October 2017)
                  </i>
                </p>
                <p className="tight">
                  <t>Impression</t>
                  <br />
                  Early 2017
                </p>
                <p>
                  <i>
                    -Virtual reality application developed using IBM's Watson
                    API made in Unity using C#, made to aid students in
                    literary and poetic analysis through the use of a VR
                    headset. Developed as part of a 4-person team during
                    MangoHacks 2017, placing 11th out of 43 teams.
                  </i>
                </p>
              </div>
              {/* EDIT: work line 2*/}
            </div>
            {/*/.row */}
            <br />
            <hr />
          </div>
          {/*/.container */}
          {/* SKILLS SECTION */}
          <div className="container desc">
            <div className="row">
              <div className="col-lg-2 col-lg-offset-1">
                <h5>Languages & Technologies</h5>
              </div>
              <div className="col-lg-6">
                <p>
                  <t>Languages</t>
                  <br />
                  -Comfortable in Java, C<br />
                  -Prior experience in Python, C#, VB, HTML/CSS
                  <br />
                </p>
                <p>
                  <t>Spoken Languages</t>
                  <br />
                  -Fluent in English, Spanish<br />
                  -Limited proficiency in French and Japanese
                  <br />
                </p>
                <p>
                  <t>Technologies</t>
                  <br />
                  -Prior experience in Flask, .NET and Unity<br />
                </p>
              </div>
            </div>
            {/*/.row */}
            <br />
          </div>
          {/*/.container */}
          <section id="contact" name="contact" />
          {/*FOOTER DESCRIPTION */}
          <div id="footwrap" className="footer">
            <div className="container">
              <div className="table-column">
                <div className="col-lg-6">
                  <p>
                    <t>Feel free to contact me! (Psst, I'm looking for a job!)</t>
                  </p>
                </div>
                <div className="col-lg-6">
                  <t>Email</t>
                  <p>
                    <a
                        href="mailto:rd37011@gmail.com"
                        className="mail"
                    >
                      rd37011@gmail.com
                    </a>{" "}
                  </p>
                </div>
                <div className="col-lg-6">
                  <t>Find me elsewhere!</t>
                  <p>
                    <a href="https://github.com/rd37011">
                      <i className="icon-github" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ryan-diaz-621711100"
                    >
                      <i className="icon-linkedin" />
                    </a>
                  </p>
                </div>
              </div>
              {/*/.row */}
            </div>
            {/*/.container */}
          </div>
          {/*/ #footer */}
        </div>
    );
  }
}

export default App;
