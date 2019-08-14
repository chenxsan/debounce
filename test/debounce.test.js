'use strict'
import debounce from '../src/index'
jest.useFakeTimers()
describe('debounce', () => {
  it('fnc runs only once', () => {
    const fn = jest.fn()
    const fnc = debounce(fn, 200)
    fnc()
    fnc()
    fnc()
    expect(setTimeout).toHaveBeenCalledTimes(3)
    jest.runAllTimers()
    expect(fn).toHaveBeenCalledTimes(1)
  })
  it('fnc runs twice', () => {
    const fn = jest.fn()
    const fnc = debounce(fn, 200)
    fnc()
    setTimeout(() => fnc(), 201)
    jest.runAllTimers()
    expect(fn).toHaveBeenCalledTimes(2)
  })
})
