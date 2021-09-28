type PlainObject<T = any> = {
  [k in string]: T;
};

function isPlainObject(value: unknown): value is PlainObject {
  return typeof value === 'object'
      && value !== null
      && value.constructor === Object
      && Object.prototype.toString.call(value) === '[object Object]';
}

function isArray(value: unknown): value is [] {
  return Array.isArray(value);
}

function isArrayOrObject(value: unknown): value is [] | PlainObject {
  return isPlainObject(value) || isArray(value);
}

function isEqual(lhs: PlainObject, rhs: PlainObject): boolean {
  if (Object.keys(lhs).length !== Object.keys(rhs).length) {
      return false;
  }

  for (const [key, value] of Object.entries(lhs)) {
      const rightValue = rhs[key];
      if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
          if (isEqual(value, rightValue)) {
              continue;
          }
          return false;
      }

      if (value !== rightValue) {
          return false;
      }
  }

  return true;
}

export default isEqual;

// function isEqual(a: object, b: object): boolean {
//   if (a === b) {
//     return true;
//   }
//   else if ((typeof a == "object" && a != null) && (typeof b == "object" && b != null)) {
//     if (Object.keys(a).length != Object.keys(b).length)
//       return false;

//     for (var prop in a) {
//       if (b.hasOwnProperty(prop))
//       {  
//         if (! isEqual(a[prop], b[prop]))
//           return false;
//       }
//       else
//         return false;
//     }

//     return true;
//   }
//   else 
//     return false;
// }
