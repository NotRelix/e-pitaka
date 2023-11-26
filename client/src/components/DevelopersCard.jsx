import roblos from "../assets/roblos.png";
import roblosgirl from "../assets/Png.png";
import "../styles/DevelopersCard.css";

function DevelopersCard() {
  return (
    <>
      <div className="card text-center developers-container">
        <div className="row">
          <div className="col-sm order-1 developer">
            <img src={roblosgirl} className="developer-image" />
            <p className="developer-name">ROXANNE ANGELLI LOPEZ</p>
          </div>
          <div className="col-sm order-2 developer">
            <img src={roblos} className="developer-image" />
            <p className="developer-name">REECE SERGEI LIM</p>
          </div>
          <div className="col-sm order-3 developer">
            <img src={roblos} className="developer-image" />
            <p className="developer-name">ERNIE MANATAD</p>
          </div>
          <div className="col-sm order-4 developer">
            <img src={roblos} className="developer-image" />
            <p className="developer-name">JASPER LEE MARBELLA</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DevelopersCard;
