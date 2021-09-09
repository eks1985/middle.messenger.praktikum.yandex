import EventBus from './event-bus';
import Validator from '../utilities/validator';

type Meta = {
  tagName: string,
  props: Record<string, any>,
}

type Props = Record<string, any>;

type Events = {
  INIT: string,
  FLOW_CDM: string,
  FLOW_RENDER: string,
  FLOW_CDU: string,
}

class Block {
  static EVENTS: Events = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_RENDER: 'flow:render',
    FLOW_CDU: 'flow:component-did-update',
  };

  _element: HTMLElement | null = null;
  _meta: Meta | null = null;

  props: Props;
  eventBus: () => EventBus;
  validator: () => Validator;

  constructor(tagName = 'div', props = {}) {
    const eventBus = new EventBus();
    const validator = new Validator();
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

  _registerEvents(eventBus: EventBus): void {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _addEvents(): void {
    const { events = {}} = this.props;
    Object.keys(events).forEach(eventName => {
      if (this._element) {
        this._element.addEventListener(eventName, events[eventName]);
      }
    });
  }

  _addChildEvents(): void {
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

  _removeEvents(): void {
    const { events = {}} = this.props;
    Object.keys(events).forEach(eventName => {
      if (this._element) {
        this._element.removeEventListener(eventName, events[eventName]);
      }
    })
  }

  _createResources(): void {
    if (this._meta) {
      const { tagName } = this._meta;
      this._element = this._createDocumentElement(tagName);
    }
  }

  init(): void {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidMount(): void {
    this.componentDidMount();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  componentDidMount(): void {}

  _componentDidUpdate(oldProps: Record<string, any>, newProps: Record<string, any>): void {
    
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

  }

  componentDidUpdate(oldProps: Record<string, any>, newProps: Record<string, any>): boolean {
    return true;
  }

  forceUpdate(): void {
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);  
    this._addChildEvents();
  }

  setProps = (nextProps: Record<string, any>): void | undefined => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
    this.eventBus().emit(Block.EVENTS.FLOW_CDU);
  };

  get element(): HTMLElement | null {
    return this._element;
  }

  _render(): void {
    if (this._element) {
      this._element.innerHTML = this.render();
    }
    this._removeEvents();
    this._addEvents();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  render() {}

  getContent(): HTMLElement | null {
    return this.element;
  }

  _makePropsProxy(props) {
    const proxyData = new Proxy(props, {
      get(target, prop) {
        if (typeof prop === 'string' && prop.startsWith('_')) {
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

  _createDocumentElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }

  show(): void {
    const elem = this.getContent();
    if (elem) {
      elem.style.display = 'block';
    }
  }

  hide(): void {
    const elem = this.getContent();
    if (elem) {
      elem.style.display = 'none';
    }
  }

  validate(): void {
    this.validator().validate();
  }
}

export default Block;

export function render(query: string, block: Block): void {
  const root = document.querySelector(query);
  if (root) {
    const content = block.getContent();
    if (content) {
      root.appendChild(content);
    }
  }
  block._addChildEvents();
} 


