import React from 'react'
// import PrintProvider, { Print } from 'react-easy-print'
// import {DatePicker} from 'element-react'
// var PrintTemplate = require('react-print')

// import Title from '../title.js'
// import RangePrint from '../print.js'
// import PicDetailsDemo from 'md_components/others/pictureshow'
import './style/index.css'

class Homepage extends React.Component {
  constructor () {
    super()
  }
  render () {
    return (
      <div>
        <div className='contain contain1'>
          <div className='contain-fream' />
          <div className='contain1-box'>
            <div className='contain1-content' />
          </div>
        </div>
        <div className='contain contain2'>
          <div className='contain-repre' />
          <div className='contain-fream'>
            <div className='contain2-text'><h1><a>论文选题</a></h1></div>
          </div>
          <div className='contain2-box'>
            <div className='contain2-content' />

          </div>
        </div>
        <hr />
        <div className='contain-foot' />
      </div>
    )
  }
}
export default Homepage
