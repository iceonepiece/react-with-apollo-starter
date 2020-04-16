class AuthController {
  constructor() {
    this._currentUser = null;
  }

  setCurrentUser(user) {
    this._currentUser = user;
  }

}

export default AuthController;
