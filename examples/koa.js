var koa = require('koa');
var router = require('koa-router');
var session = require('koa-generic-session');
var flash = require('../lib');

var app = koa();

app.keys = ['keys'];
app.use(session());

app.use(flash());

app.use(router(app));

app.get('/flash', function *(next){
  // Set a flash message by passing the key, followed by the value, to this.flash().
  this.flash('info', 'Flash is back!');
  this.redirect('/');
});

app.get('/', function *(next){
  // Get an array of flash messages by passing the key to this.flash()
  this.body = this.flash('info');
});

app.listen(8000);
