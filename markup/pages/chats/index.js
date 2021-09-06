import Block from '../../../modules/block';
import { template } from './template';
import data from '../../data/dummy-data.json';

export default class Button extends Block {
  constructor(props) {
    super('div', props);
  }

  render() {
    // console.log('template', template);

    // const d = {
    //   people: [
    //     "Yehuda Katz",
    //     "Alan Johnson",
    //     "Charles Jolley",
    //   ],
    // }

    const res = template({ ...this.props, ...data });
    console.log('res', res);
    //return template(this.props, { chats: data.chats });
    return res;
  }
}