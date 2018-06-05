import React from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter as Router } from 'react-router-dom'
import routes from 'routes'
import './App.scss'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className='App'>
        <Router>
          {
            renderRoutes(routes)
          }
        </Router>
      </div>
    )
  }
}

export default App
