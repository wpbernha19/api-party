import React, { Component } from 'react';
import "./Github.css"
import { Route } from 'react-router-dom'


class Github extends Component {
  state = {
    username: ''
  }

  handleChange = (ev) => {
    const username = ev.currentTarget.value
    this.setState({ username})
  } 

  render() {
    return(
      <div className="github">
        <img className="github-logo" src="" alt="github" />
        <form>
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
          <h3>Please enter a username to search on github</h3>)}
        />
      </div>
    )
  }
}

export default Github