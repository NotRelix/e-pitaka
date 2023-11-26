import { useNavigate } from "react-router-dom";
import '../styles/SignUp.css'

function SignUpForm() {
  const navigate = useNavigate()
  return (
    <>
      <div className="card text-center form-container sign-up-form">
        <form>
          <h3>CREATE ACCOUNT</h3>
          <div className="row input-area">
            <div className="col-sm">
              <label>First Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className=" col-sm">
              <label>Last Name</label>
              <input type="text" className="form-control" />
            </div>
          </div>

          <div className="row input-area">
            <div className="col">
              <label>Your Username</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className=" row input-area">
            <div className="col">
            <label>Your Password</label>
            <input type="password" className="form-control" />
            </div>
          </div>
          <div className="row input-area">
            <div className="col">
            <label>Valid ID</label>
            <input type="file" className="form-control" />
            </div>
          </div>
          <div className="row justify-content-center">
            <button type="submit" className="sign-up-button" onClick={() => navigate('/e-pitaka/home')}>
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUpForm;
