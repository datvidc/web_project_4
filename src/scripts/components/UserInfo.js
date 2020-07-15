export default class UserInfo {
  constructor(userNameSelector, userTitelSelector, userImageSelector) {
    this._userName = document.querySelector(userNameSelector);
    this._userTitel = document.querySelector(userTitelSelector);
    this._userImage = document.querySelector(userImageSelector);
    this._userId = _getUser();
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


  _getUser() {
    fetch("https://around.nomoreparties.co/v1/group-1/users/me", {
        headers: {
          authorization: "3aa990c2-b590-4bfb-9403-af52e9b89792"
        }
      })
      .then(res => res.json())
      .then(result => {
        console.log(result);
      })


  }


}