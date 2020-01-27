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
      invalidClass: 'contact-form__submit--invalid',
      sentClass: 'contact-form__submit--sent',
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
      `,
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

    this.submitBtn = formElem.querySelector('.contact-form__submit');


    this.inputs = formElem.querySelectorAll(inputSelector);
    this.initEvents();
  }

  initEvents() {
    const { formElem } = this.config;
    this.inputs.forEach(elem => elem.addEventListener('focus', event => this.handleFocus(event)));
    this.inputs.forEach(elem => elem.addEventListener('blur', event => this.handleBlur(event)));

    formElem.addEventListener('submit', () => this.handleSubmit());
    formElem.parentNode.addEventListener('wpcf7mailsent', () => this.handleSent());
    formElem.parentNode.addEventListener('wpcf7mailfailed', () => this.handleFailed());
    formElem.parentNode.addEventListener('wpcf7invalid', event => this.handleInvalid(event));
  }

  handleInvalid() {
    const { submittedClass, invalidClass } = this.config;
    this.submitBtn.classList.remove(submittedClass);
    this.submitBtn.classList.add(invalidClass);
    this.submitBtn.removeAttribute('disabled');
    this.submitBtn.innerHTML = 'Uzupełnij wymagane pola';
  }

  handleSubmit() {
    const { loaderContent, submittedClass } = this.config;
    this.submitBtn.classList.add(submittedClass);
    this.submitBtn.setAttribute('disabled', '');

    this.submitBtn.innerHTML += loaderContent;
  }

  handleSent() {
    const {
      submittedClass,
      activeClass,
      invalidClass,
      sentClass,
    } = this.config;
    this.submitBtn.classList.remove(submittedClass);
    this.submitBtn.classList.remove(invalidClass);
    this.inputs.forEach(elem => elem.parentNode.previousElementSibling.classList.remove(activeClass));
    this.submitBtn.innerHTML = 'Wysłano';
    this.submitBtn.classList.add(sentClass);
    this.submitBtn.setAttribute('disabled', '');
  }

  handleFailed() {
    const { submittedClass, failedClass } = this.config;
    this.submitBtn.classList.remove(submittedClass);
    this.submitBtn.classList.add(failedClass);

    this.submitBtn.innerHTML = 'Wystąpił błąd';
  }

  handleFocus(event) {
    const { activeClass } = this.config;
    const { target: trigger } = event;
    trigger.parentNode.previousElementSibling.classList.add(activeClass);
  }

  handleBlur(event) {
    const { target: trigger } = event;
    const { activeClass } = this.config;
    const { value } = trigger;

    if (!value) {
      trigger.parentNode.previousElementSibling.classList.remove(activeClass);
    }
  }
}
