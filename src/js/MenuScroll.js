export default class MenuScroll {
  constructor(selector) {
    this.config = {
      elements: document.querySelectorAll(selector),
      scrollConfig: {
        behavior: 'smooth'
      },
      offset: '130'
    };

    this.initEvents();
  }

  initEvents() {
    const { elements } = this.config;

    elements.forEach(elem => elem.addEventListener('click', e => this.scroll(e)));
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
