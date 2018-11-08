const path = require('path');
exports.static = true;

exports.reactssr = {
  enable: true,
  package: 'egg-view-react-ssr'
};

// exports.agalog = {
//   enable: false,
//   package: path.join(process.cwd(), 'plugin/Agalog.js')
// };