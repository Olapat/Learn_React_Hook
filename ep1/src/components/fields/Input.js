import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  onChangeField = event => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
  }

  render() {
    const { username } = this.state
    return (
      <form>
        <input
          type='text'
          name='username'
          value={username}
          onChange={this.onChangeField}
        />
      </form>
    )
  }
}

export default Form











// const Input = props => (
//   <input {...props} />
// )

// export default Input
