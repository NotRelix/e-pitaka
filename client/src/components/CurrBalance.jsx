import view_hide from "../assets/View_hide.png";

const CurrBalance = () => {
  return (
    <>
      <div className="container balance-container">
        <div className="row balance-header">
          <div className="col">
            <h3>CURRENT BALANCE:</h3>
          </div>
          <div className="col-1">
            <button className="hide-button">
              <img className="img_hide" src={view_hide} alt="View Hide" />
            </button>
          </div>
        </div>
        <div className="row">
          <p className="balance-value">₱ 1,000,000.00</p>
        </div>
      </div>
    </>
  );
};

export default CurrBalance;
