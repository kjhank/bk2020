export default class LazyLoad {
  constructor(selector) {
    this.config = {
      selector,
      observerConfig: {
        rootMargin: '200px'
      }
    };

    this.init();
  }

  init() {
    const { selector, observerConfig } = this.config;
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const { target } = entry;
          this.load(target);
          observer.unobserve(target);
        }
      });
    }, observerConfig);

    elements.forEach(element => observer.observe(element));
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