import React, { Component } from 'react';
import "./Github.css"

class Github extends Component {
  render() {
    return(
      <div className="github">
        <img className="github-logo" src="" alt="github" />
        <form>
          <div>
            <input type="text" />
          </div>
          <div>
            <button type="submit">Look up github user</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Github