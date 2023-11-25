import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const navigate = useNavigate()
  return (
    <>
      <div className="form-container">
        <form>
          <h3>CREATE ACCOUNT</h3>
          <div className="name-group">
            <div className="input-area">
              <label>First Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="input-area">
              <label>Last Name</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="input-area">
            <label>Your Username</label>
            <input type="text" className="form-control" />
          </div>
          <div className="input-area">
            <label>Your Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="input-area">
            <label>Valid ID</label>
            <input type="file" className="form-control" />
          </div>
          <button type="submit" className="sign-up-button" onClick={() => navigate('/e-pitaka/home')}>
            SIGN UP
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUpForm;
