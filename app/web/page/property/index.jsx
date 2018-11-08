import React, { Component } from 'react';
import List from 'components/list';
import Layout from 'components/layout';
import { Button } from 'antd';
import './index.less';

export default class ListIndex extends Component {
  componentDidMount() {
    console.log('----componentDidMount-----');
  }

  render() {
    return <Layout>
      <div className="main">
        <div className="page-container page-component">
          <Button type='primary'>我是按钮</Button>
          <List test={this.props.test} list={this.props.list}></List>
        </div>
      </div>
    </Layout>
    
  }
}