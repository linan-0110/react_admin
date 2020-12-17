import React, { Component } from 'react';
import { Route } from 'react-router';
import { Switch, HashRouter, Link } from 'react-router-dom';
import './Home.css';

import Pone from '../p1/P1.jsx';
import Ptwo from '../p2/P2.jsx';

import { Menu, Drawer, Radio, Dropdown } from 'antd';
import {
	AppstoreOutlined,
	DownOutlined,
	PieChartOutlined,
	DesktopOutlined,
	ContainerOutlined,
	MailOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu;
export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			visible: false,
			menuMode: 'horizontal',
			// menuMode: 'inline',
		}
	}

	onChange = e => {
		this.setState({ menuMode: e.target.value })
	};
	componentDidMount() {
		let htmlWidth = document.querySelector('html').clientWidth
		window.onresize = (e) => {
			htmlWidth = e.target.innerWidth
		}
		window.addEventListener('mousemove', (e) => {
			if (!this.state.visible && (htmlWidth - e.x) <= 20) {
				this.setState({
					visible: true
				})
			} else if (this.state.visible && (htmlWidth - e.x) > 260) {
				this.setState({
					visible: false
				})
			}
		})
	}
	render(h) {
		let { visible, menuMode } = this.state
		
		const menu = (
			<Menu>
				<Menu.Item>
					<span>个人中心</span>
				</Menu.Item>
				<Menu.Item>
					<span>个人设置</span>
				</Menu.Item>
				<Menu.Item>
					<Link to="/">
						退出登录
      				</Link>
				</Menu.Item>
			</Menu>
		);
		const createSubTitle = flag => {
			if (flag) {
				return (<div className="SubTitle">
					<Dropdown overlay={menu}>
						<span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
							admin <DownOutlined />
						</span>
					</Dropdown>
				</div>)
			} else {
				return ''
			}
		}
		console.log(menuMode === "horizontal");
		return (
			<div className="Home" style={{ flexDirection: menuMode === 'horizontal' ? 'column' : 'row' }}>
				<div className={menuMode === "horizontal" ? "menu_horizontal" : 'menu'}>
					<Menu
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['sub1']}
						mode={menuMode}
						theme="dark"
					>
						<Menu.Item key="1" icon={<PieChartOutlined />}>
							<Link to="/Home/pone">ptwo</Link>
						</Menu.Item>
						<Menu.Item key="2" icon={<DesktopOutlined />}>
							<Link to="/Home/ptwo">ptwo</Link>
						</Menu.Item>
						<Menu.Item key="3" icon={<ContainerOutlined />}>
							Option 3
          				</Menu.Item>
						<SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
							<Menu.Item key="5">Option 5</Menu.Item>
							<Menu.Item key="6">Option 6</Menu.Item>
							<Menu.Item key="7">Option 7</Menu.Item>
							<Menu.Item key="8">Option 8</Menu.Item>
						</SubMenu>
						<SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
							<Menu.Item key="9">Option 9</Menu.Item>
							<Menu.Item key="10">Option 10</Menu.Item>
							<SubMenu key="sub3" title="Submenu">
								<Menu.Item key="11">Option 11</Menu.Item>
								<Menu.Item key="12">Option 12</Menu.Item>
							</SubMenu>
						</SubMenu>

					</Menu>
					{createSubTitle(menuMode === "horizontal")}
				</div>
				<div className="content">
					{createSubTitle(menuMode === "inline" || menuMode === "vertical")}
					<HashRouter>
						<Switch>
							<Route path='/Home/pone' component={Pone}></Route>
							<Route path='/Home/ptwo' component={Ptwo}></Route>
							<Route component={Pone}></Route>
						</Switch>
					</HashRouter>
				</div>
				<Drawer
					title="设置"
					placement="right"
					closable={false}
					visible={visible}
				>
					<h5>菜单方向</h5>
					<Radio.Group onChange={this.onChange} value={menuMode}>
						<Radio value='inline'>inline</Radio>
						<Radio value='horizontal'>horizontal</Radio>
						<Radio value='vertical'>vertical</Radio>
					</Radio.Group>
				</Drawer>
			</div>)
	}
}