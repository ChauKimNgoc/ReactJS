import { useState, useEffect } from "react";
import Content from "./Content";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-regular-svg-icons";
import LinkGenerated from "./LinkGenerated";

import "../App.css"

function Home() {
  const domains = ["shrtco.de", "9qr.de", "shiny.link"];

  const [type, setType] = useState("shrtco.de");
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);

  const hrefMindx = "https://mindx.com.vn";

  const handleSubmit = (input) => {
    if (input === hrefMindx) {
      setShow(true);
      
    } else setShow(false);
    setInput("");
  };

  useEffect(() => {
    setShow("");
  }, [type]);

  return (
    <div className="homepage">
      <h1>
        The <span>privacy-friendly</span> URL Shortener
      </h1>

      <div>
        <div className="link-shortener">
          <h2>Link Shortener</h2>
          <div className="input-link">
            <h3>Enter a Link: </h3>
            <input
              value={input}
              type="text"
              placeholder="example.com"
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={() => handleSubmit(input)}>
              <FontAwesomeIcon icon={faCircleRight} className="icon-arrow" />
            </button>
          </div>

          <div className="domain-container">
            <div className="short-domain">
              <h3>Short domain: </h3>
              {domains.map((domain) => (
                <button
                  style={
                    domain === type
                      ? {
                          color: "#fff",
                          backgroundColor: "#333",
                        }
                      : {}
                  }
                  key={domain}
                  onClick={() => setType(domain)}
                >
                  {domain}
                </button>
              ))}
            </div>
          </div>

          <p>
            With this free Link Shortener you can make Links shorter and easier
            to remember. Just enter a Link into the form and click on the above
            Button to generate a short Link. When visiting the short-Link will
            immediately redirect you to the long Link.
          </p>
        </div>

        {show && <LinkGenerated domain={type} />}

        <Content />
      </div>
    </div>
  );
}

export default Home;
