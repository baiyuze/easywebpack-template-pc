
const path = require('path')
const pkg = require(path.join(__dirname, './package.json'))

let theme = {}
if (pkg.theme && typeof pkg.theme === 'object') {
  theme = pkg.theme
}

module.exports = {
  egg: true,
  framework: 'react',
  devtool: 'source-map',
  entry: {
    list: 'app/web/page/list/index.jsx'
  },
  lib: ['react', 'react-dom'],
  alias: {
    asset: 'app/web/asset',
    components: 'app/web/components',
    common: 'app/web/common',
  },
  install:{
    check: false, // 默认禁用检测 loader 和 plugin 是否安装
    npm: 'cnpm'   // 动态安装时，默认采用 npm。 你可以使用 cnpm，tnpm等等 
  },
  loaders:{
    less: {
      enable: true, 
      test: /\.less/,
      use: ['css-loader', {  
        loader: 'less-loader',
        options: {
          javascriptEnabled: true,
          modifyVars: theme   //antd默认主题样式
        }
      }],
    }
  }

}