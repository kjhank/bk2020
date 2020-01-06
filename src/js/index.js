import Form from './FormElements';
import LazyLoad from './LazyLoad';
import MenuScroll from './MenuScroll';

class Core {
  constructor() {
    this.config = {
      formSelector: '.contact-form__inner',
      lazyLoadSelector: '[data-background], [data-src]',
      menuSelector: '.home .main-header__navigation-item > a',
    }

    this.init();
  }

  init() {
    const { formSelector, lazyLoadSelector, menuSelector } = this.config;
    new Form(formSelector);
    new LazyLoad(lazyLoadSelector);
    new MenuScroll(menuSelector);
  }
}

new Core();
