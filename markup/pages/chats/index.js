import Block from '../../../modules/block';
import { template } from './template';
import data from '../../data/dummy-data.json';

export default class Button extends Block {
  constructor(props) {
    super('div', props);
  }

  render() {
    return template({ ...this.props, ...data });
  }
}