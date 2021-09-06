
class Validator {

  constructor() {
    this.validationTypes = [
      'name', 'login', 'email', 'password', 'phone', 'message',
    ];
  }

  _validateName(elem) {
    console.log('value to validate', elem.value);
    return {
      isValid: false,
      error: '',
    }
  }

  _getValidationFunc(elem) {
    return this._validateName;
  }

  validate() {
    const toValidate = document.body.querySelectorAll('[validation-required]');
    toValidate.forEach(elem => {
      const validationFunc = this._getValidationFunc(elem);
      const validationResult = validationFunc(elem);
      const labelFor = document.getElementById(elem.getAttribute('validation-label'));
      if (validationResult.isValid) {
        labelFor.classList.remove('active'); 
      } else {
        labelFor.classList.add('active');
      }
    })
  }

};

export default Validator;