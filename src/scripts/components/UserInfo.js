export default class UserInfo {
  constructor(userNameSelector, userTitelSelector, userImageSelector) {
    this._userName = document.querySelector(userNameSelector);
    this._userTitel = document.querySelector(userTitelSelector);
    this._userImage = document.querySelector(userImageSelector);
    this._userId = api.getUser();
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

  setUserImg(imageURL) {
    this._userImage.src = imageURL;
  }
}