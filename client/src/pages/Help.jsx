import "../styles/Help.css";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";

function Help() {
  return (
    <>
      <div className="container text-center help-body">
        <div className="row help-head">
          <h3>DO YOU NEED HELP?</h3>
          <p>
            Etiam justo sapien, placerat at condimentum at, auctor quis diam.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Phasellus nec pellentesque arcu. Praesent
            eget ex venenatis, venenatis felis in, rutrum arcu. Vivamus rutrum
            elit nec lacus ultricies placerat.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="container help-container">
            <div className="row">
              <div className="col">
                <form>
                  <div className="help-input">
                    <label>Email</label>
                    <input type="email" />
                  </div>
                  <div className="help-input">
                    <label>Message</label>
                    <textarea rows="8"></textarea>
                  </div>
                  <button type="submit" className="submit-button">
                    Submit
                  </button>
                </form>
              </div>

              <div className="col text-center">
                <h3>Contact Us!</h3>
                <div className="link-container">
                  <img src={facebook} className="social-logo" />
                  <a href="/">www.facebook.com/e-pitaka</a>
                  <img src={instagram} className="social-logo" />
                  <a href="/">@epitaka</a>
                  <img src={linkedin} className="social-logo" />
                  <a href="/">www.linkedin.com/e-pitaka</a>
                  <img src={twitter} className="social-logo" />
                  <a href="/">@epitaka</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Help;
