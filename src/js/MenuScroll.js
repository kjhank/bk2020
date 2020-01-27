export default class MenuScroll {
  constructor(selector) {
    if (!this.checkVars(selector)) return;

    this.config = {
      elements: document.querySelectorAll(selector),
      scrollConfig: {
        behavior: 'smooth',
      },
      offset: this.getOffset(),
      location: this.checkLocation(),
    };

    this.initEvents();
  }

  checkVars(selector) {
    const elements = document.querySelectorAll(selector);

    return elements.length;
  }

  initEvents() {
    const { elements } = this.config;
    elements.forEach(elem => elem.addEventListener('click', event => this.scroll(event)));
  }

  getOffset() {
    const headerOffset = document.querySelector('.main-header').getBoundingClientRect().height;

    return headerOffset;
  }

  checkLocation() {
    const path = window.location.pathname;

    return path;
  }

  getScrollPosition(target) {
    const { offset } = this.config;
    const targetPosition = target.offsetTop;
    const scrollPosition = targetPosition - offset;

    return scrollPosition;
  }

  setScrollId(targetId) {
    localStorage.setItem('idToScroll', targetId);
  }

  scroll(event) {
    event.preventDefault();
    const { scrollConfig, location } = this.config;
    const trigger = event.target;
    const targetId = trigger.href.split('#')[1];
    const target = document.querySelector(`#${targetId}`);
    const isLanding = location === '/';


    if (isLanding) {
      scrollConfig.top = this.getScrollPosition(target);
      window.scrollTo(scrollConfig);
    } else {
      this.setScrollId(targetId);
      window.location.href = '/';
    }
  }
}
