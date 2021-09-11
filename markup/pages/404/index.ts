import Block from '../../../modules/block';
import { template } from './template';

export default class Button extends Block {
  constructor() {
    super('div');
  }

  render(): HTMLElement {
    return template();
  }
}