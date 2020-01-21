export default class HomeScroll {
  constructor() {
    if (!this.checkStorage() || !this.isHome()) return;

    this.config = {
      targetId: this.getId(),
      scrollConfig: { behavior: 'smooth' },
      offset: this.getOffset(),
    }
    this.init();
  }

  checkStorage() {
    const targetId = this.getId();
    return targetId;
  }

  isHome() {
    return document.querySelector('.home');
  }

  getId() {
    return localStorage.getItem('idToScroll');
  }

  getOffset() {
    const headerOffset = document.querySelector('.main-header').getBoundingClientRect().height;
    
    return headerOffset;
  }

  getScrollPosition(target) {
    const { offset } = this.config;
    const targetPosition = target.offsetTop;
    const scrollPosition = targetPosition - offset;

    return scrollPosition;
  }

  init() {
    const { scrollConfig, targetId } = this.config;
    const targetSelector = `#${targetId}`;
    const target = document.querySelector(targetSelector);

    scrollConfig.top = this.getScrollPosition(target);
    window.scrollTo(scrollConfig);

    localStorage.removeItem('idToScroll');
  }
}
