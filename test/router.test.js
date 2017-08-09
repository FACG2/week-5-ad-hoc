const test=require('tape')
const shot=require('shot')
const router=require('../src/router.js')
const handlers =require('../src/handler.js')


test('Home route', (t) => {
  shot.inject(router, {method:'get' , url:'/'}, (res) => {
    t.equal(res.statusCode, 200 , 'respond with 200');
    t.end();
  })
})

test('Home route returns a status code of 404' , (t) => {
shot.inject(router, { method:'get' , url: '/qqqqq'}, (res) => {
  t.equal(res.statusCode, 404 , 'respond with 404');
  t.equal(res.payload, 'Page Not Found', 'should return error in the payload');
  t.end();
})
})
