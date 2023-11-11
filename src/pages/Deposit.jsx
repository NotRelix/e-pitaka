import '../styles/Deposit.css'
import closeButton from '../assets/close_ring_light.png'

function Deposit() {
  return (
    <>
    <div className="card deposit-container">
        <div className="card-header line-color deposit-title">
        <h1>DEPOSIT</h1>
        <img src={closeButton} className='close-button' />
    </div>
    <div className='card-body deposit-body'>
        <h3 className="deposit-text">STEP 1:</h3>
        <p className="deposit-text">Go to your School's Teller.</p>
        <h3 className="deposit-text">STEP 2:</h3>
        <p className="deposit-text">Enter your username and your amount you want to deposit.</p>
        <h3 className="deposit-text">STEP 3:</h3>
        <p className="deposit-text">Wait for the confirmation if the deposit is successful.</p>
    </div>
    </div>
    </>
  )
}

export default Deposit
