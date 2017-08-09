const test = require('tape')
const shot = require('shot')
const router = require('../src/router.js')
// const handlers =require('../src/handler.js')


test('Home route', (t) => {
  shot.inject(router, {
    method: 'get',
    url: '/'
  }, (res) => {
    t.equal(res.statusCode, 200, 'respond with 200');
    t.end();
  })
});

test('Home route returns a status code of 404', (t) => {
  shot.inject(router, {
    method: 'get',
    url: '/qqqqq'
  }, (res) => {
    t.equal(res.statusCode, 404, 'respond with 404');
    t.equal(res.payload, 'Page Not Found', 'should return error in the payload');
    t.end();
  })
});

test('Public route', (t) => {
  shot.inject(router, {
    method: 'get',
    url: '/public'
  }, (res) => {
    t.equal(res.statusCode, 404, 'respond with public 400');
    t.end();
  })
});

test('Public js file', (t) => {
  shot.inject(router, {
    method: 'get',
    url: '/public/js/index.js'
  }, (res) => {
    t.equal(res.statusCode, 200, 'respond with index.js file');
    t.end();
  })
});

test('Public style file', (t) => {
  shot.inject(router, {
    method: 'get',
    url: '/public/css/style.css'
  }, (res) => {
    t.equal(res.statusCode, 200, 'respond with style file');
    t.end();
  })
});

test('Public js request file', (t) => {
  shot.inject(router, {
    method: 'get',
    url: '/public/js/request.js'
  }, (res) => {
    t.equal(res.statusCode, 200, 'respond with request file');
    t.end();
  })
});

test('Public js request file', (t) => {
  shot.inject(router, {
    method: 'get',
    url: '/api/getQoute'
  }, (res) => {
    t.equal(res.statusCode, 200, 'respond with get Qoute');
    t.end();
  })
});
