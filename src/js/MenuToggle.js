export default class MenuToggle {
  constructor(selector) {
    if (!this.checkVars(selector)) return;

    this.config = {
      trigger: document.querySelector(`${selector}-toggle`),
      target: document.querySelector('.main-header__navigation-inner'),
      classes: {
        navVisible: 'main-header__navigation-inner--visible',
        buttonActive: 'main-header__navigation-toggle--active',
      },
      navElems: document.querySelectorAll('.main-header__navigation-item a'),
    };

    this.init();
  }

  checkVars(selector) {
    const elements = document.querySelectorAll(selector);

    return elements.length;
  }

  init() {
    this.initEvents();
  }

  initEvents() {
    const { trigger, navElems } = this.config;
    trigger.addEventListener('click', () => this.toggleMenu());
    navElems.forEach(elem => elem.addEventListener('click', () => this.toggleMenu()));
  }

  toggleMenu() {
    const { trigger, target } = this.config;
    const { navVisible, buttonActive } = this.config.classes;

    target.classList.toggle(navVisible);
    trigger.classList.toggle(buttonActive);
  }
}
