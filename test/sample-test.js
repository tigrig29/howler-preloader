const assert = require('power-assert')
const myModule = require('../index.js')

describe('サンプルテスト', () => {
  it('失敗するテスト', () => {
    assert(myModule(3, 4) === 8)
  })
  it('成功するテスト', () => {
    assert(myModule(3, 4) === 7)
  })
})
