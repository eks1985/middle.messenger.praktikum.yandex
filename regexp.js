
// login /^(?=.*[a-zA-Z])([a-zA-Z0-9-]){3,20}$/
// name /^[A-Z][a-zA-Z-]*$/
// email /.+@[^@]+[a-z]+\.[^@]{2,}$/
// password /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/
// phone /^[+-d]?\d{3,15}$/
// message /(.|\s)*\S(.|\s)*/

// const testrg = /^[a-zA-Z0-9]{3,20}$/; //login //^[a-zA-Z0-9-]{3,20}$ //


// const testrg = /^[A-Z][a-zA-Z-]*$/;
const value = 'Kirillewfwfewefewfewfwfwwfewfwfwefwfwe';

const res = testrg.test(value);
console.log('res', res);

// https://regex101.com/r/ulNlMO/1/