import React from 'react'


function Profile() {
  return <>
<body>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-3 fw-light fs-5">Sign In</h5>
            <div class="d-none d-lg-block" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-user mb-3" style={{ fontSize: "50px" }} />
              </div>   
            <form>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
              </div>

              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                <label class="form-check-label" for="rememberPasswordCheck">
                  Remember password
                </label>
              </div>
              <div class="d-grid">
                <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
                  in</button>
              </div>
              <hr class="my-4"/>
              <div class="d-grid mb-2">
                <button class="btn btn-google btn-login text-uppercase fw-bold" type="submit">
                <a target = "_blank" href="http://gmail.com/" rel="noreferrer" style={{ color: "white" }}> <i class="fab fa-google me-2"></i>Sign in with Google</a>
                </button>
              </div>
              <div class="d-grid mb-2">
                <button class="btn btn-facebook btn-login text-uppercase fw-bold" type="submit">
                <a target = "_blank" href="https://www.facebook.com//" rel="noreferrer" style={{ color: "white" }}> <i class="fab fa-facebook me-2"></i>Sign in with Facebook</a>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>

        </>
}

export default Profile