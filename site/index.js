import React from 'react'
import { render } from 'react-dom'

import Bundle from '../src/components/lazyload'
// import {Loading, Tabs} from 'element-react'
import Main from './pages/index/index.js'
// import Title from './pages/title.js'
import { Spin } from 'antd'
// import Login from '../src/components/login'
// import WrappedFormTest from 'md_components/others/form'
import './style/index.css'

const loadComponent = (Component) => () => (
  <Bundle load={Component}>
    {
            (Component) => Component ? <Component /> : <Spin><div style={{height: '100vh'}} /></Spin>
        }
  </Bundle>
)
class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='md-body'>
        <Main />
      </div>

    )
  }
}

render(<App />, document.getElementById('root'))
