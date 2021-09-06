import Block from '../../../modules/block';
import Button from '../../components/button';
import Input from '../../components/input';
import { template } from './template';

class UserProfile extends Block {
  constructor() {
    super('div', {
      events: {
        click: e => this.handleClickRoot(e),
      },
      chld: {
        signinButton: new Button({
          className: 'signin-button',
          child: 'Sign In',
          id: 'signin-button',
          events: {
            click: e => this.handleClickButton(e),
          },
        }),  
        login: new Input({
          id: 'login',
          class: 'full-width',
          validation: true,
          vtype: 'login',
          vlabel: 'login-error',
          events: {
            focus: e => this.handleFocus(e),
            blur: e => this.handleBlur(e),
          },  
        }),
        password: new Input({
          id: 'password',
          class: 'full-width',
          validation: true,
          vtype: 'password',
          vlabel: 'password-error',
          events: {
            focus: e => this.handleFocus(e),
            blur: e => this.handleBlur(e),
          },  
        })
      },
    });
  }

  handleFocus() {
    this.validate();
  }

  handleBlur() {
    this.validate();
  }

  handleClickRoot(e) {
    // console.log('click root', e);
  }

  handleClickButton(e) {
    // if (window.sessionStorage) {
    //   window.sessionStorage.setItem('loggedin', 1);
    //   window.location.reload();
    // }
    e.preventDefault();
    this.validate();
  }

  render() {
    return template({
      signinButton: this.props.chld.signinButton.render(),
      login: this.props.chld.login.render(),
      password: this.props.chld.password.render()
    });
  }

} 

export default UserProfile;