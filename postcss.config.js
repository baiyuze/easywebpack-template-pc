'use strict';
module.exports = {
  plugins: [
    require('autoprefixer')({ browsers: [
    "> 1%",
    "last 2 versions",
    "Android >= 3.2", 
    "Firefox >= 20", 
    "iOS 7"] }),
  ]
};
