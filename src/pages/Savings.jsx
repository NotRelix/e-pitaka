import { React, useState } from "react";
import closeButton from "../assets/close_ring_light.png";
import '../styles/Savings.css'

function Savings() {
  const [total, setTotal] = useState(100000.00);
  return (
    <>
      <div className="card savings-container">
        <div className="card-header line-color">
          <h1>SAVING</h1>
          <img src={closeButton} alt="" />
        </div>
        <div className="card-body savings-body">
          <p>TOTAL SAVINGS:</p>
          <h1>₱{total.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</h1>
          <div className="chart">
            <h1>CHART</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Savings