class Section {
  constructor({ items, renderer }, cardContainer) {
    this._firstArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(cardContainer);
  }

  renderItems() {
    this._firstArray.forEach((item) => {
      // for each item- call the renderer function.
      this._renderer(item);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }


}

export default Section;
