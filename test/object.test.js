'use strict'

import * as U from '../src'

test('deepClone', () => {
  let a = { foo: 'bar', obj: { a: 1, b: [2, 3] } }
  let b = U.deepClone(a)
  b.foo = 'foo'
  expect(a).toEqual({ foo: 'bar', obj: { a: 1, b: [2, 3] } })
  expect(b).toEqual({ foo: 'foo', obj: { a: 1, b: [2, 3] } })
  let c = [2, 3]
  let d = U.deepClone(c)
  d[0] = 1
  expect(c).toEqual([2, 3])
  expect(d).toEqual([1, 3])
})

test('deepFreeze', () => {
  let o = U.deepFreeze([1, [2, 3]])
  const foo = () => { o[0] = 3 }
  expect(foo).toThrow(`Cannot assign to read only property '0' of object '[object Array]'`)
  const bar = () => { o[1][0] = 4 }
  expect(bar).toThrow(`Cannot assign to read only property '0' of object '[object Array]'`)
  let obj = U.deepFreeze({a: 1, b: {c: null}})
  const flag = () => { obj.a = 5 }
  expect(flag).toThrow(`Cannot assign to read only property 'a' of object '#<Object>'`)
})

test('renameKeys', () => {
  let o = {name: 'john', job: 'fonts', detail: [1, 2]}
  o = U.renameKeys({job: 'possion'}, o)
  expect(o).toEqual({ name: 'john', possion: 'fonts', detail: [ 1, 2 ] })
})

test('omit', () => {
  const o = U.omit({ a: 1, b: '2', c: 3 }, ['b'])
  expect(o).toEqual({ a: 1, c: 3})
})

test('isEmpty', () => {
  expect(U.isEmpty).toBeInstanceOf(Function)
  let b = U.isEmpty({})
  expect(b).toBeTruthy()
  b = U.isEmpty([])
  expect(b).toBeTruthy()
  b = U.isEmpty('')
  expect(b).toBeTruthy()
  b = U.isEmpty({a: 1})
  expect(b).toBeFalsy()
  b = U.isEmpty([2])
  expect(b).toBeFalsy()
  b = U.isEmpty('text')
  expect(b).toBeFalsy()
  b = U.isEmpty(123)
  expect(b).toBeTruthy()
  b = U.isEmpty(true)
  expect(b).toBeTruthy()
  b = U.isEmpty(new Date())
  expect(b).toBeTruthy()
})

test('get', () => {
  expect(U.get).toBeInstanceOf(Function)
  const obj = {
    name: 'joe',
    child: [
      {
        name: 'john',
        child: null
      }
    ]
  }
  expect(U.get(obj, 'child[0].name')).toBe('john')
})