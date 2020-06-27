class App extends React.Component {
  state = {
    hotels: [],
    filteredHotels: null,
  };

  componentDidMount() {
    this.setState({ hotels: hotelsData });
  }

  handleFilterCountry = (country) => {
    if (country === "all") {
      return this.setState({ filteredHotels: null });
    }

    let hotelsFilteredByCountry = this.state.hotels.filter((hotel) => {
      return hotel.country === country;
    });

    this.setState({ filteredHotels: hotelsFilteredByCountry });
  };
  handleFilterPrice = (price) => {
    if (country === "all") {
      return this.setState({ filteredHotels: null });
    }
    let hotelsFilteredByPrice = this.state.hotels.filter((hotel) => {
      return hotel.price.toString() === price;
    });

    this.setState({ filteredHotels: hotelsFilteredByPrice });
    this.setState({ filteredHotels: hotelsFilteredByPrice });
  };
  handleFilterRooms = (rooms) => {
 if (rooms === "all") {
      return this.setState({ filteredHotels: null });
    }

switch (rooms) {
  case 'pequeño':
        let hotelsFilteredByRooms = this.state.hotels.filter((hotel) =>  hotel.rooms >= 10);
    break;
  case 'mediano':
    //     let hotelsFilteredByPrice = this.state.hotels.filter((hotel) => {
    //   return hotel.price.toString() === price;
    // });
    break;
  case 'grande':
    //     let hotelsFilteredByPrice = this.state.hotels.filter((hotel) => {
    //   return hotel.price.toString() === price;
    // });
    break;
}

console.log(hotelsFilteredByRooms)
  };

  render() {
    return (
      <div>
        <Header
          filterCountry={this.handleFilterCountry}
          filterPrice={this.handleFilterPrice}
          filterRooms={this.handleFilterRooms}
        />
        <Hotels
          filteredHotels={
            this.state.filteredHotels
              ? this.state.filteredHotels
              : this.state.hotels
          }
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
