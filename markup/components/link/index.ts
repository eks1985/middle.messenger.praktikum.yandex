import Block from '../../../modules/block';
import { template } from './template';

export default class Button extends Block {
  constructor(props: Record<string, unknown>) {
    super('div', props);
  }

  render(): HTMLElement{
    return template(this.props);
  }
}