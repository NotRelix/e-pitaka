import "../styles/AboutUs.css";
import DevelopersCard from "../components/DevelopersCard";

function AboutUs() {
  return (
    <>
      <h3 className="aboutus-title">ABOUT E-PITAKA</h3>
      <p className="aboutus-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
        Duis sed gravida justo. Praesent metus erat, tempor non congue in, varius sit amet nibh. Vestibulum iaculis, dolor et pretium finibus, arcu augue auctor neque, vitae facilisis nulla sem nec mauris. Donec ullamcorper rutrum orci aliquam porta. Proin a turpis eleifend, tincidunt enim non, dapibus turpis. Duis quis aliquet nisi. Phasellus auctor tristique venenatis. Vivamus tincidunt dictum eleifend.
      </p>
      <div className="aboutus-line" />
      <h3 className="aboutus-h3">THE DEVELOPERS</h3>
      <DevelopersCard />
    </>
  );
}

export default AboutUs;
