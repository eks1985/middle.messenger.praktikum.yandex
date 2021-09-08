import EventBus from './event-bus';
import Validator from '../utilities/validator';

class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_RENDER: 'flow:render',
    FLOW_CDU: 'flow:component-did-update',
  };

  _element: HTMLElement | null = null;
  _meta = null;

  props: { [key: string]: any };
  eventBus: () => EventBus;
  validator: () => Validator;
  
  constructor(tagName = 'div', props = {}) {
    const eventBus = new EventBus();
    const validator = new Validator();
    // console.log('validator', validator);
    this._meta = {
      tagName,
      props
    };
    

    this.props = this._makePropsProxy(props);
    this.eventBus = () => eventBus;
    this.validator = () => validator;
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _addEvents() {
    const { events = {}} = this.props;
    Object.keys(events).forEach(eventName => {
      this._element!.addEventListener(eventName, events[eventName]);
    });
  }

  _addChildEvents() {
    const { chld = {}} = this.props;
    const chldKeys = Object.keys(chld);
    chldKeys.forEach(childKey => {
      const child = chld[childKey];
      if (child.props.events) {
        const childNode = document.getElementById(child.props.id);
        if (childNode) {
          Object.keys(child.props.events).forEach(eventName => {
            childNode.addEventListener(eventName, child.props.events[eventName]);
          });
        }
      }
    });
  }

  _removeEvents() {
    const { events = {}} = this.props;
    Object.keys(events).forEach(eventName => {
      this._element!.removeEventListener(eventName, events[eventName]);
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

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  componentDidMount(): void {}

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
    this._addChildEvents();
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

  _render(): void {
    this._element.innerHTML = this.render();
    this._removeEvents();
    this._addEvents();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  render(): void {}

  getContent(): HTMLElement | null {
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
    this.getContent()!.style.display = 'block';
  }

  hide() {
    this.getContent()!.style.display = 'none';
  }

  validate() {
    this.validator().validate();
  }
}

export default Block;

export function render(query, block) {
  const root = document.querySelector(query);
  root.appendChild(block.getContent());
  block._addChildEvents();
  return root;
} 


