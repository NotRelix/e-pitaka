import "../styles/AboutUs.css";
import DevelopersCard from "../components/DevelopersCard";

function AboutUs() {
  return (
    <>
      <h1 className="aboutus-title">ABOUT E-PITAKA</h1>
      <p className="aboutus-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className="aboutus-line" />
      <h2 className="aboutus-h2">THE DEVELOPERS</h2>
      <DevelopersCard />
    </>
  );
}

export default AboutUs;
