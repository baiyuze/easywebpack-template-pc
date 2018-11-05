import React, { Component } from 'react';
import Layout from '../../component/layout.jsx';
import List from './componets/list';
import { Button } from 'antd';
import './index.scss';

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
    </Layout>;
  }
}