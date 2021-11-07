import React from "react";
import "./AboutMe.css";
import profile from "./profile.jpg";
import html from "./html.png";
import css from "./css.png";
import javascript from "./javascript.png";
import react from "./react.png";
import bootstrap from "./bootstrap.png";
import nodejs from "./nodejs.png";
import expressjs from "./expressjs.png";
import mongodb from "./mongodb.png";
import aws from "./aws.png";
import adobexd from "./adobe-xd.png";
import adobeIllustrator from "./adobe-illustrator.png";
import figma from "./figma.png";

function AboutMe() {
  return (
    <div className="main">
      <h1 className="about-title">About Me</h1>
      <div className="cont">
        <div className="left">
          <ul>
            <li>
              <a href="#profile">Profile</a>
            </li>
            <li>
              <a href="#aboutme">About Me</a>
            </li>
            <li>
              <a href="#message">Message</a>
            </li>
            <li>
              <a href="#education">Eduction</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <div className="profile header" id="profile">
            <img src={profile} alt="profile" width="250px" className="pic" />
            <div className="name">
              <h1 className="cn">Mohammad Akram Chaudhary</h1>
              <p className="posi">Full Stack Web Developer</p>
            </div>
          </div>
          <div className="AboutMe header" id="aboutme">
            <h1 className="heading">About Me</h1>
            <p className="para">
              My name is Mohammad Akram. I am Web Developer by Passion and
              Profession. I am 22 Year old B.tech Student. I reside in Thane
              city. I am studing B.Tech in Computer Science and Engineering from
              Institution of Engineers India (Kolkata).
            </p>
          </div>
          <div className="Message header" id="message">
            <h1 className="heading">Message</h1>
            <p className="para">
              Thank you for visiting this website. I made this website as my
              project and for my hobby to write blogs. On this website, you will
              find the best blogs about Science and Technology without any
              distractive advertisement (this website contains ads but it will
              not be annoying ). This website is fully functional with react
              technology so You feel the best user experience and is easily
              readable.
            </p>
          </div>
          <div className="Education header" id="education">
            <h1 className="heading">Education Quastion</h1>
            <table>
              <thead>
                <th>Degree</th>
                <th>Board</th>
                <th>Percentage</th>
              </thead>
              <tbody>
                <tr>
                  <td>B.Tech in CSE</td>
                  <td>IEI</td>
                  <td>persuing</td>
                </tr>
                <tr>
                  <td>Diploma in EJ</td>
                  <td>MSBTE</td>
                  <td>65.18%</td>
                </tr>
                <tr>
                  <td>SSC</td>
                  <td>MSBSHSE</td>
                  <td>62.80%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="Skills header" id="skills">
            <h1 className="heading">Skills</h1>
            <div className="skill">
              <ul>
                <li>
                  <strong>FrontEnd Web Developement</strong>
                </li>
                <li>
                  <img src={html} alt="" width="50px" />
                  <p>HTML</p>
                </li>
                <li>
                  <img src={css} alt="" width="50px" />
                  <p>CSS</p>
                </li>
                <li>
                  <img src={javascript} alt="" width="50px" />
                  <p>JavaScript</p>
                </li>
                <li>
                  <img src={react} alt="" width="50px" />
                  <p>React</p>
                </li>
                <li>
                  <img src={bootstrap} alt="" width="50px" />
                  <p>BootStrap</p>
                </li>
              </ul>
              <ul>
                <li>
                  <strong>BackEnd Web Developement</strong>
                </li>
                <li>
                  <img src={nodejs} alt="" width="40px" />
                  <p>Node.js</p>
                </li>
                <li>
                  <img src={expressjs} alt="" width="40px" />
                  <p>Express.js</p>
                </li>
                <li>
                  <strong>BDMS</strong>
                </li>
                <li>
                  <img src={mongodb} alt="" width="30px" />
                  <p>MongoDB</p>
                </li>
                <li>
                  <strong>Dev-Ops</strong>
                </li>
                <li>
                  <img src={aws} alt="" width="60px" />
                  <p>AWS</p>
                </li>
              </ul>
              <ul>
                <li>
                  <strong>Design</strong>
                </li>
                <li>
                  <img src={adobexd} alt="" width="50px" />
                  <p>AdobeXD</p>
                </li>
                <li>
                  <img src={adobeIllustrator} alt="" width="50px" />
                  <p>Adobe Illustrator</p>
                </li>
                <li>
                  <img src={figma} alt="" width="30px" />
                  <p>Figma</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
