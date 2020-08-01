import Api from "../components/Api.js";
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
