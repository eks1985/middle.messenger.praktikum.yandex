import Block from '../../../modules/block';
import Button from '../../components/button';
import Input from '../../components/input';
import { template } from './template';

class SignIn extends Block {
  constructor() {
    super('div', {
      chld: {
        signinButton: new Button({
          className: 'primary-button mt-2',
          child: 'Sign In',
          id: 'signin-button',
          events: {
            click: (e: Event) => this.handleClickButton(e),
          },
        }),  
        login: new Input({
          id: 'login',
          name: 'login',
          class: 'full-width form-input',
          validation: true,
          vtype: 'login',
          vlabel: 'login-error',
          events: {
            focus: () => this.handleFocus(),
            blur: () => this.handleBlur(),
          },  
        }),
        password: new Input({
          id: 'password',
          name: 'password',
          class: 'full-width form-input',
          validation: true,
          vtype: 'password',
          vlabel: 'password-error',
          events: {
            focus: () => this.handleFocus(),
            blur: () => this.handleBlur(),
          },  
        })
      },
    });
  }

  handleFocus(): void {
    this.validate();
  }

  handleBlur(): void {
    this.validate();
  }

  handleClickButton(e: Event): void {
    e.preventDefault();
    this.validate();
    const formData: {
      login?: string,
      password?: string,
    } = {};
    const keys = ['login', 'password'];
    keys.forEach(key => {
      const inputValue = (<HTMLInputElement>document.getElementById(key)).value;
      formData[key] = inputValue;
    });
    if (window.sessionStorage) {
      window.sessionStorage.setItem('loggedin', '1');
      window.location.reload();
    }
  }

  render(): HTMLElement {
    return template({
      signinButton: this.props.chld.signinButton.render(),
      login: this.props.chld.login.render(),
      password: this.props.chld.password.render()
    });
  }

} 

export default SignIn;