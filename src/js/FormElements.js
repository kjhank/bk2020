export default class Form {
  constructor(selector) {
    if (!this.checkVars(selector)) return;
    
    this.config = {
      formElem: document.querySelector(selector),
      inputSelector: '.contact-form__input',
      placeholderSelector: '.contact-form__placeholder',
      activeClass: 'contact-form__placeholder--active',
      loaderSelector: '.ajax-loader',
      submittedClass: 'contact-form__submit--submitted',
      failedClass: 'contact-form__submit--failed',
      loaderContent: `<?xml version="1.0" ?>
      <!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->
      <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff" class="contact-form__loader">
          <g fill="none" fill-rule="evenodd">
              <g transform="translate(1 1)" stroke-width="2">
                  <circle stroke-opacity=".5" cx="18" cy="18" r="18"/>
                  <path d="M36 18c0-9.94-8.06-18-18-18">
                      <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="0 18 18"
                          to="360 18 18"
                          dur="1s"
                          repeatCount="indefinite"/>
                  </path>
              </g>
          </g>
      </svg>
      `
    };

    this.init();
  }

  checkVars(selector) {
    const elements = document.querySelectorAll(selector);

    return elements.length;
  }

  init() {
    const { formElem, inputSelector } = this.config;

    if (!formElem) return;
    
    this.inputs = formElem.querySelectorAll(inputSelector);
    this.initEvents();
  }

  initEvents() {
    const { formElem } = this.config;
    this.inputs.forEach(elem => elem.addEventListener('focus', e => this.handleFocus(e)));
    this.inputs.forEach(elem => elem.addEventListener('blur', e => this.handleBlur(e)));

    formElem.addEventListener('submit', e => this.handleSubmit());
    formElem.parentNode.addEventListener('wpcf7mailsent', () => this.handleSent());
    formElem.parentNode.addEventListener('wpcf7mailfailed', () => this.handleFailed());
    formElem.parentNode.addEventListener('wpcf7invalid', e => this.handleInvalid(e));
  }

  handleInvalid(e) {
    console.log(e);
    // TODO: finish invalid form handling
  }

  handleSubmit() {
    const { loaderContent, formElem, submittedClass } = this.config;
    const submitBtn = formElem.querySelector('.contact-form__submit');
    submitBtn.classList.add(submittedClass);
    submitBtn.setAttribute('disabled', '');

    submitBtn.innerHTML += loaderContent;
  }

  handleSent() {
    const { formElem, submittedClass, activeClass } = this.config;
    const submitBtn = formElem.querySelector('.contact-form__submit');
    submitBtn.classList.remove(submittedClass);
    this.inputs.forEach(elem => elem.parentNode.previousElementSibling.classList.remove(activeClass));

    submitBtn.innerHTML = 'Wysłano';
  }

  handleFailed() {
    const { formElem, submittedClass, failedClass } = this.config;
    const submitBtn = formElem.querySelector('.contact-form__submit');
    submitBtn.classList.remove(submittedClass);
    submitBtn.classList.add(failedClass);

    submitBtn.innerHTML = 'Wystąpił błąd';
  }

  handleFocus(e) {
    const { activeClass } = this.config;
    const { target: trigger } = e;
    trigger.parentNode.previousElementSibling.classList.add(activeClass);
  }

  handleBlur(e) {
    const { target: trigger } = e;
    const { activeClass } = this.config;
    const value = trigger.value;

    if (!value) {
      trigger.parentNode.previousElementSibling.classList.remove(activeClass);
    }
  }

  replaceLoader() {
    const { formElem, loaderSelector, loaderContent } = this.config;
    const loader = document.querySelector('.ajax-loader');

    console.log(loader, formElem, loaderSelector)

    // loader.innerHTML = loaderContent;
  }
}
