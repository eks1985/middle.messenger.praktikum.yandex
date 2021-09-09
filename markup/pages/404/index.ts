import Block from '../../../modules/block';
import { template } from './template';

export default class Button extends Block {
  constructor() {
    super('div');
  }

  render(): void {
    return template(this.props);
  }
}