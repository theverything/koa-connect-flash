var connectFlash = require('connect-flash');

module.exports = function flash(options) {
  var f = connectFlash(options);

  function flash(ctx) {
    return new Promise(function (resolve) {
      f(ctx, null, resolve);
    });
  }

  return function *(next) {
    yield flash(this);
    yield next;
  };
};
