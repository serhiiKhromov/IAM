import ReactDOM from 'react-dom'
import React from 'react'
import 'global/lib/bootstrap-3.3.7/css/bootstrap.css'
import 'global/fonts/Roboto/style.scss'
import './main.scss'

import Header from './components/Header/Header'
import UserWall from './components/UserWall/UserWall'

const Main = () => {
  return (
    <div>
      <Header />
      <UserWall />
    </div>
  )
}

ReactDOM.render(<Main />, document.getElementById('app'))
