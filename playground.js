const namespace = function(str) {
  const arr = str.split('.').reverse();
  return arr.reduce((res, item) => {
    return { [item]: res };
  }, {});
  
} 

const res = namespace('a.b.c.d.e');

console.log('res', res);

const namespace = (str: string): object => str.split(".").reduceRight((acc, key) => ({ [key]: acc }), {});