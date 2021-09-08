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
        saveButton: new Button({
          className: 'save-button',
          child: 'Update profile settings',
          id: 'update-profile-settings-button',
          events: {
            click: e => this.handleClickButton(e),
          },
        }),
        firstName: new Input({
          id: 'first_name',
          name: 'first_name',
          validation: true,
          vtype: 'name',
          vlabel: 'first-name-error',
          events: {
            focus: e => this.handleFocus(e),
            blur: e => this.handleBlur(e),
          },  
        }),
        secondName: new Input({
          id: 'second_name',
          name: 'second_name',
          validation: true,
          vtype: 'name',
          vlabel: 'second-name-error',
          events: {
            focus: e => this.handleFocus(e),
            blur: e => this.handleBlur(e),
          },  
        }),
        displayName: new Input({
          id: 'display_name',
          name: 'display_name',
          class: 'full-width',
          validation: true,
          vtype: 'name',
          vlabel: 'display-name-error',
          events: {
            focus: e => this.handleFocus(e),
            blur: e => this.handleBlur(e),
          },  
        }),
        email: new Input({
          id: 'email',
          name: 'email',
          class: 'full-width',
          validation: true,
          vtype: 'email',
          vlabel: 'email-error',
          events: {
            focus: e => this.handleFocus(e),
            blur: e => this.handleBlur(e),
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
            focus: e => this.handleFocus(e),
            blur: e => this.handleBlur(e),
          },  
        }),
        phone: new Input({
          id: 'phone',
          name: 'phone',
          class: 'full-width',
          validation: true,
          vtype: 'phone',
          vlabel: 'phone-error',
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

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleClickRoot(e) {}

  handleClickButton(e) {
    e.preventDefault();
    this.validate();
    const formData: any = {};
    const keys = ['first_name', 'second_name', 'display_name', 'email', 'login', 'phone'];
    keys.forEach(key => {
      formData[key] = document.getElementById(key)!.value;
    });
  }

  render() {
    return template({
      saveButton: this.props.chld.saveButton.render(),
      firstName: this.props.chld.firstName.render(),
      secondName: this.props.chld.secondName.render(),
      displayName: this.props.chld.displayName.render(),
      email: this.props.chld.email.render(),
      login: this.props.chld.login.render(),
      phone: this.props.chld.phone.render(),
    });
  }

} 

export default UserProfile;