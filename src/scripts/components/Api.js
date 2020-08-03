import { secretToken, secretGroup } from "../../../secret.js";

export default class Api {
  constructor(url, options) {
    this._startUrl = url;
    this._header = options;
    this._headerinfo = options.headers;
  }

  getUser() {
    const userUrl = this._startUrl.concat("group-1/users/me");
    return this._makeRequests(userUrl);
  }

  updateUser(name, about) {
    const updateMe = this._startUrl.concat("/group-1/users/me");
    return fetch(updateMe, {
        method: "PATCH",
        headers: this._headerinfo,
        body: JSON.stringify({
          name: name,
          about: about
        })
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      }).catch(res => {
        console.log(res);
      })
  }

  updateAvatar(link) {
    const newPic = this._startUrl.concat("/group-1/users/me/avatar");
    return fetch(newPic, {
        method: "PATCH",
        headers: this._headerinfo,
        body: JSON.stringify({
          avatar: link
        })
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      }).catch(res => {
        console.log(res);
      })
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

  deleteCard(cardID) {
    const killUrl = this._startUrl.concat("/group-1/cards/" + cardID);

    return fetch(killUrl, {
        method: "DELETE",
        headers: this._headerinfo,
      })
      .then(res => {
        if (res.ok) {

          const el = document.getElementById(cardID).parentElement;
          el.remove();
        }
      }).catch(res => {
        console.log(res);
      })
      // call it like this>
      /* api.deleteCard("5f1203c38b2c57001f1475ca"); */
  }

  addCard(name, link) {
    const addUrl = this._startUrl.concat("/group-1/cards");

    return fetch(addUrl, {
        method: "POST",
        headers: this._headerinfo,
        body: JSON.stringify({
          name: name,
          link: link
        })

      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      }).catch(res => {
        console.log(res);

      })

    // call it like this>
    /*   api.addCard("jerry", "https://pictures.s3.yandex.net/frontend-developer/functions/dog-3.jpg")
    .catch((res) => {
      console.log(res);
    }); */
  }

  likeCard(cardID) {
    const likeUrl = this._startUrl.concat("/group-1/cards/likes/" + cardID);
    fetch(likeUrl, {
        method: "PUT",
        headers: this._headerinfo
      })
      .then(res => {
        if (res.ok) {}
      }).catch(res => {
        console.log(res);

      })
      //call it like> api.likeCard(cardID);
  }

  disLike(cardID) {
    const disLikeUrl = this._startUrl.concat("/group-1/cards/likes/" + cardID);
    fetch(disLikeUrl, {
        method: "DELETE",
        headers: this._headerinfo
      })
      .then(res => {
        if (res.ok) {

        }
      }).catch(res => {
        console.log(res);

      })
      //call it like> api.disLike(cardID);
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

  // I had already written several other classes that worked. Implementing appReady was not required and the video came super late..maybe next time.
  /*   _appReady() {
      return promise.all([this.getInitialCards, this.getUser()])
    } */
}
