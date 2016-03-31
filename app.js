'use strict';
const koa = require('koa');
const path = require('path');

const staticCache = require('koa-static-cache');
const mount = require('koa-mount');

const blog = staticCache(path.join(__dirname, 'public'));

const app = koa();

app.use(function *defaultToIndex(next) {
  if (path.extname(this.path) === '') {
    const orig = this.path;
    this.path = path.join(this.path, 'index.html');
    yield *next;
    this.path = orig;
    return;
  }
  yield *next;
});
app.use(blog);

app.listen(80);
