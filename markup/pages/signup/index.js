import Block from '../../../modules/block';
import { template } from './template';

export default class Button extends Block {
  constructor(props) {
    super('div', props);
  }

  render() {
    return template(this.props);
  }
}