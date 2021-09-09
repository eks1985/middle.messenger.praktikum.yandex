import Block from '../../../modules/block';
import Button from '../../components/button';
import Input from '../../components/input';
import { template } from './template';

class UserProfile extends Block {
  constructor() {
    super('div', {
      chld: {
        saveButton: new Button({
          className: 'primary-button mt-2',
          child: 'Update profile settings',
          id: 'update-profile-settings-button',
          events: {
            click: (e: Event) => this.handleClickButton(e),
          },
        }),
        firstName: new Input({
          id: 'first_name',
          name: 'first_name',
          class: 'form-input',
          validation: true,
          vtype: 'name',
          vlabel: 'first-name-error',
          events: {
            focus: () => this.handleFocus(),
            blur: () => this.handleBlur(),
          },  
        }),
        secondName: new Input({
          id: 'second_name',
          name: 'second_name',
          class: 'form-input',
          validation: true,
          vtype: 'name',
          vlabel: 'second-name-error',
          events: {
            focus: () => this.handleFocus(),
            blur: () => this.handleBlur(),
          },  
        }),
        displayName: new Input({
          id: 'display_name',
          name: 'display_name',
          class: 'full-width form-input',
          validation: true,
          vtype: 'name',
          vlabel: 'display-name-error',
          events: {
            focus: () => this.handleFocus(),
            blur: () => this.handleBlur(),
          },  
        }),
        email: new Input({
          id: 'email',
          name: 'email',
          class: 'full-width form-input',
          validation: true,
          vtype: 'email',
          vlabel: 'email-error',
          events: {
            focus: () => this.handleFocus(),
            blur: () => this.handleBlur(),
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
        phone: new Input({
          id: 'phone',
          name: 'phone',
          class: 'full-width form-input',
          validation: true,
          vtype: 'phone',
          vlabel: 'phone-error',
          events: {
            focus: () => this.handleFocus(),
            blur: ( )=> this.handleBlur(),
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
      first_name?: string,
      second_name?: string,
      display_name?: string,
      email?: string,
      login?: string,
      phone?: string,
    } = {};
    const keys = ['first_name', 'second_name', 'display_name', 'email', 'login', 'phone'];
    keys.forEach(key => {
      const inputValue = (<HTMLInputElement>document.getElementById(key)).value;
      formData[key] = inputValue;
    });
  }

  render(): HTMLElement {
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