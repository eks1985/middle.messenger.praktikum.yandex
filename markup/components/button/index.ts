import Block from '../../../modules/block';
import { template } from './template';

export default class Button extends Block {
  constructor(props) {
    super('div', props);
  }

  render() {
    // console.log('button render');
    return template(this.props);
  }
}