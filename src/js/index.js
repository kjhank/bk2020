import Form from './form';
import LazyLoad from './LazyLoad';

class Core {
  constructor() {
    this.config = {
      formSelector: '.contact-form__inner',
      lazyLoadSelector: '[data-background], [data-src]',
    }

    this.init();
  }

  init() {
    const { formSelector, lazyLoadSelector } = this.config;
    new Form(formSelector);
    new LazyLoad(lazyLoadSelector);
    
  }
}

new Core();
