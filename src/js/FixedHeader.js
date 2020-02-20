import _ from 'lodash';

export default class FixedHeader {
  constructor(selector) {
    if (!this.checkVars(selector)) return;
    this.element = document.querySelector(selector);
    this.initialScrollPosition = 0;
    this.config = {
      debounceConfig: {
        timeout: 200,
        options: {
          leading: true,
          trailing: true,
        },
      },
      classes: {
        fixed: 'main-header--fixed',
      },
    };

    this.init();
  }

  init() {
    this.initEvents();
  }

  initEvents() {
    const {
      debounceConfig: {
        timeout,
        options,
      },
    } = this.config;

    window.onscroll = _.debounce(this.scrollHandler.bind(this), timeout, options);
  }


  scrollHandler(event) {
    console.log(event);
    const scrollPosition = window.scrollY;

    if (scrollPosition < this.initialScrollPosition) {
      console.log('going up');
      this.element.classList.add(this.config.classes.fixed);
    } else {
      console.log('going down');
      this.element.classList.remove(this.config.classes.fixed);
    }

    this.initialScrollPosition = scrollPosition;
  }

  checkVars(selector) {
    const elements = document.querySelectorAll(selector);

    return elements.length;
  }
}
