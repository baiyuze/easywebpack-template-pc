
module.exports = app => {
  app.get('/', app.controller.home.list);
  app.get('/test', app.controller.home.test);
  app.get('/list', app.controller.home.list);
  app.get('/about', app.controller.home.index);
  app.get('/client', app.controller.home.client);
  app.post('/api/article/list', app.controller.home.pager);
};
