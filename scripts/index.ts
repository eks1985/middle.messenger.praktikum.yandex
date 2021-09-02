import signinDynamic from '../markup/components/signin/signin-dynamic';

class Component {

  constructor() {
    this.props = {};
  }

  fetchData() {
    this.render();
  }

  render() {
    document.getElementById('app').innerHTML = signinDynamic({bar: 'Sign in dynamic content 1', title: { id: 888, descr: 'Click 334' } }); 
    const btn = document.getElementById('888');
    btn.addEventListener('click', this.fetchData.bind(this));
  }


}

const component = new Component();
component.render();