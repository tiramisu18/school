import React from 'react'
// import { render } from 'react-dom'
import './style/index.css'

class Login extends React.Component {
  constructor () {
    super()
  }

  render () {
    const { leftImage, fromContent } = this.props
    return (
      <div className='login-box' >
        <div className='login-left'><img src={leftImage || require('./images/roman.jpg')} className='login-left-image' /></div>
        <div className='login-right'>
          <div className='login-right-content' >
            <h2 className='login-right-title' >用户登录</h2>
            {fromContent}
          </div>
        </div>
      </div>
    )
  }
}
Login.defaultProps = {

}
export default Login
