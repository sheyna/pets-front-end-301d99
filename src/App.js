import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      petData: {},
      species: '',
      showPet: false
    }
  }

  handlePet = (e) => {
    e.preventDefault();

  }

  handleInput = (e) => {
    this.setState({
      species: e.target.value
    })
  }

  render() {
    return (
      <>
        <h1>Find Your Pet</h1>
        <form onSubmit={this.handlePet}>
          <label>Search
            <input type="text" onInput={this.handleInput} />
          </label>
          <button>Display Pet</button>
        </form>
      </>
    );
  }
}

export default App;
