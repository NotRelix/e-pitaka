function SignUpForm(){
    return (
      <>
      <div className="form-container">
        <form>
          <h3>CREATE ACCOUNT</h3>
          <div className="input-area">
            <label>Your Institution</label>
            <input type="text" className="form-control"/>
          </div>
          <div className="input-area">
            <label>First Name</label>
            <input type="text"className="form-control"/>
          </div>
          <div className="input-area">
            <label>Last Name</label>
            <input type="text" className="form-control"/>
          </div>
          <div className="input-area">
            <label>Your Username</label>
            <input type="text" className="form-control"/>
          </div>
          <div className="input-area">
            <label>Your Password</label>
            <input type="password" className="form-control"/>
          </div>
          <div className="input-area">
            <label>Valid ID</label>
            <input type="file" className="form-control"/>
          </div>
          <button type="submit" className="sign-up-button">SIGN UP</button>
        </form>
      </div>
    </>
    )
}

export default SignUpForm