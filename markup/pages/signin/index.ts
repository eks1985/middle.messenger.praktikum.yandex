import Block from '../../../modules/block';
import Button from '../../components/button';
import Input from '../../components/input';
import { template } from './template';

class SignIn extends Block {
  constructor(store) {
    super('div', {
      children: {
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
    }, store);
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
      signinButton: this.props.children.signinButton.render(),
      login: this.props.children.login.render(),
      password: this.props.children.password.render()
    });
  }

} 

export default SignIn;