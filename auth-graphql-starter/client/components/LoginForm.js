import React from 'react'
import AuthForm from './AuthForm'
import { graphql } from 'react-apollo'
import mutation from '../mutations/Login'

const LoginForm = (props) => {
  const onSubmit = ({ email, password }) => {
    props.mutate({
      variables: { email, password },
    })
  }
  return (
    <div>
      <h3>Login</h3>
      <AuthForm onSubmit={onSubmit} />
    </div>
  )
}

export default graphql(mutation)(LoginForm)
