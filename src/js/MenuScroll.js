export default class MenuScroll {
  constructor(selector) {
    this.config = {
      elements: document.querySelectorAll(selector),
      scrollConfig: {
        behavior: 'smooth'
      },
      offset: this.getOffset()
    };

    this.initEvents();
  }

  initEvents() {
    const { elements } = this.config;

    elements.forEach(elem => elem.addEventListener('click', e => this.scroll(e)));
  }

  getOffset() {
    const headerOffset = document.querySelector('.main-header').getBoundingClientRect().height;

    return headerOffset;
  }

  scroll(e) {
    e.preventDefault();
    const { scrollConfig, offset } = this.config;
    const trigger = e.target;
    const target = document.querySelector(`#${trigger.href.split('#')[1]}`);
    const targetPosition = target.offsetTop;
    scrollConfig.top = targetPosition - offset;
    window.scrollTo(scrollConfig);
  }
}
