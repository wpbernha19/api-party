import React, { Component } from 'react'
import './Spotify.css'
import { Route } from 'react-router-dom'
import SpotifyArtist from './SpotifyArtist'

class Spotify extends Component {
  state = {
    artist: ''
  }

  handleChange = (ev) => {
    const artist = ev.currentTarget.value
    this.setState({ artist })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/spotify/${this.state.artist}`)
  }

  render() {
    return (
      <div className="spotify">
        <img className="spotify-logo" src="https://hakkaprod-comp-logos.s3.amazonaws.com/uploads/company/square_logo/58/medium_Square_Logo.jpg" alt="spotify" />
        <form onSubmit={this.handleSubmit}>
          <div>
            <input 
              type="text"
              value={this.state.artist}
              onChange={this.handleChange} />
          </div>
          <div>
            <button type="submit">Look up artist</button>
          </div>
        </form>

        <Route path='/github/:artist' component={SpotifyArtist} />
        <Route exact path='/spotify' render={() => (
          <h3>Please enter an artist to search on spotify</h3>
        )} />
      </div>
    )
  }
}

export default Spotify