import { secretToken, secretGroup } from "../../../secret.js";

export default class Api {
  constructor(url, options) {
    this._startUrl = url;
    this._header = options;
  }

  getUser() {

    const userUrl = this._startUrl.concat("group-1/users/me");
    return this._makeRequests(userUrl);
  }

  _makeRequests(url) {

    return fetch(url, this._header)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`ERROR: ${res.status}`);
        }
      })
  }


  getInitialCards() {
    return fetch("https://around.nomoreparties.co/v1/group-1/cards", this._header)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Error: ${res.status}`);
          ``
        }
      })
  }
}
