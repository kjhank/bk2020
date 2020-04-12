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
import Popup from './Popup';
// import FixedHeader from './FixedHeader';

class Core {
  constructor() {
    this.config = {
      formSelector: '.contact-form__inner',
      lazyLoadSelector: '[data-background], [data-src]',
      menuSelector: '.main-header__navigation-item:not(.main-header__navigation-item--contact) > a',
      navSelector: '.main-header__navigation',
      popupSelector: '.popup',
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
      popupSelector,
      observable: {
        selector: observableSelector,
        config: observableConfig,
      },
    } = this.config;

    const form = new Form(formSelector);
    const lazyload = new LazyLoad(lazyLoadSelector);
    const menuscroll = new MenuScroll(menuSelector);
    const customizemenu = new CustomizeMenu(navSelector);
    const homescroll = new HomeScroll();
    const menutoggle = new MenuToggle(toggleSelector);
    const contactscroll = new ContactScroll(contactSelector);
    const cookiebanner = new CookieBanner(cookieBannerSelector);
    const observerswitch = new ObserverSwitch(observableSelector, observableConfig);
    const popup = new Popup(popupSelector);

    smoothscroll.polyfill();
  }
}

const core = new Core();

core.init();
