const assert = require('assert')

describe('webpack.base.js tet case', () => {
  const baseConfig = require('../../lib/webpack.base.js')

  
  it('entry', () => {
    assert.equal(baseConfig.entry.index, '/Users/wuxiaogang/mydream/webpack/jike/my-project04/builder-webpack/test/smoke/template/src/index/index.js'),
    assert.equal(baseConfig.entry.search, '/Users/wuxiaogang/mydream/webpack/jike/my-project04/builder-webpack/test/smoke/template/src/search/index.js')
  })

})