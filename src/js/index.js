import Form from './form';

class Core {
  constructor() {
    this.config = {
      formSelector: '.contact-form__inner',
    }

    this.init();
  }

  init() {
    const { formSelector } = this.config;
    new Form(formSelector);
    
  }
}

new Core();
