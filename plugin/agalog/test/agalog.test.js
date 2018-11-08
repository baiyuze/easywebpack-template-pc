'use strict';

const mock = require('egg-mock');

describe('test/agalog.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/agalog-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, agalog')
      .expect(200);
  });
});
