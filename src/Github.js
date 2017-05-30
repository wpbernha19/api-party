import React, { Component } from 'react';
import "./Github.css"
import { Route } from 'react-router-dom'
import GithubUser from './GithubUser'


class Github extends Component {
  state = {
    username: ''
  }

  handleChange = (ev) => {
    const username = ev.currentTarget.value
    this.setState({ username})
  } 

  handleSubmit = (ev) => {
    ev.preventDeafult()
    this.props.history.push(`/github/${this.state.username}`)
  }

  render() {
    return(
      <div className="github">
        <img className="github-logo" src="" alt="github" />
        <form onSubmit={this.handleSubmit}>
          <div>
            <input 
              type="text" 
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Look up github user</button>
          </div>
        </form>

        <Route exact path='/github' render={() => (
          <h3>Please enter a username to search on github</h3>
        )} />
        <Route path='/github/:username' component={GithubUser} />
      </div>
    )
  }
}

export default Github