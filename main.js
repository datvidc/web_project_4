!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n.p+"fbd245dfe38b091fbea7433c2e5bd1b5.png",o=n.p+"7bd7e141b6bf1a656720ee7d4cfa9c1e.png",i=n.p+"4ae5eaaf0a228cf585147cfff9cfde5d.png",a=n.p+"26a3ad65c163b76db771d1b17b9ed8f3.png",u=n.p+"427fa820909afc866d348bf8ce5f14ef.png",c=n.p+"63b1bbec3ce3eb7ebc9d288d824cadb7.png",s=document.querySelector(".profile__edit"),l=document.querySelector(".popup__changetext"),f=(document.querySelector(".popup__close"),document.querySelector(".profile__name"),document.querySelector(".profile__title"),document.querySelector(".popup__title")),p=document.querySelector(".popup__name"),d=(document.querySelector(".popup__addcard"),document.querySelector(".profile__add")),_=(document.querySelector(".popup__close_addcard"),document.querySelector(".popup__addcard")),h=(document.querySelector(".popup__url"),document.querySelector(".popup__place"),document.querySelector(".popup__edit-form_add"),document.querySelector(".popup__img"),document.querySelector(".popup__closeimg"),document.querySelector(".elements__list")),m=document.querySelector(".popup__delete"),v=document.querySelector(".profile__avatar-overlay"),y=document.querySelector(".popup__edit-picture"),b=[{name:"Lake Louise",link:r,alt:"Idylic picture of Lake Louise"},{name:"Yosemite Valley",link:o,alt:"YoseMite Valley from a birds eye perspective- hovering over a lake"},{name:"Islands Brygge",link:i,alt:"Moody harbour picture - looking out on the sail boats"},{name:"Latemar",link:a,alt:"Latemar nature pic- nature Picture"},{name:"Strøget",link:u,alt:"Largest European pedestrian shopping street, and one of the oldest- Strøget shot from birds eye view"},{name:"Copenhagen",link:c,alt:"Rooftops of Copenhagen- moody- rainy - old but classic"}];function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t,n,r,o,i,a,u,c,s,l){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._text=t,this._link=n,this._template=r,this._handleCardClick=o,this._id=i,this._likes=a,this._owner=u,this._handleRemoveCard=s,this._ownerID=c,this._handleLikes=l,this._numLikes=a.length}var t,n,r;return t=e,(n=[{key:"_getTemplate",value:function(){var e=document.querySelector(this._template).content.querySelector(".elements__element").cloneNode(!0);if(1===this._owner);else{var t=e.querySelector(".elements__trash");t.parentNode.removeChild(t)}if(this._likes.length>0){e.querySelector(".elements__heart_likes").textContent=this._likes.length,this._numLikes=this._likes.length;for(var n=0;n<this._likes.length;n++)if(this._likes[n]._id===this._ownerID){e.querySelector(".elements__heart").classList.add("elements__heart_clicked");break}}return e}},{key:"_addHeart",value:function(){var e=this,t=this._newCard.querySelector(".elements__heart");t.addEventListener("click",(function(){t.classList.contains("elements__heart_clicked")?e._cardClicked=!0:e._cardClicked=!1,e._cardClicked?(t.classList.toggle("elements__heart_clicked"),e.minusLike(),e._handleLikes(!0,e._id),e._cardClicked=!1):(t.classList.toggle("elements__heart_clicked"),e.plusLike(),e._handleLikes(!1,e._id),e._cardClicked=!0)}))}},{key:"plusLike",value:function(){this._numLikes+=1,this._likesText.textContent=this._numLikes}},{key:"minusLike",value:function(){this._numLikes-=1,this._likesText.textContent=this._numLikes}},{key:"_addTrash",value:function(){var e=this;this._newCard.querySelector(".elements__trash").addEventListener("click",(function(){e._handleRemoveCard(e._id)}))}},{key:"_addEvents",value:function(){var e=this;this._newCard.querySelector(".elements__image").addEventListener("click",(function(t){e._handleCardClick(e._text,e._link),t.stopPropagation()}))}},{key:"addCard",value:function(){this._newCard=this._getTemplate(),1==this._owner&&this._addTrash(),this._addEvents(),this._addHeart(),this._newCard.querySelector(".elements__text").textContent=this._text;var e=this._newCard.querySelector(".elements__image");return e.src=this._link,e.alt=this._text,e.id=this._id,this._likesText=this._newCard.querySelector(".elements__heart_likes"),this._newCard}}])&&g(t.prototype,n),r&&g(t,r),e}();function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t,n){var r=n.formSelector,o=n.inputSelector,i=n.submitButtonSelector,a=n.inactiveButtonClass,u=n.inputErrorClass,c=n.errorClass;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=r,this._inputSelector=o,this._submitButtonSelector=i,this._inactiveButtonClass=a,this._inputErrorClass=u,this._errorClass=c,this._form=t}var t,n,r;return t=e,(n=[{key:"_checkInputValidation",value:function(e){e.validity.valid?this._hideErrorMessage(e):this._showErrorMessage(e,e.validationMessage)}},{key:"_showErrorMessage",value:function(e,t){var n=e.id;console.log(this._form),console.log("#".concat(n,"-error"));var r=this._form.querySelector("#".concat(n,"--error"));e.classList.add(this._inputErrorClass),r.textContent=t,r.classList.add(this._errorClass)}},{key:"_hideErrorMessage",value:function(e){var t=e.id,n=this._form.querySelector("#".concat(t,"--error"));e.classList.remove(this._inputErrorClass),n.textContent=" "}},{key:"_toggleButtonState",value:function(e,t){e.every((function(e){return e.validity.valid}))?(t.classList.remove(this._inactiveButtonClass),t.removeAttribute("disabled")):(t.classList.add(this._inactiveButtonClass),t.setAttribute("disabled"," "))}},{key:"enableValidation",value:function(){var e=this;Array.from(document.querySelectorAll(this._formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()}));var n=Array.from(t.querySelectorAll(e._inputSelector)),r=t.querySelector(e._submitButtonSelector);e._toggleButtonState(n,r),n.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidation(t),e._toggleButtonState(n,r)}))}))}))}}])&&S(t.prototype,n),r&&S(t,r),e}();n(0);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n,r;return t=e,(n=[{key:"setEventListeners",value:function(){var e=this;document.addEventListener("keyup",this._handleEscClose),this._popupElement.querySelector(".popup__close").addEventListener("click",(function(){e.close()}))}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&(this.close(),e.stopPropagation())}},{key:"open",value:function(){this._popupElement.classList.add("popup_visible"),this.setEventListeners()}},{key:"close",value:function(){this._popupElement.classList.remove("popup_visible"),document.removeEventListener("keyup",this._handleEscClose),this._popupElement.querySelector(".popup__close").removeEventListener("click",this.close)}}])&&E(t.prototype,n),r&&E(t,r),e}();function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t,n){return(O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var o=x(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return P(this,n)}}function P(e,t){return!t||"object"!==L(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(i,e);var t,n,r,o=I(i);function i(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),o.call(this,e)}return t=i,(n=[{key:"setEventListeners",value:function(){var e=this;document.addEventListener("click",(function(){e.close()})),O(x(i.prototype),"setEventListeners",this).call(this)}},{key:"open",value:function(e,t){var n=this._popupElement.querySelector(".popImg"),r=this._popupElement.querySelector(".popup__imgtext");n.src=t,n.alt=e,r.textContent=e,O(x(i.prototype),"open",this).call(this)}}])&&q(t.prototype,n),r&&q(t,r),i}(w);function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._itemsArray=r,this._renderer=o,this._container=document.querySelector(n)}var t,n,r;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._itemsArray.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&R(t.prototype,n),r&&R(t,r),e}();function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t,n){return(A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=F(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=F(e);if(t){var o=F(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return N(this,n)}}function N(e,t){return!t||"object"!==B(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(i,e);var t,n,r,o=V(i);function i(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(r=o.call(this,e))._callbackFunc=t,r._form=r._popupElement.querySelector(".popup__edit-form"),r._buttonText=n,r._button=r._form.querySelector(".popup__save"),r}return t=i,(n=[{key:"_getInputValues",value:function(){return Object.fromEntries(new FormData(this._form))}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){e._button.textContent=e._buttonText,t.preventDefault();var n=e._getInputValues();e._callbackFunc(n),t.stopPropagation(),e.close()})),A(F(i.prototype),"setEventListeners",this).call(this)}},{key:"resetForm",value:function(){this._form.reset()}}])&&D(t.prototype,n),r&&D(t,r),i}(w);function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Y=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(t),this._userTitel=document.querySelector(n),this._userImage=document.querySelector(r),this.userId="36ee6699552e83cd4b01111f"}var t,n,r;return t=e,(n=[{key:"isUser",value:function(e){return e==this.userId}},{key:"getUserInfo",value:function(){return{name:this._userName.textContent,titel:this._userTitel.textContent,id:this.userId}}},{key:"setUserInfo",value:function(e,t){this._userName.textContent=e,this._userTitel.textContent=t}},{key:"setUserID",value:function(e){this.userId=e}},{key:"setuserImage",value:function(e){this._userImage.src=e}}])&&J(t.prototype,n),r&&J(t,r),e}();function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var G=new(function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._startUrl=t,this._header=n,this._headerinfo=n.headers}var t,n,r;return t=e,(n=[{key:"getUser",value:function(){var e=this._startUrl.concat("group-1/users/me");return this._makeRequests(e)}},{key:"updateUser",value:function(e,t){var n=this._startUrl.concat("/group-1/users/me");return fetch(n,{method:"PATCH",headers:this._headerinfo,body:JSON.stringify({name:e,about:t})}).then((function(e){if(e.ok)return e.json()})).catch((function(e){console.log(e)}))}},{key:"updateAvatar",value:function(e){var t=this._startUrl.concat("/group-1/users/me/avatar");return fetch(t,{method:"PATCH",headers:this._headerinfo,body:JSON.stringify({avatar:e})}).then((function(e){if(e.ok)return e.json()})).catch((function(e){console.log(e)}))}},{key:"_makeRequests",value:function(e){return fetch(e,this._header).then((function(e){return e.ok?e.json():Promise.reject("ERROR: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){var t=this._startUrl.concat("/group-1/cards/"+e);return fetch(t,{method:"DELETE",headers:this._headerinfo}).then((function(t){t.ok&&document.getElementById(e).parentElement.remove()})).catch((function(e){console.log(e)}))}},{key:"addCard",value:function(e,t){var n=this._startUrl.concat("/group-1/cards");return fetch(n,{method:"POST",headers:this._headerinfo,body:JSON.stringify({name:e,link:t})}).then((function(e){if(e.ok)return e.json()})).catch((function(e){console.log(e)}))}},{key:"likeCard",value:function(e){var t=this._startUrl.concat("/group-1/cards/likes/"+e);fetch(t,{method:"PUT",headers:this._headerinfo}).then((function(e){e.ok})).catch((function(e){console.log(e)}))}},{key:"disLike",value:function(e){var t=this._startUrl.concat("/group-1/cards/likes/"+e);fetch(t,{method:"DELETE",headers:this._headerinfo}).then((function(e){e.ok})).catch((function(e){console.log(e)}))}},{key:"getInitialCards",value:function(){return fetch("https://around.nomoreparties.co/v1/group-1/cards",this._header).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}}])&&z(t.prototype,n),r&&z(t,r),e}())("https://around.nomoreparties.co/v1/",{headers:{authorization:"3aa990c2-b590-4bfb-9403-af52e9b89792","Content-Type":"application/json"}}),K=new Y(".profile__name",".profile__title",".profile__avatar");G.getUser().then((function(e){K.setUserInfo(e.name,e.about),K.setUserID(e._id),K.setuserImage(e.avatar)})).catch((function(e){console.log(e)}));var Q=function(e,t,n){e?G.likeCard(t):G.disLike(t)};G.getInitialCards().then((function(e){var t=new U({items:e,renderer:function(e){var n=function(e,t){W.open(e,t)};if(K.isUser(e.owner._id)){var r=new k(e.name,e.link,".element__elem",n,e._id,e.likes,1,K.userId,Z,Q).addCard();t.addItem(r)}else{var o=new k(e.name,e.link,".element__elem",n,e._id,e.likes,0,K.userId,Z,Q).addCard();t.addItem(o)}}},".elements__list");t.renderItems()})).catch((function(e){console.log(e);var t=new U({items:b,renderer:function(e){var n=new k(e.name,e.link,".element__elem",(function(e,t){W.open(e,t)})).addCard();t.addItem(n)}},".elements__list");t.renderItems()}));var W=new T(".popup__img");W.setEventListeners();var X=new H(".popup__changetext",(function(e){var t=e.ProfileName,n=e.profileTitle;G.updateUser(t,n).then((function(){K.setUserInfo(t,n)})).catch((function(e){console.log(e)}))}),"Saving ...");X.setEventListeners();var Z=function(e){te.open(),m.dataset.id=e},$=new H(".popup__addcard",(function(e){var t=e.placename,n=e.popupurl,r=function(e,t){W.open(e,t)};G.addCard(t,n).then((function(e){var t=new k(e.name,e.link,".element__elem",r,e._id,e.likes,1,K.userId,Z,Q).addCard();h.prepend(t)})).catch((function(e){console.log(e)}))}),"Saving..."),ee=new H(".popup__edit-picture",(function(e){var t=e.imgUrl;G.updateAvatar(t).then((function(){K.setuserImage(t)})).catch((function(e){console.log(e)}))}),"Saving ..."),te=new H(".popup__delete-confirm",(function(){var e=m.dataset.id;G.deleteCard(e).then((function(){})).catch((function(e){console.log(e)}))}),"Deleting ...");v.addEventListener("click",(function(){ee.resetForm(),ee.open()})),s.addEventListener("click",(function(){var e=K.getUserInfo();f.value=e.titel,p.value=e.name,X.open()})),d.addEventListener("click",(function(){$.resetForm(),$.open()})),new C(l,{formSelector:".popup__edit-form",inputSelector:".popup__edit",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_invalid",inputErrorClass:"popup__edit_invalid",errorClass:"popup__edit_error"}).enableValidation(),new C(y,{formSelector:".popup__edit-picture",inputSelector:".popup__edit",submitButtonSelector:".popup__userImg",inactiveButtonClass:"popup__save_invalid",inputErrorClass:"popup__edit_invalid",errorClass:"popup__edit_error"}).enableValidation(),new C(_,{formSelector:".popup__edit-form_add",inputSelector:".popup__edit",submitButtonSelector:".popup__save_addcard",inactiveButtonClass:"popup__save_invalid",inputErrorClass:"popup__error-input",errorClass:"popup__edit_error"}).enableValidation()}]);