function SignInForm() {
  return (
    <>
      <div className="container col-3 form-container">
        <form>
          <h3>SIGN IN</h3>
          <div className="input-area">
            <label>Your Institution</label>
            <input type="text" className="form-control"/>
          </div>
          <div className="input-area">
            <label>Your Email Address</label>
            <input type="text" className="form-control"/>
          </div>
          <div className="input-area">
            <label>Your Password</label>
            <input type="password" className="form-control"/>
          </div>
          <button type="submit" className="sign-in-button">SIGN IN</button>
        </form>
      </div>
    </>
  );
}

export default SignInForm;