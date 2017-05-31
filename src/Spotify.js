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
        <img className="spotify-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkrsNFeX_IqZsOzKU8N8NDHNal2J6IYXht8Dpqx_W_cgOUODdW" alt="spotify" />
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