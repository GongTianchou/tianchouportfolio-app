import React from 'react';
import pfp from "../../assets/tianchou.jfif";
import resume from "../../assets/SampleResume.pdf";

function Header() {
  return (
    <div className="container header">
      <div className="profilePic">
        <img src= {pfp} alt= "Tianchoupicture"></img>
      </div>
      <div className="intro">
        <h1>
          Hi, I'm <b>Tianchou Gong</b>. A Fullstack Developer.
        </h1>
        <a target="_blank" rel="noopener noreferrer" href={resume}>
          <button className="resume">
            <b>My Resume</b>
          </button>
        </a>
      </div>
    </div>
  );
}
export default Header;