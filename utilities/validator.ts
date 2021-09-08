
class Validator {

  constructor() {
    this.validationTypes = {
      name: {
        pattern: /^[A-Z][a-zA-Z-]|^[А-Я][а-яА-Я-]*$/,
        error: 'Name error (latin or cyrillic, first capital letter, no spaces and numbers, no special symbols except \'-\')',
      },
      login: {
        pattern: /^(?=.*[a-zA-Z])([a-zA-Z0-9-_]){3,20}$/,
        error: 'Login error (3-20 symbols long, latin, may use digits, should have letters, no spaces, no special symbols except \'-, _\')',
      },
      email: {
        pattern: /.+@[^@]+[a-z]+\.[^@]{2,}$/,
        error: 'Email error (latin, special symbols and \'-\' are allowed, must have \'@\' with letters and \'.\' after that)',
      },
      password: {
        pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
        error: 'Password error (8-40 symbols long, must have capital letter and digit)',
      },
      phone: {
        pattern: /^[+-d]?\d{10,15}$/,
        error: 'Phone error (10-15 symbols long, only digits, starts with \'+\')',
      },
      message: {
        pattern: /(.|\s)*\S(.|\s)*/,
        error: 'Message error (should not be empty)',
      },
    }
  }

  _getValidationType(elem) {
    const type = elem.getAttribute('validation-type');
    return this.validationTypes[type];
  }

  _validate(elem) {
    const vtype = this._getValidationType(elem);
    if (!elem.value && elem.getAttribute('validation-type') !== 'message') {
      return { isValid: true, error: '' };
    }
    return {
      isValid: vtype.pattern.test(elem.value),
      error: vtype.error,
    }
  }

  validate() {
    const toValidate = document.body.querySelectorAll('[validation-required]');
    toValidate.forEach(elem => {
      const result = this._validate(elem);
      const labelFor = document.getElementById(elem.getAttribute('validation-label'));
      if (result.isValid) {
        labelFor.classList.remove('active'); 
      } else {
        labelFor.classList.add('active');
        labelFor.textContent = result.error;
      }
    })
  }

}

export default Validator;