'use strict';
class AgaLog {
  constructor(app) {
    this.app = app;
    this.config = app.config.agalog;
  }
  log(input, ctx) {
    const options = { /*...*/ }; // get option from ctx
    // ...log
  }
}
module.exports = AgaLog;