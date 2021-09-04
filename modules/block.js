import EventBus from './event-bus';

class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_RENDER: 'flow:render',
    FLOW_CDU: 'flow:component-did-update',
  };

  _element = null;
  _meta = null;

  /** JSDoc
 * @param {string} tagName
 * @param {Object} props
 *
 * @returns {void}
 */
  constructor(tagName = 'div', props = {}) {
    const eventBus = new EventBus();
    this._meta = {
      tagName,
      props
    };
    this.props = this._makePropsProxy(props);
    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _addEvents() {
    const { events = {}} = this.props;
    Object.keys(events).forEach(eventName => {
      this._element.addEventListener(eventName, events[eventName]);
    });
  }

  addChildEvents() {
    const { chldEvents = []} = this.props;
    chldEvents.forEach(item => {
      const chld = document.getElementById(item.id);
      Object.keys(item.events).forEach(eventName => {
        chld.addEventListener(eventName, item.events[eventName]);
      });
    });
  }

  _removeEvents() {
    const { events = {}} = this.props;
    Object.keys(events).forEach(eventName => {
      this._element.removeEventListener(eventName, events[eventName]);
    })
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidMount() {
    this.componentDidMount();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  componentDidMount(oldProps) {}

  _componentDidUpdate(oldProps, newProps) {
    
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

  }

  componentDidUpdate(oldProps, newProps) {
    return true;
  }

  forceUpdate() {
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);  
    this.addChildEvents();
  }

  setProps = nextProps => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
    this.eventBus().emit(Block.EVENTS.FLOW_CDU);
  };

  get element() {
    return this._element;
  }

  _render() {
    this._element.innerHTML = this.render();
    this._removeEvents();
    this._addEvents();
    // console.log(this._element);
  }

  render() {}

  getContent() {
    return this.element;
  }

  _makePropsProxy(props) {
    const proxyData = new Proxy(props, {
      get(target, prop) {
        if (prop.startsWith('_')) {
          throw new Error('Нет доступа');
        }
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop, value) {
        target[prop] = value;
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      }
    });

    return proxyData;
  }

  _createDocumentElement(tagName) {
    return document.createElement(tagName);
  }

  show() {
    this.getContent().style.display = 'block';
  }

  hide() {
    this.getContent().style.display = 'none';
  }
}

export default Block;

export function render(query, block) {
  const root = document.querySelector(query);

  root.appendChild(block.getContent());
  return root;
} 


