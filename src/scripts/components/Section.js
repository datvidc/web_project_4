export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._itemsArray = items; //array list
    this._renderer = renderer; //a function that "does stuff"
    this._container = document.querySelector(containerSelector); // container - where to add the section
  }

  renderItems() {
    this._itemsArray.forEach((item) => {
      // for each item- call the renderer function.
      this._renderer(item);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }


}
