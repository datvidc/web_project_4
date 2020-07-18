import Card from './Card';

export default class UserCard extends Card {
  constructor(text, link, template, handleCardClick, id) {
    super((text, link, template, handleCardClick, id));
    this._template = template;
  }


  _getTemplate() {
    return document
      .querySelector(this._template)
      .content
      .querySelector(".elements__element")
      .cloneNode(true);

  }
}
