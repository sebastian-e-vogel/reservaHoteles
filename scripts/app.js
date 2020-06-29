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
    // Se compara el estado previo de los filtros y si cambia, se setea el estado con los filtros llamando a la funcion filtersHotels()
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
    //filtrado por pais
    let hotelsFilteredByCountry = this.state.hotels.filter((hotel) => {
      if (this.state.filters.country === "all") {
        return hotel;
      } else {
        return hotel.country === this.state.filters.country;
      }
    });
    //la lista filtrada por pais ahora se filtra por precio
    let hotelsFilteredByPrice = hotelsFilteredByCountry.filter((hotel) => {
      if (this.state.filters.price === "all") {
        return hotel;
      } else {
        return hotel.price.toString() === this.state.filters.price;
      }
    });
  // la lista filtrada por pais y precio se filtra por cantidad de habitaciones
    let hotelsFilteredByRooms = hotelsFilteredByPrice.filter((hotel) => {
      if (this.state.filters.room === "all") {
        return hotel;
      } else if (this.state.filters.room === "pequeño") {
        return hotel.rooms <= 10;
      } else if (this.state.filters.room === "mediano") {
        return hotel.rooms > 10 && hotel.rooms <= 20;
      }
      return hotel.rooms > 20;
    });

    return hotelsFilteredByRooms;
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
