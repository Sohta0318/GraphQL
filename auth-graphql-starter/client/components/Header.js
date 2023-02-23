import React from 'react'
import {graphql} from 'react-apollo'
import query from '../queries/CurrentUser'

const Header = (props) => {
  const renderButtons = () => {
    const {loading, user} = props.data
    if(loading) return <div/>
    if(user) {
      return <div>Logout</div>
    }else{
      return <div>You're not sign in</div>
    }
  }
  return (
    <nav><div className="nav-wrapper">{renderButtons()}</div></nav>
  )
}

export default graphql(query)(Header)