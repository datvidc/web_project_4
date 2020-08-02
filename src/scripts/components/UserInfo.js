import { secretUID } from "../../../secret.js";

export default class UserInfo {
  constructor(userNameSelector, userTitelSelector, userImageSelector) {
    this._userName = document.querySelector(userNameSelector);
    this._userTitel = document.querySelector(userTitelSelector);
    this._userImage = document.querySelector(userImageSelector);
    this.userId = secretUID;
  }

  isUser(ownerID) {
    return ownerID == this.userId;
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      titel: this._userTitel.textContent,
      id: this.userId,
    }
  }

  setUserInfo(name, title) {
    this._userName.textContent = name;
    this._userTitel.textContent = title;
  }

  setUserID(id) {
    this.userId = id;
  }

  setuserImage(imageURL) {
    this._userImage.src = imageURL;
  }




}
