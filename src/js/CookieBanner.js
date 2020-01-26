export default class CookieBanner {
  constructor(selector) {
    if (!this.checkVars(selector)) return;

    [this.element] = document.querySelectorAll(selector);

    this.config = {
      element: this.element,
      classes: {
        visible: 'cookie-banner--visible',
      },
      storageKey: 'accepted-cookies',
      buttonSelector: '[data-accept-cookies]',
    }

    this.init();
  }

  checkVars(selector) {
    const elements = document.querySelectorAll(selector);

    return elements.length;
  }

  init() {
    const { element, buttonSelector, classes: { visible } } = this.config;
    this.confirmBtn = element.querySelector(buttonSelector);

    if (!this.checkStorage()) element.classList.add(visible);

    this.initEvents();
  }

  initEvents() {
    this.confirmBtn.addEventListener('click', event => this.handleClick(event));
  }

  checkStorage() {
    const { storageKey } = this.config;

    return localStorage.getItem(storageKey);
  }

  handleClick(event) {
    event.preventDefault();
    const { element, classes: { visible } } = this.config;

    if (this.setStorage()) element.classList.remove(visible);
  }

  setStorage() {
    const { storageKey } = this.config;

    localStorage.setItem(storageKey, true);

    return localStorage.hasOwnProperty(storageKey);
  }
}
