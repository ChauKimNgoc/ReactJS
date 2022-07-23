import React from "react";
import { memo } from "react";

import '../App.css'

const Content = () => {
  return (
    <div className="content-container">
      <div className="content">
        <h1>The secure and reliable URL Shortener</h1>
        <p>
          shrtcode is more than just another URL Shortener. shrtcode is very
          secure and privacy friendly. More information → Feel free to use our
          popular Link shortening tool above or try one of our other free Tools.
        </p>
      </div>



      <div>
      <h1>More privacy-friendly Tools →</h1>
      <a href="https://shrtco.de/tools/">More privacy-friendly Tools →</a>
      </div>
     
    </div>
  );
};

export default memo(Content);
