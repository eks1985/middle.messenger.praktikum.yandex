
import { render } from '../modules/block';
import Page404 from '../markup/pages/404';
import store from '../modules/store';


function isEqual(lhs, rhs) {
  return lhs === rhs;
}

type Props = Record<string, any>;

class Route {
  _pathname: string;
  _props: Props;
  constructor(pathname: string, view, props) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if(!this._block) {
      this._block = new this._blockClass(this._props.store);
      render(this._props.rootQuery, this._block);
      return;
    }
    this._block.show();
  }

}

class Router {
  __instance: Router | undefined;
  routes: [];
  constructor(rootQuery, store) {
    if (Router.__instance) {
      return Router.__instance;
    }
    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;
    this.store = store;

    Router.__instance = this;

  }
  use(pathname: string, block) : Router {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery, store: this.store });
    this.routes.push(route);
    return this;
    
  }
  start(): void {
    window.onpopstate = (event => { // изменение в адресной строке
      this._onRoute(event.currentTarget.location.pathname);
    }).bind(this);
    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname): void {

    const route = this.getRoute(pathname);
    if (!route) {
      this._render404();
      return;
    }
    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }
  
    this._currentRoute = route;
    route.render(route, pathname);

  }

  _render404() {
    render(this._rootQuery, new Page404());
  }

  go(pathname: string): void {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  getRoute(pathname) {
    return this.routes.find(route => route.match(pathname));
  }

  back(): void {
    this.history.back();
  }

  forward(): void {
    this.history.forward();
  }
}

export default new Router('.app', store);