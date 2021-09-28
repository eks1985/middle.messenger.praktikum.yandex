import Block from '../../../modules/block';
import Button from '../../components/button';
import Input from '../../components/input';
import { template } from './template';
import HTTPTransport from '../../../utilities/http';
import router from '../../../index';

class SignUp extends Block {
  constructor(store) {
    super('div', {
      children: {
        saveButton: new Button({
          className: 'primary-button mt-2',
          child: 'Sign Up',
          id: 'sign-up-button',
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
        }),
        repeatPassword: new Input({
          id: 'repeat_password',
          name: 'repeat_password',
          class: 'full-width form-input',
          validation: true,
          vtype: 'password',
          vlabel: 'repeat-password-error',
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
      first_name?: string,
      second_name?: string,
      email?: string,
      login?: string,
      phone?: string,
      password?: string,
      repeat_password?: string,
    } = {};
    const keys = ['first_name', 'second_name', 'email', 'login', 'phone', 'password', 'repeat_password'];
    keys.forEach(key => {
      const inputValue = (<HTMLInputElement>document.getElementById(key)).value;
      formData[key] = inputValue;
    });
    // const formData1 = {
    //   first_name: 'Kirill',
    //   second_name: 'Efimov  ',
    //   email: 'eks1985@yandex.ru',
    //   login: 'kefimov',
    //   phone: '+79178308888',
    //   password: 'Maestra12!',
    // }
    // const http = new HTTPTransport();
    // http.post(
    //   'https://ya-praktikum.tech/api/v2/auth/signup',
    //   {
    //     data: formData1,
    //     headers: {
    //       'accept': 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //   },
    // ).then(res => {
    //   console.log('res', res)
    // });
    router.go('/settings');

  }

  render(): HTMLElement {
    console.log('profile render, store', this.store);
    return template({
      saveButton: this.props.children.saveButton.render(),
      firstName: this.props.children.firstName.render(),
      secondName: this.props.children.secondName.render(),
      email: this.props.children.email.render(),
      login: this.props.children.login.render(),
      phone: this.props.children.phone.render(),
      password: this.props.children.password.render(),
      repeatPassword: this.props.children.repeatPassword.render(),
    });
  }

} 

export default SignUp;