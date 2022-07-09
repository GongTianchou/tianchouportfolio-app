import React from 'react';
import YummyGrocery from "../../assets/YummyGrocery.PNG";
import SocialNetworkAPI from "../../assets/SocialNetworkAPI.PNG";
import PasswordGen from "../../assets/PasswordGenerator.PNG";
import weather from "../../assets/WeatherDashboard.PNG";
import quiz from "../../assets/CodingQuiz.PNG";
import Note from "../../assets/NoteTaker.PNG";
import Employee from "../../assets/EmployeeTracker.PNG";

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <div className="container">
        <div className="card">
          <img src={YummyGrocery} alt="Yummy Grocery"></img>
          <h2>
            <strong>Yummy Grocery</strong>
          </h2>
          <div className="buttons">
            <button className="code">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/StephenWDickey/yummy-grocery"
              >
                Code
              </a>
            </button>
            {/* <button className="site">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href=""
              >
                Site
              </a>
            </button> */}
          </div>
        </div>
        <div className="card">
          <img src={SocialNetworkAPI} alt="Social Network API"></img>
          <h2>
            <strong>Social Network API</strong>
          </h2>
          <div className="buttons">
            <button className="code">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/GongTianchou/Social-Network-API"
              >
                Code
              </a>
            </button>
            <button className="site">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1wB2jh2t3NChWHJz3-zxOOus1L1XXqs_z/view"
              >
                Video
              </a>
            </button>
          </div>
        </div>

        <div className="card">
          <img src={PasswordGen} alt="Password Generator"></img>
          <h2>
            <strong>Password Generator</strong>
          </h2>
          <div className="buttons">
            <button className="code">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/GongTianchou/Week3-Password-Generator"
              >
                Code
              </a>
            </button>
            {/* <button className="site">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href=""
              >
                Site
              </a>
            </button> */}
          </div>
        </div>

        <div className="card">
          <img src={weather} alt="Weather Dashboard"></img>
          <h2>
            <strong>Weather Dashboard</strong>
          </h2>
          <div className="buttons">
            <button className="code">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/GongTianchou/CityWeatherForecast"
              >
                Code
              </a>
            </button>
            {/* <button className="site">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href=""
              >
                Site
              </a>
            </button> */}
          </div>
        </div>
        <div className="card">
          <img src={quiz} alt="Coding Quiz"></img>
          <h2>
            <strong>Coding Quiz</strong>
          </h2>
          <div className="buttons">
            <button className="code">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/GongTianchou/Coding-Quiz"
              >
                Code
              </a>
            </button>
            {/* <button className="site">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href=""
              >
                Site
              </a>
            </button> */}
          </div>
        </div>

        <div className="card">
          <img src={Note} alt="Note Taker"></img>
          <h2>
            <strong>Note Taker</strong>
          </h2>
          <div className="buttons">
            <button className="code">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/GongTianchou/NoteTaker"
              >
                Code
              </a>
            </button>
            <button className="site">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://smallnotetaker.herokuapp.com/"
              >
                Site
              </a>
            </button>
          </div>
        </div>
        {/* <div className="card">
          <img src={} alt="E-commerceBackEnd"></img>
          <h2>
            <strong>E-commerceBackEnd</strong>
          </h2>
          <div className="buttons">
            <button className="code">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/GongTianchou/E-commerceBackEnd"
              >
                Code
              </a>
            </button>
            <button className="site">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/16ebkwj992wv34aOFQdQujLV8f-j5JemS/view"
              >
                Video
              </a>
            </button>
          </div>
        </div> */}
        <div className="card">
          <img src={Employee} alt="Employee Tracker"></img>
          <h2>
            <strong>Employee Tracker</strong>
          </h2>
          <div className="buttons">
            <button className="code">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/GongTianchou/EmployeeTracker"
              >
                Code
              </a>
            </button>
              <button className="site">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1u2Abomh1H0LMnSyeL5JysV3shktjE1Ww/view"
              >
                Video
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
