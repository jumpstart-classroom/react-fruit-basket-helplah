class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: "",
      fruits: []
    };
    this.url = `https://my-json-server.typicode.com/thoughtworks-jumpstart/api/fruits`;
  }

  async componentDidMount() {
    try {
      const response = await fetch(this.url);

      if (!response.ok) {
        throw new Error("Ouch this failed!");
      }

      const fruits = await response.json();
      this.setState({ fruits });
    } catch (err) {
      console.log(err);
    }
  }

  // componentDidMount() {
  //   fetch(this.url)
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         throw new Error("Ouch this failed!");
  //       }
  //     })
  //     .then(result => {
  //       this.setState({ fruits: result });
  //     })
  //     // catch will never run, since fetch will only throw an error if the response data is invalid
  //     .catch(error => {
  //       console.log("This is an error", error.message);
  //     });
  // }

  updateField = event => {
    this.setState({ searchField: event.target.value });
  };

  filter = () => {
    // why does fruit.type.includes(searchField) returns true for empty strings?
    const { searchField, fruits } = this.state;
    return fruits.filter(fruit => {
      return fruit.type.includes(searchField.toLowerCase());
    });
  };

  render() {
    return (
      <div className="fruits-app">
        <h1>React Fruits Basket</h1>
        <SearchInput onChange={this.updateField} />
        <FruitsBasket filteredFruits={this.filter()} />
      </div>
    );
  }
}
