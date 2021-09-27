type Indexed<T = unknown> = {
  [key in string]: T;
};

function merge(lhs: Indexed, rhs: Indexed): Indexed {
  for (let p in rhs) {
      if (!rhs.hasOwnProperty(p)) {
          continue;
      }

      try {
          if (rhs[p].constructor === Object) {
              rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
          } else {
              lhs[p] = rhs[p];
          }
      } catch(e) {
          lhs[p] = rhs[p];
      }
  }

  return lhs;
}

export default merge

// type Indexed<T = unknown> = {
//   [key in string]: T;
// };

// function isObject(obj: Indexed): boolean {
// return obj && typeof obj === 'object';  
// }

// function merge(lhs: any, rhs: any): Indexed {
// //const isObject = (obj) => obj && typeof obj === 'object';

// if (!isObject(lhs) || !isObject(rhs)) {
//   return rhs;
// }

// Object.keys(rhs).forEach(key => {
//   if (Array.isArray(lhs[key]) && Array.isArray(rhs[key])) {
//     lhs[key] = lhs[key].concat(rhs[key]);
//   } else if (isObject(lhs[key]) && isObject(rhs[key])) {
//     lhs[key] = merge(Object.assign({}, lhs[key]), rhs[key]);
//   } else {
//     lhs[key] = rhs[key];
//   }
// }
// );

// return lhs;
// }