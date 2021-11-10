import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dogList: [],
      loading: true,
    };
    this.fetchDogImage = this.fetchDogImage.bind(this);
    this.renderDogImages = this.renderDogImages.bind(this);
  }

  componentDidMount() {
    this.fetchDogImage();
  }

  async fetchDogImage() {
    this.setState({
      loading: true,
    },
    async () => {
      const url = 'https://dog.ceo/api/breeds/image/random';
      const response = await fetch(url);
      const data = await response.json();
      const { message: image } = await data;

      this.setState((prevState) => ({
        dogList: [...prevState.dogList, image],
        loading: false,
      }));
    });
  }

  renderDogImages() {
    const { dogList } = this.state;
    return dogList.map((image) => (<img
      src={ image }
      key={ image }
      alt=""
      className="dog-image"
    />));
  }

  render() {
    const { loading } = this.state;
    return (
      <main className="dog-image-app">
        <h1>Dog Image App</h1>
        <button type="button" onClick={ this.fetchDogImage }>New Dog</button>
        <section className="dog-images-section">
          { loading ? 'Carregando' : this.renderDogImages()}
        </section>
      </main>
    );
  }
}

export default App;
