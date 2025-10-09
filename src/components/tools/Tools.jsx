import React from "react";
import "../tools/tools.css";
import tools from "../../assets/images/tools.png";

function Tools() {
  return (
    <div className="tools">
      <div className="tools-text">
        <h2>
          <span>Tools</span> For Teachers And Learners
        </h2>
        <p>
          Class has a dynamic set of teaching tools built to be deployed and
          used during class. Teachers can handout assignments in real-time for
          students to complete and submit.
        </p>
      </div>
      <img src={tools} alt="" />
    </div>
  );
}

export default Tools;
