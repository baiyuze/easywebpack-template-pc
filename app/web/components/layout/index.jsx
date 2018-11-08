import React from 'react';
import LayoutHTML from 'common/layout.jsx';
import { Route, Link, Switch } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import './index.less';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class LayoutContent extends React.Component {
  constructor() {
    super();
    this.state = {
      // selectedKeys: 'list'
    };
  }

  handleClick(record) {
    location.href = `/${record.key}`;
  }

  componentDidMount() {
    let pathname = location.pathname;
    let selectedKeys = pathname.split('/')[pathname.split('/').length - 1];
    this.setState({ selectedKeys: selectedKeys ? selectedKeys : 'list' });
  }

  render() {

    return (
      <LayoutHTML>
        <div className='layout-content'>
          <div className='header'>
            <div className='logo'></div>
          </div>
          <div className='container'>
            <div className='menu'>
              <Menu
                onClick={this.handleClick.bind(this)}
                style={{ width: 200 }}
                selectedKeys={[this.state.selectedKeys]}
                defaultOpenKeys={['sub1']}
                mode="inline"
              >
                <SubMenu key="sub1"  title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                  <MenuItemGroup key="g1" title="Item 1">
                    <Menu.Item key="list">道具管理</Menu.Item>
                    <Menu.Item key="test">商品管理</Menu.Item>
                  </MenuItemGroup>
                  <MenuItemGroup key="g2" title="Item 2">
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                  </MenuItemGroup>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                  <Menu.Item key="5">Option 5</Menu.Item>
                  <Menu.Item key="6">Option 6</Menu.Item>
                  <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                  </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                  <Menu.Item key="9">Option 9</Menu.Item>
                  <Menu.Item key="10">Option 10</Menu.Item>
                  <Menu.Item key="11">Option 11</Menu.Item>
                  <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
              </Menu>
            </div>
            {/* 内容 */}
            <div className='content-layout'>
              <div className='content'>
                
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </LayoutHTML>
    );
  }
}

export default LayoutContent;