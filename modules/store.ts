
class Store {

  foo: number;
  constructor() {
    this.foo = 1;
  }

  incFoo(): void {
    this.foo += 1;
  }

}

export default Store;