import React from 'react'
import { Form, Icon, Input, Checkbox, Button } from 'antd'
import './style/index.css'
const FormItem = Form.Item

class MyForm extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className='login-form' layout='vertical'>

        <FormItem className='formItem'>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input prefix={<Icon type='user' style={{ fontSize: 13 }} />} placeholder='账号' />
              )}
        </FormItem>
        <FormItem className='formItem'>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input prefix={<Icon type='lock' style={{ fontSize: 13 }} />} type='password' placeholder='密码' />
              )}
        </FormItem>
        <FormItem className='formItem' >
          {getFieldDecorator('identifyingCode', {
            rules: [{ required: true, message: 'Please input identifying code!' }]
          })(
            <Input className='login-form-idenCode' prefix={<Icon type='qrcode' style={{ fontSize: 13 }} />} type='identifyingCode' placeholder='验证码' />
              )}
          <div className='login-form-idCode' ><img alt='请刷新' src={this.props.photo} className='login-form-idCodePicture' /></div>
        </FormItem>

        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className='login-form-forgot' href=''>Forgot password</a>
          <Button type='primary' htmlType='submit' className='login-form-button'>Log in</Button>
          <a href=''>register now!</a>
        </FormItem>
      </Form>
    )
  }
}
const WrappedFormTest = Form.create()(MyForm)
WrappedFormTest.defaultProps = {
  photo: ''
}
export default WrappedFormTest
