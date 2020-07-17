import { secretToken, secretGroup } from "../../../secret.js";

export default class Api {
  constructor(url, options) {
    this._startUrl = url;
    this._header = options;
  }

  getUser() {
    console.log(this._header);
    const userUrl = this._startUrl.concat("group-1/users/me");
    return this._makeRequests(userUrl);
  }

  _makeRequests(url) {
    console.log(this._header);
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
    return fetch("https://around.nomoreparties.co/v1/group-42/cards", this._header)
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