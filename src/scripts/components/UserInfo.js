import Api from "../components/Api.js";

export default class UserInfo {
  constructor(userNameSelector, userTitelSelector, userImageSelector) {
    this._userName = document.querySelector(userNameSelector);
    this._userTitel = document.querySelector(userTitelSelector);
    this._userImage = document.querySelector(userImageSelector);
    this._userId = "3";

  }

  isUser(ownerID) {
    return ownerID === this._userId;
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      titel: this._userTitel.textContent,
      id: this._userId,
    }
  }

  setUserInfo(name, title) {
    this._userName.textContent = name;
    this._userTitel.textContent = title;
  }

  setUserID(imageURL, id) {
    this._userImage.src = imageURL;
    this._userId = id;
  }


  _getUser() {
    fetch("https://around.nomoreparties.co/v1/group-1/users/me", {
        headers: {
          authorization: "3aa990c2-b590-4bfb-9403-af52e9b89792"
        }
      })
      .then(res => res.json())
      .then(result => {
        return result._id;
      })


  }


}
