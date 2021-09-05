(function () {
  console.log(window.location.pathname);
  // console.log(window.state);
  if (!window.state) {
    window.state = 1;
  } else {
    window.state ++;
  }
})();