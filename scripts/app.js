class App extends React.Component {
  state = {
    hotels: [],
    filteredHotels: [],
    filters: {
      country: "all",
      price: "all",
      room: "all",
    },
  };

  componentDidMount() {
    this.setState({ hotels: hotelsData });
    this.setState({ filteredHotels: hotelsData });
  }

  componentDidUpdate(prevPorps, prevState) {
    // Se compara el estado previo de los filtros y si cambia, se setea el stado con los filtros llamando a la funcion filtersHotels()
    if (this.state.filters !== prevState.filters) {
      this.setState({ filteredHotels: this.filterHotels() });
    }
  }

  // Cuando se selecciona una opcion nueva en el input, se setea en el estado el nuevo filtro aplicado
  filterHotelsById = (filterValue, filterId) => {
    this.setState({
      filters: { ...this.state.filters, [filterId]: filterValue },
    });
  };


// funcion para aplicar los filtros seleccionados en los inputs.
  filterHotels = () => {
    let objPrueba = [];
    let hotelsFilteredByCountry = this.state.hotels.filter((hotel) => {
      if (this.state.filters.country === "all") {
        return hotel
      } else {
        return hotel.country === this.state.filters.country;
      }
    });
    let hotelsFilteredByPrice = hotelsFilteredByCountry.filter((hotel) => {
      if (this.state.filters.price === "all") {
        return hotel;
      } else {
        return hotel.price.toString() === this.state.filters.price;
      }
    });

    return hotelsFilteredByPrice;
  };

  render() {
    return (
      <div className="aplication">
        <Header
          filterCountry={this.filterHotelsById}
          filterPrice={this.filterHotelsById}
          filterRooms={this.filterHotelsById}
        />
        <Hotels
          filteredHotels={
            this.state.filteredHotels ? (
              this.state.filteredHotels
            ) : (
              <h1>WAITING</h1>
            )
          }
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
