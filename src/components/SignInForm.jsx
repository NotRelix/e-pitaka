function SignInForm() {
  return (
    <>
      <div className="form-container">
        <form>
          <h3>SIGN IN</h3>
          <div className="input-area">
            <label>Your Institution</label>
            <input type="text" />
          </div>
          <div className="input-area">
            <label>Your Username</label>
            <input type="text" />
          </div>
          <div className="input-area">
            <label>Your Password</label>
            <input type="text" />
          </div>
          <button type="submit" className="sign-in-button">SIGN IN</button>
        </form>
      </div>
    </>
  );
}

export default SignInForm;