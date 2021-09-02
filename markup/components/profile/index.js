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
        click: e => this.handleClick(e),
      },
      button: new Button({
        className: 'my-class',
        child: 'Click me 1',
        id: 'foo',
      })
    });
  }

  handleClick(e) {
    if (e.target && e.target.id === 'foo') {
      console.log('button click');
      this.props.button.setProps({
        child: 'Another label',
      });
      this.forceUpdate();
    }
  }

  componentDidMount() {
    // setTimeout(() => {
    //   // this.props.events.click = this.handleClick;
    //   this.props.button.setProps({
    //     child: 'Another label',
    //   });
    //   // this.forceUpdate();
    // }, 1000);
    // this.props.events.click = this.handleClick;
    // this.props.button.setProps({
    //   child: 'Another label',
    // });
  }

  render() {
    const btnInstance = this.props.button;
    const button = btnInstance.render();
    console.log('button', button);
    return template({ userName: this.props.userName, button });
  }
} 

export default UserProfile;