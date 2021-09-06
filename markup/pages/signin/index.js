import Block from '../../../modules/block';
import Button from '../../components/button';
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
      },
    });
  }

  handleClickRoot(e) {
    console.log('click root');
  }

  handleClickButton(e) {
    // if (window.sessionStorage) {
    //   window.sessionStorage.setItem('loggedin', 1);
    //   window.location.reload();
    // }
    const elem = document.getElementById('login');
    console.log('htmlfor', elem.htmlFor);
    // console.log('123');
  }

  render() {
    return template({
      signinButton: this.props.chld.signinButton.render(),
    });
  }

} 

export default UserProfile;