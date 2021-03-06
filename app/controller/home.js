const Model = require('../mocks/article/list');
const path = require('path');
const fs = require('fs');
module.exports = app => {
  return class AppController extends app.Controller {
    async index() {
      const { ctx } = this;
      await ctx.render('app.js', { url: ctx.url,test: '测试' });
    }
    
    async list() {
      let obj = Model.getPage(1, 10);
      const { ctx } = this;
      
      await ctx.render('property.js', { ...obj, test: '我是test' });
    }

    async test() {
      let obj = Model.getPage(1, 10);
      const { ctx } = this;
      
      await ctx.render('test.js', { ...obj, test: '我是test' });
    }

    async client() {
      const { ctx } = this;
      await ctx.renderClient('property.js', Model.getPage(1, 10));
    }

    async pager() {
      const { ctx } = this;
      const pageIndex = ctx.query.pageIndex;
      const pageSize = ctx.query.pageSize;
      ctx.body = Model.getPage(pageIndex, pageSize);
    }
  };
};