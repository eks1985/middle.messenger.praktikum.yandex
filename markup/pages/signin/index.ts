import Block from '../../../modules/block';
import Button from '../../components/button';
import Input from '../../components/input';
import { template } from './template';

class SignIn extends Block {
  constructor() {
    super('div', {
      events: {
        click: (e: Event) => this.handleClickRoot(e),
      },
      chld: {
        signinButton: new Button({
          className: 'signin-button',
          child: 'Sign In',
          id: 'signin-button',
          events: {
            click: (e: Event) => this.handleClickButton(e),
          },
        }),  
        login: new Input({
          id: 'login',
          name: 'login',
          class: 'full-width',
          validation: true,
          vtype: 'login',
          vlabel: 'login-error',
          events: {
            focus: (e: Event) => this.handleFocus(e),
            blur: (e: Event) => this.handleBlur(e),
          },  
        }),
        password: new Input({
          id: 'password',
          name: 'password',
          class: 'full-width',
          validation: true,
          vtype: 'password',
          vlabel: 'password-error',
          events: {
            focus: (e: Event) => this.handleFocus(e),
            blur: (e: Event) => this.handleBlur(e),
          },  
        })
      },
    });
  }

  handleFocus(e: Event) {
    this.validate();
  }

  handleBlur() {
    this.validate();
  }

  handleClickRoot(e: Event) {
    // console.log('click root', e);
  }

  
  handleClickButton(e: Event) {
    e.preventDefault();
    this.validate();
    const formData: any = {};
    const keys = ['login', 'password'];
    keys.forEach(key => {
      formData[key] = document.getElementById(key)!.value;
    });
    if (window.sessionStorage) {
      window.sessionStorage.setItem('loggedin', '1');
      window.location.reload();
    }
  }

  render() {
    return template({
      signinButton: this.props.chld.signinButton.render(),
      login: this.props.chld.login.render(),
      password: this.props.chld.password.render()
    });
  }

} 

export default SignIn;