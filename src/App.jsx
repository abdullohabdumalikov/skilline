import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Tools from "./components/tools/Tools";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="sect1">
          <p>Trusted by 5,000+ Companies Worldwide</p>
          <div className="icons">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
              alt="google"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
              alt="netflix"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1280px-Airbnb_Logo_B%C3%A9lo.svg.png"
              alt="airbnb"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
              alt="amazon"
            />
            <img
              src="https://pngimg.com/d/facebook_logos_PNG19749.png"
              alt="facebook"
            />
            <img
              src="https://cdn.freebiesupply.com/logos/large/2x/grab-logo-png-transparent.png"
              alt="grab"
            />
          </div>
        </section>
        <section className="sect2">
          <div className="what-top">
            <h2>
              What is <span>Skilline?</span>
            </h2>
            <p>
              Skilline is a platform that allows educators to create online
              classes whereby they can store the course materials online; manage
              assignments, quizzes and exams; monitor due dates; grade results
              and provide students with feedback all in one place.
            </p>
            <div className="what-cards">
              <div className="instruct">
                <h4>FOR INSTRUCTORS</h4>
                <button>Start a class today</button>
              </div>
              <div className="student">
                <h4>FOR STUDENTS</h4>
                <button>Enter access code</button>
              </div>
            </div>
          </div>
          <div className="what-bottom">
            <div className="what-text">
              <h3>
                Everything you can do in a physical classroom,
                <span> you can do with Skilline</span>
              </h3>
              <p>
                Skilline’s school management software helps traditional and
                online schools manage scheduling, attendance, payments and
                virtual classrooms all in one secure cloud-based system.
              </p>
              <span className="round"></span>
              <a href="#">Learn more</a>
            </div>

            <div className="vidio">
              <div className="blue"></div>
              <div>
                <button>
                  <a
                    target="_blank"
                    href="https://youtu.be/Yn9HZHVOsog?list=RDYn9HZHVOsog"
                  >
                    <i class="fa-solid fa-play"></i>
                  </a>
                </button>
              </div>
              <div className="yellow"></div>
            </div>
          </div>
        </section>
        <section className="sect3">
          <h2>
            Our <span>Features</span>
          </h2>
          <p>
            This very extraordinary feature, can make learning activities more
            efficient
          </p>
          <Tools/>
        </section>
      </main>
    </>
  );
}

export default App;
