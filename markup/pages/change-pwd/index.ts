import Block from '../../../modules/block';
import Button from '../../components/button';
import Input from '../../components/input';
import { template } from './template';

class ChangePassword extends Block {
  constructor() {
    super('div', {
      chld: {
        saveButton: new Button({
          className: 'primary-button',
          child: 'Update profile settings',
          id: 'update-profile-settings-button',
          events: {
            click: (e: Event) => this.handleClickButton(e),
          },
        }),
        oldPassword: new Input({
          id: 'old_password',
          name: 'old_password',
          class: 'form-input',
          validation: true,
          vtype: 'password',
          vlabel: 'old-password-error',
          events: {
            focus: () => this.handleFocus(),
            blur: () => this.handleBlur(),
          },  
        }),
        newPassword: new Input({
          id: 'new_password',
          name: 'new_password',
          class: 'form-input',
          validation: true,
          vtype: 'password',
          vlabel: 'new-password-error',
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
      old_password?: string,
      new_password?: string,
    } = {};
    const keys = ['old_password', 'new_password'];
    keys.forEach(key => {
      const inputValue = (<HTMLInputElement>document.getElementById(key)).value;
      formData[key] = inputValue;
    });
  }

  render(): HTMLElement {
    return template({
      saveButton: this.props.chld.saveButton.render(),
      oldPassword: this.props.chld.oldPassword.render(),
      newPassword: this.props.chld.newPassword.render(),
    });
  }

} 

export default ChangePassword;