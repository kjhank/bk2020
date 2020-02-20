export default class LazyLoad {
  constructor(selector) {
    if (!this.checkVars(selector)) return;

    this.config = {
      selector,
      observerConfig: {
        rootMargin: '500px',
      },
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

    if (!elements) return;

    const lazyObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const { target } = entry;
          this.load(target);
          observer.unobserve(target);
        }
      });
    }, observerConfig);

    elements.forEach(element => lazyObserver.observe(element));
  }

  load(element) {
    const [attribute] = Object.keys(element.dataset);

    if (attribute === 'background') {
      const url = element.getAttribute('data-background');
      element.style.backgroundImage = `url(${url})`;
    } else {
      const url = element.getAttribute('data-src');
      element.setAttribute('src', url);
    }
  }
}
