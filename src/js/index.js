import Form from './FormElements';
import LazyLoad from './LazyLoad';
import MenuScroll from './MenuScroll';
import smoothscroll from 'smoothscroll-polyfill';
import CustomizeMenu from './CustomizeMenu';

class Core {
  constructor() {
    this.config = {
      formSelector: '.contact-form__inner',
      lazyLoadSelector: '[data-background], [data-src]',
      menuSelector: '.home .main-header__navigation-item > a',
      navSelector: '.main-header__navigation',
    }

    this.init();
  }

  init() {
    const { formSelector, lazyLoadSelector, menuSelector, navSelector } = this.config;
    new Form(formSelector);
    new LazyLoad(lazyLoadSelector);
    new MenuScroll(menuSelector);
    new CustomizeMenu(navSelector);

    smoothscroll.polyfill();
  }
}

new Core();
