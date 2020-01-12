export default class Form {
  constructor(selector) {
    if (!this.checkVars(selector)) return;
    
    this.config = {
      formElem: document.querySelector(selector),
      inputSelector: '.contact-form__input',
      placeholderSelector: '.contact-form__placeholder',
      activeClass: 'contact-form__placeholder--active'
    };

    this.init();
  }

  checkVars(selector) {
    const elements = document.querySelectorAll(selector);

    return elements.length;
  }

  init() {
    const { formElem, inputSelector } = this.config;

    if (!formElem) return;
    
    this.inputs = formElem.querySelectorAll(inputSelector);
    this.initEvents();
  }

  initEvents() {
    this.inputs.forEach(elem => elem.addEventListener('focus', e => this.handleFocus(e)));
    this.inputs.forEach(elem => elem.addEventListener('blur', e => this.handleBlur(e)));
  }

  handleFocus(e) {
    const { activeClass, placeholderSelector } = this.config;
    const { target: trigger } = e;
    trigger.parentNode.previousElementSibling.classList.add(activeClass);
  }

  handleBlur(e) {
    const { target: trigger } = e;
    const { activeClass } = this.config;
    const value = trigger.value;

    if (!value) {
      trigger.parentNode.previousElementSibling.classList.remove(activeClass);
    }
  }
}
