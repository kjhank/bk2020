export default class ContactScroll {
  constructor(selector) {
    this.config = {
      trigger: document.querySelector(selector),
      scrollConfig: {
        behavior: 'smooth',
      },
      offset: this.getOffset(),
    }

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
    const { trigger } = this.config;

    trigger.addEventListener('click', e => this.scroll(e));
  }

  getOffset() {
    const headerOffset = document.querySelector('.main-header').getBoundingClientRect().height;
    
    return headerOffset;
  }

  getScrollPosition(target) {
    let { offset } = this.config;
    const targetPosition = target.offsetTop;
    const scrollPosition = targetPosition - offset;

    return scrollPosition;
  }

  scroll(e) {
    e.preventDefault();
    const { scrollConfig } = this.config;
    const { target: trigger} = e;
    const targetId = trigger.href.split('#')[1];
    const target = document.querySelector(`#${targetId}`);
    scrollConfig.top = this.getScrollPosition(target);

    window.scrollTo(scrollConfig);
  }
}
