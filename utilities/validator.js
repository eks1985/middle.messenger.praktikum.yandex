
class Validator {

  constructor() {
    this.validationTypes = {
      name: {
        pattern: /^[A-Z][a-zA-Z-]*$/,
        error: 'Name error',
      },
      login: {
        pattern: /^(?=.*[a-zA-Z])([a-zA-Z0-9-]){3,20}$/,
        error: 'Login error',
      },
      email: {
        pattern: /.+@[^@]+[a-z]+\.[^@]{2,}$/,
        error: 'Email error',
      },
      password: {
        pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
        error: 'Password error',
      },
      phone: {
        pattern: /^[+-d]?\d{3,15}$/,
        error: 'Phone error',
      },
      message: {
        pattern: /(.|\s)*\S(.|\s)*/,
        error: 'Message error',
      },
    }
  }

  _getValidationType(elem) {
    const type = elem.getAttribute('validation-type');
    return this.validationTypes[type];
  }

  _validate(elem) {
    const vtype = this._getValidationType(elem);
    if (!elem.value) {
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

};

export default Validator;