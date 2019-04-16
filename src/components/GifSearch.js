import React, { Component } from 'react'
 
class GifSearch extends Component {
 
<<<<<<< HEAD
}

export default GifSearch
=======
  state = {
    peopleInSpace: []
  }
 
  render() {
    return (
      <div>
        {this.state.peopleInSpace.map(person => person.name)}
      </div>
    )
  }
 
  componentDidMount() {
    fetch('http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g)
      .then(response => response.json())
      .then(data => {
        this.setState({
          peopleInSpace: data.people
        })
      })
  }
}
 
export default App
>>>>>>> 6e6b49aa63d5d3e1d23eae750e903337ef75cc26
