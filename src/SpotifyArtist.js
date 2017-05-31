import React, { Component } from 'react'
import './SpotifyArtist.css'

class SpotifyArtist extends Component {
  state = {
    artist: {
      id: '',
      images: '',
      followers: '',
      genre: '',
      popularity: '',
      // spotify_uri: '',
      // spotify_id: '',
      // spotify_category_id: '',
      // spotify_user_id: '',
      // spotify_url: '',
    }
  }

  constructor(props) {
    super(props)
    this.fetchUserData(props)
  }

  fetchUserData = (props) => {
    fetch(`https://api.spotify.com/v1/artists/${props.match.params.artist}`)
      .then(response => response.json())
      .then(artist => this.setState({ artist }))
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = (nextProps.location !== this.props.location)
    if (locationChanged) {
      this.fetchUserData(nextProps)
    }
  }

  render() {
    const { artist } = this.state
    return (
      <div className="spotify-artist">
        <img src={artist.images} alt="artist"/>
        <h3>followers: {artist.followers}</h3>
        <h3>genre: {artist.genres}</h3>
        <h3>popularity: {artist.popularity}</h3>
        <a href={artist.href} target="_">Link to {artist.login}'s profile</a>
      </div>
    )
  }
}

export default SpotifyArtist 