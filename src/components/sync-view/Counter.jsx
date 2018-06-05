import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import {AppState} from '../../mobx/app-state'
import './Counter.scss'

@inject('appState') @observer
class Counter extends React.Component {
  render () {
    return <div className='counter'>
      <a
        href='javascript: void(0)'
        onClick={() => this.props.appState.add()}>
        {this.props.appState.count}
      </a>
    </div>
  }
}

Counter.propTypes = {
  appState: PropTypes.instanceOf(AppState)
}

export default Counter
