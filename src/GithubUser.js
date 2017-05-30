import React, { Component } from 'react'

class GithubUser extends Component {
  state = {
    user: {
      avatar_url: '',
      login: '',
      followers: '',
      following: '',
      location: '',
      html_url: '',
    }
  }

  constructor(props) {
    super(props)
    this.fetchUserData(props)
  }

  fetchUserData(props) {
    fetch(`https://api.github.com/users/${props.match.params.username}`)
      .then(response => response.json())
      .then(user => this.setState({ user }))
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = nextProps.location !== this.props.location
    if(locationChanged) {
      this.fetchUserData(nextProps)
    }
  }

  render() {
    const { user } = this.state
    return (
      
    )
  }
}

export default GithubUser