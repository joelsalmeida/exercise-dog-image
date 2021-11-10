import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dogList: [],
    };
  }

  componentDidMount() {
    this.fetchDogImage();
  }

  async fetchDogImage() {
    const url = 'https://dog.ceo/api/breeds/image/random';
    const response = await fetch(url);
    const data = await response.json();
    const { message } = data;

    this.setState((prevState) => ({
      dogList: [...prevState.dogList, message],
    }));
  }

  render() {
    return (
      <main className="dog-image-app">
        <h1>Dog Image App</h1>
        <section className="dog-images-section">
          Dog images Section
        </section>
      </main>
    );
  }
}

export default App;
