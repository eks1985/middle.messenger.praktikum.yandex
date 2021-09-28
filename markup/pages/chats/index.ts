import Block from '../../../modules/block';
import { template } from './template';
import data from '../../data/dummy-data.json';

export default class Button extends Block {
  constructor() {
    super('div', , store);
  }

  render(): HTMLElement {
    return template({
      ...this.props,
      ...data, // used ex example
      chatTitle: data.chats[2].title, // used ex example
      msg: data.chats[2].msg // used ex example
    });
  }
}