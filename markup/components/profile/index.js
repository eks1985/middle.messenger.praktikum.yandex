import Handlebars from 'handlebars';
import Block from '../../../modules/block';
import Button from '../button';
import markup from './template';

const template = Handlebars.compile(markup);

class UserProfile extends Block {
  constructor() {
    super('div', {
      userName: 'Kirill',
      events: {
        click: e => this.handleClickRoot(e),
      },
      chld: {
        button: new Button({
          className: 'my-class',
          child: 'Click me 1',
          id: 'foo',
          events: {
            click: e => this.handleClickButton(e),
          },
        }),  
        button1: new Button({
          className: 'my-class-1',
          child: 'Click me 2',
          id: 'bar',
          events: {
            click: e => this.handleClickButton2(e),
          },
        }),  
      },
    });
  }

  handleClickRoot(e) {
    console.log('click root');
  }

  handleClickButton(e) {
    console.log('click button 1');
    this.props.chld.button.setProps({
      child: 'Another label 1',
    });
    this.forceUpdate();
  }

  handleClickButton2(e) {
    console.log('click button 2');
    this.props.chld.button1.setProps({
      child: 'Another label 2',
    });
    this.forceUpdate();
  }

  componentDidMount() {}

  render() {
    return template({
      userName: this.props.userName,
      button: this.props.chld.button.render(),
      button1: this.props.chld.button1.render(),
    });
  }

} 

export default UserProfile;