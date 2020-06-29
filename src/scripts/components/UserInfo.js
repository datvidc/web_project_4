export default class UserInfo {
  constructor(userNameSelector, userTitelSelector) {
    this._userName = document.querySelector(userNameSelector);
    this._userTitel = document.querySelector(userTitelSelector);
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      titel: this._userTitel.textContent
    }
  }

  setUserInfo(name, title) {
    this._userName.textContent = name;
    this._userTitel.textContent = title;
  }
}
