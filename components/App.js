class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: "",
      fruits: []
    };
  }

  componentDidMount() {
    fetch(
      "https://my-json-server.typicode.com/thoughtworks-jumpstart/api/fruits"
    )
      .then(res => res.json())
      .then(result => this.setState({ fruits: result }));
    // console.log("componentDidMount: ", this.state.fruits);
  }

  updateField = event => {
    this.setState({ searchField: event.target.value });
  };

  filter = () => {
    // includes reaction to empty string
    const searchField = this.state.searchField;
    return this.state.fruits.filter(fruit => {
      return fruit.type.includes(searchField);
    });
  };

  render() {
    // console.log("in render(): ", this.state.fruits);

    return (
      <div className="fruitsDisplay">
        <h1>React Fruits Basket</h1>
        <SearchInput onChange={this.updateField} />
        <FruitsBasket filteredFruits={this.filter()} />
      </div>
    );
  }
}
