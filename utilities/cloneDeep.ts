function cloneDeep<T extends object = object>(obj: T) {
  return (function _cloneDeep(item: T): T | Date | Set<unknown> | Map<unknown, unknown> | object | T[] {
      // Handle:
      // * null
      // * undefined
      // * boolean
      // * number
      // * string
      // * symbol
      // * function
      if (item === null || typeof item !== "object") {
          return item;
      }

      // Handle:
      // * Date
      if (item instanceof Date) {
          return new Date(item.valueOf());
      }

      // Handle:
      // * Array
      if (item instanceof Array) {
          let copy = [];

          item.forEach((_, i) => (copy[i] = _cloneDeep(item[i])));

          return copy;
      }

      // Handle:
      // * Set
      if (item instanceof Set) {
          let copy = new Set();

          item.forEach(v => copy.add(_cloneDeep(v)));

          return copy;
      }

      // Handle:
      // * Map
      if (item instanceof Map) {
          let copy = new Map();

          item.forEach((v, k) => copy.set(k, _cloneDeep(v)));

          return copy;
      }

      // Handle:
      // * Object
      if (item instanceof Object) {
          let copy: object = {};

          // Handle:
          // * Object.symbol
          Object.getOwnPropertySymbols(item).forEach(s => (copy[s] = _cloneDeep(item[s])));

          // Handle:
          // * Object.name (other)
          Object.keys(item).forEach(k => (copy[k] = _cloneDeep(item[k])));

          return copy;
      }

      throw new Error(`Unable to copy object: ${item}`);
  })(obj);
}

export default cloneDeep


// type PlainObject<T = any> = {
//   [k in string]: T;
// };

// function isPlainObject(value: unknown): value is PlainObject {
//   return typeof value === 'object'
//       && value !== null
//       && value.constructor === Object
//       && Object.prototype.toString.call(value) === '[object Object]';
// }

// function isArray(value: unknown): value is [] {
//   return Array.isArray(value);
// }

// function cloneDeep<T extends object = object>(obj: T): PlainObject {
	
//   if (obj === null || typeof obj !== "object") return obj;
  
//   if (isArray(obj)) {
//       const clone = [];
//       for (let i = 0; i < obj.length; i++) {
//           clone[i] = cloneDeep(obj[i]);
//       }
//       return clone;
//   }
//   if (isPlainObject(obj)) {
//       //console.log('here 3');
//       const clone: PlainObject = {};
//       for (let prop in obj) {
//          if (obj.hasOwnProperty(prop)) {
//            const c: PlainObject = obj[prop];
//            clone[prop] = cloneDeep(c);
//          }
//       }
//       //console.log('here 4');
//       return clone;
//   }
  
//   console.log('Unable to copy');
//   return obj;
  
// }

// export default cloneDeep;

// const objects = [{ 'a': 1 }, { 'b': 2 }];
// const deep = cloneDeep(objects);

// console.log(deep[0] === objects[0]); // => false