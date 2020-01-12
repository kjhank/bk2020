export default class CustomizeMenu {
  constructor(selector) {
    if (!this.checkVars(selector)) return;

    this.element = document.querySelector(selector);
    this.config = {
      arrow:
        '<?xml version="1.0" encoding="utf-8"?><svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-49 141 74.8 73.8" style="enable-background:new -49 141 74.8 73.8;" xml:space="preserve" class="icon--arrow"><path d="M-9.4,144.3c0.6,0,1.2,0.2,1.7,0.7l31.3,31.3c0.4,0.4,0.6,1,0.6,1.7c0,0.4-0.1,1.1-0.7,1.7l-31.3,31.3 c-0.4,0.4-1,0.7-1.7,0.7c-0.6,0-1.2-0.2-1.7-0.7c-0.4-0.4-0.7-1-0.7-1.7s0.2-1.2,0.7-1.7l27.3-27.3H-45c-1.3,0-2.4-1.1-2.4-2.4 c0-1.3,1.1-2.4,2.4-2.4h61.3L-11,148.3c-0.4-0.4-0.7-1-0.7-1.7c0-0.6,0.2-1.2,0.7-1.7C-10.6,144.5-10,144.3-9.4,144.3z"/></svg>'
    };
    this.init();
  }

  checkVars(selector) {
    const elements = document.querySelectorAll(selector);

    return elements.length;
  }

  init() {
    if (!this.element) return;
    
    this.addArrow();
  }

  addArrow() {
    const { arrow } = this.config;
    const elem = this.element.querySelector('.main-header__navigation-item--contact');

    elem.innerHTML += arrow;
  }
}
