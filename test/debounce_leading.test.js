'use strict'
import { debounce_leading as debounce } from '../src/index'
jest.useFakeTimers()
describe('debounce_leading', () => {
  it('runs once at the beginning', () => {
    const fn = jest.fn()
    const fnc = debounce(fn, 200)
    fnc()
    expect(fn).toHaveBeenCalledTimes(1)
    fnc()
    jest.runAllTimers()
    expect(fn).toHaveBeenCalledTimes(1)
  })
})
