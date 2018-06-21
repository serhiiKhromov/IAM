import React, { Component, Fragment } from 'react'
import './UserWall.scss'

let list = [
  {
    link: '1',
    url: '1'
  },
  {
    link: '2',
    url: '2'
  },
  {
    link: '3',
    url: '3'
  },
  {
    link: '4',
    url: '4'
  }
]


class UserWall extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list
    }
  }

add = () => {
  this.setState({
    list: this.state.list.push(
      {
        link: '56',
        url: '56'
      }
    )
  })
}

render = () => {
    return (
      <Fragment>
        <div className="main-section-wrapper">
          <div className="main-section">
            <ul className="wall">
              {list.map((item, index) => 
                <li key={index} className="pic">
                  <a href={item.link}>
                    <img src={item.url} />
                  </a>
                </li>)
              }
            </ul>
            <button onClick={this.add}>add</button>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default UserWall