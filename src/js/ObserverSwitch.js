export default class ObserverSwitch {
  constructor(selector, observerConfig) {
    if (!this.checkVars(selector)) return;
    this.element = document.querySelector(selector);
    this.config = {
      selector,
      observerConfig,
    };

    this.init();
  }

  checkVars(selector) {
    const elements = document.querySelectorAll(selector);

    return elements.length;
  }

  init() {
    const { selector, observerConfig } = this.config;
    const elements = document.querySelectorAll(selector);
    const elemObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const { target } = entry;
          const newClass = this.getClass(target, 'active');

          target.classList.add(newClass);
          observer.unobserve(target);
        }
      });
    }, observerConfig);

    elements.forEach(element => elemObserver.observe(element));
  }

  getClass(element, suffix) {
    const [currentClass] = element.classList;
    const resultClass = `${currentClass}--${suffix}`;

    return resultClass;
  }
}
