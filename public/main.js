! function(e) {
  var t = {};s

  function n(r) { if (t[r]) return t[r].exports; var o = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports }
  n.m = e, n.c = t, n.d = function(e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }) }, n.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function(e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
      for (var o in e) n.d(r, o, function(t) { return e[t] }.bind(null, o));
    return r
  }, n.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 1)
}([function(e, t, n) {}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n.p + "fbd245dfe38b091fbea7433c2e5bd1b5.png",
    o = n.p + "7bd7e141b6bf1a656720ee7d4cfa9c1e.png",
    i = n.p + "4ae5eaaf0a228cf585147cfff9cfde5d.png",
    a = n.p + "26a3ad65c163b76db771d1b17b9ed8f3.png",
    u = n.p + "427fa820909afc866d348bf8ce5f14ef.png",
    l = n.p + "63b1bbec3ce3eb7ebc9d288d824cadb7.png",
    c = document.querySelector(".profile__edit"),
    s = document.querySelector(".popup__changetext"),
    p = document.querySelector(".popup__close"),
    f = document.querySelector(".profile__name"),
    d = document.querySelector(".profile__title"),
    _ = document.querySelector(".popup__title"),
    v = document.querySelector(".popup__name"),
    y = document.querySelector(".popup__addcard"),
    m = document.querySelector(".profile__add"),
    h = document.querySelector(".popup__close_addcard"),
    b = document.querySelector(".popup__addcard"),
    g = document.querySelector(".popup__url"),
    S = document.querySelector(".popup__place"),
    E = document.querySelector(".popup__edit-form_add"),
    k = document.querySelector(".popup__img"),
    L = document.querySelector(".popup__closeimg"),
    C = [{ name: "Lake Louise", link: r, alt: "Idylic picture of Lake Louise" }, { name: "Yosemite Valley", link: o, alt: "YoseMite Valley from a birds eye perspective- hovering over a lake" }, { name: "Islands Brygge", link: i, alt: "Moody harbour picture - looking out on the sail boats" }, { name: "Latemar", link: a, alt: "Latemar nature pic- nature Picture" }, { name: "Strøget", link: u, alt: "Largest European pedestrian shopping street, and one of the oldest- Strøget shot from birds eye view" }, { name: "Copenhagen", link: l, alt: "Rooftops of Copenhagen- moody- rainy - old but classic" }],
    w = { formSelector: ".popup__edit-form", inputSelector: ".popup__edit", submitButtonSelector: ".popup__save", inactiveButtonClass: "popup__save_invalid", inputErrorClass: "popup__edit_invalid", errorClass: "popup__edit_error" };

  function q(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }
  var x = function() {
    function e(t, n, r, o) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this._text = t, this._link = n, this._template = r, this._handleCardClick = o }
    var t, n, r;
    return t = e, (n = [{ key: "_getTemplate", value: function() { return document.querySelector(this._template).content.querySelector(".elements__element").cloneNode(!0) } }, { key: "_addTrash", value: function() { this._newCard.querySelector(".elements__trash").addEventListener("click", (function(e) { e.target.parentElement.remove() })) } }, { key: "_addHeart", value: function() { this._newCard.querySelector(".elements__heart").addEventListener("click", (function(e) { e.target.classList.toggle("elements__heart_clicked") })) } }, {
      key: "_addEvents",
      value: function() {
        var e = this;
        this._newCard.querySelector(".elements__image").addEventListener("click", (function(t) {
          var n = document.querySelector(".popup__image"),
            r = document.querySelector(".popup__imgtext"),
            o = document.querySelector(".popup__img");
          n.src = t.target.src, n.alt = t.target.alt;
          var i = t.target.nextElementSibling;
          r.textContent = i.querySelector(".elements__text").textContent, o.classList.toggle("popup_visible"), o.addEventListener("click", (function(e) { e.target.classList.contains("popup") && o.classList.remove("popup_visible") })), o.addEventListener("click", (function() { return e._handleCardClick(e._text, e._link) })), window.addEventListener("keyup", (function(e) { "Escape" === e.key && o.classList.remove("popup_visible") }))
        }))
      }
    }, { key: "addCard", value: function() { return this._newCard = this._getTemplate(), this._addEvents(), this._addHeart(), this._addTrash(), this._newCard.querySelector(".elements__text").textContent = this._text, this._newCard.querySelector(".elements__image").src = this._link, this._newCard.querySelector(".elements__image").alt = this._text, this._newCard } }]) && q(t.prototype, n), r && q(t, r), e
  }();

  function O(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }
  var j = function() {
    function e(t, n) {
      var r = n.formSelector,
        o = n.inputSelector,
        i = n.submitButtonSelector,
        a = n.inactiveButtonClass,
        u = n.inputErrorClass,
        l = n.errorClass;
      ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this._formSelector = r, this._inputSelector = o, this._submitButtonSelector = i, this._inactiveButtonClass = a, this._inputErrorClass = u, this._errorClass = l, this._form = t
    }
    var t, n, r;
    return t = e, (n = [{ key: "_checkInputValidation", value: function(e) { e.validity.valid ? this._hideErrorMessage(e) : this._showErrorMessage(this._form, e, e.validationMessage) } }, {
      key: "_showErrorMessage",
      value: function(e, t, n) {
        var r = t.nextElementSibling;
        t.classList.add(this._inputErrorClass), r.textContent = n, r.classList.add(this._errorClass)
      }
    }, {
      key: "_hideErrorMessage",
      value: function(e) {
        var t = e.nextElementSibling;
        e.classList.remove(this._inputErrorClass), t.classList.remove(this._errorClass), t.textContent = ""
      }
    }, { key: "_toggleButtonState", value: function(e, t) { e.every((function(e) { return e.validity.valid })) ? (console.log("showbutton"), t.classList.remove(this._inactiveButtonClass)) : (t.classList.add(this._inactiveButtonClass), console.log("hidebutton")) } }, {
      key: "enableValidation",
      value: function() {
        var e = this;
        Array.from(document.querySelectorAll(this._formSelector)).forEach((function(t) {
          t.addEventListener("submit", (function(e) { e.preventDefault() }));
          var n = Array.from(t.querySelectorAll(e._inputSelector)),
            r = t.querySelector(e._submitButtonSelector);
          e._toggleButtonState(n, r), n.forEach((function(t) { t.addEventListener("input", (function() { e._checkInputValidation(t), e._toggleButtonState(n, r) })) }))
        }))
      }
    }]) && O(t.prototype, n), r && O(t, r), e
  }();
  n(0);

  function P(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }

  function T(e) { return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

  function B(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }

  function M(e, t, n) { return (M = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) { var r = function(e, t) { for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = A(e));); return e }(e, t); if (r) { var o = Object.getOwnPropertyDescriptor(r, t); return o.get ? o.get.call(n) : o.value } })(e, t, n || e) }

  function R(e, t) { return (R = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

  function I(e) {
    var t = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (e) { return !1 } }();
    return function() {
      var n, r = A(e);
      if (t) {
        var o = A(this).constructor;
        n = Reflect.construct(r, arguments, o)
      } else n = r.apply(this, arguments);
      return V(this, n)
    }
  }

  function V(e, t) { return !t || "object" !== T(t) && "function" != typeof t ? function(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }(e) : t }

  function A(e) { return (A = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }
  var D = function(e) {
    ! function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && R(e, t)
    }(i, e);
    var t, n, r, o = I(i);

    function i(e) { return function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, i), o.call(this, e) }
    return t = i, (n = [{ key: "open", value: function() { this._popupElement.querySelector(".popup_image").src = link, this._popupElement.querySelector(".popup_image").alt = name, this._popupElement.querySelector(".popup_caption").textContent = name, M(A(i.prototype), "_open", this).call(this) } }]) && B(t.prototype, n), r && B(t, r), i
  }(function() {
    function e(t) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this._popupElement = document.querySelector(t), this._handleEscClose = this._handleEscClose.bind(this) }
    var t, n, r;
    return t = e, (n = [{
      key: "setEventListeners",
      value: function() {
        var e = this;
        this._popupElement.addEventListener("click", (function(t) { e.close(), t.stopPropagation() }))
      }
    }, { key: "_handleEscClose", value: function(e) { "Escape" === e.key && (this.close(), e.stopPropagation()) } }, { key: "open", value: function() { this._popupElement.classList.add("popup_visible"), document.addEventListener("keyup", this._handleEscClose(evt)) } }, { key: "close", value: function() { this._popupElement.classList.remove("popup_visible"), document.removeEventListener("keyup", this._handleEscClose(evt)) } }]) && P(t.prototype, n), r && P(t, r), e
  }());

  function H(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }

  function Y(e) { e.addEventListener("click", (function(t) { t.target.classList.contains("popup") && e.classList.remove("popup_visible") })), window.addEventListener("keyup", (function(t) { "Escape" === t.key && e.classList.remove("popup_visible") })) }

  function N(e, t) {
    var n = document.querySelector(".elements__list"),
      r = new x(e, t, ".element__elem", (function() { new D(".....").open() })).addCard();
    n.append(r)
  }

  function z() { y.classList.contains("popup_visible") ? y.classList.toggle("popup_visible") : (y.classList.toggle("popup_visible"), Y(y)) }

  function F() { s.classList.contains("popup_visible") ? s.classList.toggle("popup_visible") : (s.classList.toggle("popup_visible"), _.value = d.innerText, v.value = f.innerText, Y(s)) }
  new(function() {
    function e(t, n) {
      var r = t.items,
        o = t.renderer;
      ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this._itemsArray = r, this._renderer = o, this._container = document.querySelector(n)
    }
    var t, n, r;
    return t = e, (n = [{
      key: "renderItems",
      value: function() {
        var e = this;
        this._itemsArray.forEach((function(t) { e._renderer(t) }))
      }
    }, { key: "addItem", value: function(e) { this._container.prepend(e) } }]) && H(t.prototype, n), r && H(t, r), e
  }())({ items: C, renderer: function(e) { N(e.name, e.link) } }).renderItems(), c.addEventListener("click", F), p.addEventListener("click", F), s.addEventListener("submit", (function(e) {! function(e) { e.preventDefault(), F(), d.textContent = _.value, f.textContent = v.value }(e) })), m.addEventListener("click", z), h.addEventListener("click", z), b.addEventListener("submit", (function(e) {! function(e) { e.preventDefault(), z(), N(S.value, g.value), E.reset() }(e) })), L.addEventListener("click", (function() { k.classList.toggle("popup_visible"), Y(k) })), new j(s, w).enableValidation(), new j(k, w).enableValidation()
}]);

