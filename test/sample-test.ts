import assert = require('assert')
import { add } from '../dist/index'

describe('サンプルテスト', () => {
  it('失敗するテスト', () => {
    assert(add(3, 4) === 8)
  })
  it('成功するテスト', () => {
    assert(add(3, 4) === 7)
  })
})
