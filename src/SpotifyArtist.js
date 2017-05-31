import React, { Component } from 'react'
import './SpotifyArtist.css'

class SpotifyArtist extends Component {
  state = {
    user: {
      spotify_uri: '',
      spotify_id: '',
    }
  }

  constructor(props) {
    super(props)
    this.fetchUserData(props)
  }

  fetchUserData = (props) => {
    fetch(`https://api.spotify.com/albums/${props.match.params.username}`)
      .then(response => response.json())
      .then(user => this.setState({ user }))
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = (nextProps.location !== this.props.location)
    if (locationChanged) {
      this.fetchUserData(nextProps)
    }
  }

  render() {
    const { user } = this.state
    return (
      <div className="spotify-user">
        <img src={user.avatar_url} alt="user"/>
        <h2>{user.login}</h2>
        <h3>followers: {user.followers}</h3>
        <h3>following: {user.following}</h3>
        <h3>location: {user.location}</h3>
        <a href={user.html_url} target="_">Link to {user.login}'s profile</a>
      </div>
    )
  }
}

export default SpotifyArtist 