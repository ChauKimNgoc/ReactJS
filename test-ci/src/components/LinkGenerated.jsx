import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

const LinkGenerated = ({ domain }) => {
  return (
    <div className="linkgenerated-container">
      <div className="linkgenerated">
        <h3>Link generated!</h3>
        <a href="https://mindx.edu.vn/">{domain}/kUelV</a>
        <div className="icon-container">
          <FontAwesomeIcon icon={faFacebookSquare} className="icon"/>
          <FontAwesomeIcon icon={faTwitter} className="icon" />
          <FontAwesomeIcon icon={faEnvelopeSquare} className="icon"/>
          <FontAwesomeIcon icon={faFacebookSquare} className="icon" />
          <FontAwesomeIcon icon={faTelegram} className="icon" />
        </div>
      </div>
    </div>
  );
};

export default LinkGenerated;
