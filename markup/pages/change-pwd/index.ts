import Block from '../../../modules/block';
import Button from '../../components/button';
import Input from '../../components/input';
import { template } from './template';

class ChangePassword extends Block {
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
        oldPassword: new Input({
          id: 'old-password',
          name: 'old_password',
          validation: true,
          vtype: 'password',
          vlabel: 'old-password-error',
          events: {
            focus: e => this.handleFocus(e),
            blur: e => this.handleBlur(e),
          },  
        }),
        newPassword: new Input({
          id: 'new-password',
          name: 'new_password',
          validation: true,
          vtype: 'password',
          vlabel: 'new-password-error',
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
    const keys = ['old_password', 'new_password'];
    keys.forEach(key => {
      const inputValue = (<HTMLInputElement>document.getElementById(key)).value;
      formData[key] = inputValue;
    });
  }

  render() {
    return template({
      saveButton: this.props.chld.saveButton.render(),
      oldPassword: this.props.chld.oldPassword.render(),
      newPassword: this.props.chld.newPassword.render(),
    });
  }

} 

export default ChangePassword;