import React, { Component } from 'react';

import { Form, Input, Button, Checkbox } from 'antd';



export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '545',
		}
	}
	aa = () => { };
	componentDidMount() {}
	change(e) {
		console.log(e.target.value);    //获取修改后的值
		// this.setState({
		// 	value: e.target.value
		// })
	}

	render(h) {
		const layout = {
			labelCol: { span: 8 },
			wrapperCol: { span: 16 },
		};

		const tailLayout = {
			wrapperCol: { offset: 8, span: 16 },
		};

		const onFinish = values => {
			console.log(values);
			this.props.history.push('/Home')
		};

		const onFinishFailed = errorInfo => {
			console.log('Failed:', errorInfo);
		}
		return (
			<div className="Login">
				<Form
					{...layout}
					name="basic"
					initialValues={{ remember: true, username: 111, password: 111, }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<Form.Item
						label="用户名"
						name="username"
						onChange={(event) => { this.change(event) }}
						rules={[{ required: true, message: 'Please input your username!' }]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="密码"
						name="password"
						rules={[{ required: true, message: 'Please input your password!' }]}
					>
						<Input.Password value={this.state.password}/>
					</Form.Item>

					<Form.Item {...tailLayout} name="remember" valuePropName="checked">
						<Checkbox>记住密码</Checkbox>
					</Form.Item>

					<Form.Item {...tailLayout}>
						<Button type="primary" htmlType="submit">
							登录
        				</Button>
					</Form.Item>
				</Form>
			</div>)
	}
}