# koa-connect-flash

The flash is a special area of the session used for storing messages.  Messages
are written to the flash and cleared after being displayed to the user.  The
flash is typically used in combination with redirects, ensuring that the message
is available to the next page that is to be rendered.

This middleware was extracted from [Express](http://expressjs.com/) 2.x, after
Express 3.x removed direct support for the flash.  koa-connect-flash brings this
functionality to koa.

## Install

    $ npm install koa-connect-flash

## Usage

#### Koa

Flash messages are stored in the session.  First, setup sessions using `koa-generic-session` middleware.  Then, use `flash` middleware
provided by koa-connect-flash.

```javascript
var koa = require('koa');
var router = require('koa-router');
var session = require('koa-generic-session');
var flash = require('koa-connect-flash');

var app = koa();

app.keys = ['keys'];
app.use(session());

app.use(flash());

app.use(router(app));
```

With the `flash` middleware in place, all requests will have a `this.flash()` function
that can be used for flash messages.

```javascript
app.get('/flash', function *(next){
  // Set a flash message by passing the key, followed by the value, to this.flash().
  this.flash('info', 'Flash is back!');
  this.redirect('/');
});

app.get('/', function *(next){
  // Get an array of flash messages by passing the key to this.flash()
  this.body = this.flash('info');
});
```

## Examples

## Tests

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)
  - [TJ Holowaychuk](https://github.com/visionmedia)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2012-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
