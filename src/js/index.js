import smoothscroll from 'smoothscroll-polyfill';
import Form from './FormElements';
import LazyLoad from './LazyLoad';
import MenuScroll from './MenuScroll';
import CustomizeMenu from './CustomizeMenu';
import HomeScroll from './HomeScroll';
import MenuToggle from './MenuToggle';
import ContactScroll from './ContactScroll';
import CookieBanner from './CookieBanner';
import ObserverSwitch from './ObserverSwitch';

class Core {
  constructor() {
    this.config = {
      formSelector: '.contact-form__inner',
      lazyLoadSelector: '[data-background], [data-src]',
      menuSelector: '.main-header__navigation-item:not(.main-header__navigation-item--contact) > a',
      navSelector: '.main-header__navigation',
      toggleSelector: '.main-header__navigation',
      contactSelector: '.main-header__navigation-item--contact',
      cookieBannerSelector: '.cookie-banner',
      observable: {
        selector: '[data-observable]',
        config: {
          rootMargin: '50%',
        },
      },
    };

    this.init();
  }

  init() {
    const {
      formSelector,
      lazyLoadSelector,
      menuSelector,
      navSelector,
      toggleSelector,
      contactSelector,
      cookieBannerSelector,
      observable: { selector: observableSelector, config: observableConfig },
    } = this.config;

    new Form(formSelector);
    new LazyLoad(lazyLoadSelector);
    new MenuScroll(menuSelector);
    new CustomizeMenu(navSelector);
    new HomeScroll();
    new MenuToggle(toggleSelector);
    new ContactScroll(contactSelector);
    new CookieBanner(cookieBannerSelector);
    new ObserverSwitch(observableSelector, observableConfig);

    smoothscroll.polyfill();
  }
}

new Core();
