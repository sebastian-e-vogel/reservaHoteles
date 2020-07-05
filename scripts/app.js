class App extends React.Component {
  state = {
    hotels: [],
    filteredHotels: [],
    filters: {
      country: "all",
      price: "all",
      room: "all",
      availabilityFrom: "",
      availabilityTo: "",
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
      }
      return hotel.country === this.state.filters.country;
    });
    //la lista filtrada por pais ahora se filtra por precio
    let hotelsFilteredByPrice = hotelsFilteredByCountry.filter((hotel) => {
      if (this.state.filters.price === "all") {
        return hotel;
      }
      return hotel.price.toString() === this.state.filters.price;
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
    debugger;
    //filtrado por fecha de entrada
    let hotelsFilteredByGetInDate = [];
    if (
      this.state.filters.availabilityFrom < today.valueOf() &&
      this.state.filters.availabilityFrom
    ) {
      alert("la fecha de entrada no puede ser anterior a hoy");
      return hotelsFilteredByGetInDate;
    } else {
       hotelsFilteredByGetInDate = hotelsFilteredByRooms.filter((hotel) => {
        return (
          this.state.filters.availabilityFrom >= hotel.availabilityFrom &&
          this.state.filters.availabilityFrom <= hotel.availabilityTo
        );
      });
    }

    let hotelsFilteredByGetOutDate = [];
    //filtrado por fecha de salida
    if (
      hotelsFilteredByGetInDate.length > 0 &&
      this.state.filters.availabilityTo < this.state.filters.availabilityFrom &&
      this.state.filters.availabilityTo
    ) {
      alert("la fecha de salida no puede ser anterior a la de entrada");
      return hotelsFilteredByGetOutDate;
    } else if (hotelsFilteredByGetInDate.length) {
      hotelsFilteredByGetOutDate = hotelsFilteredByGetInDate.filter((hotel) => {
        return this.state.filters.availabilityTo <= hotel.availabilityTo;
      });
    }
    hotelsFilteredByGetOutDate = hotelsFilteredByRooms.filter((hotel) => {
      return (
        this.state.filters.availabilityTo >= hotel.availabilityFrom &&
        this.state.filters.availabilityTo <= hotel.availabilityTo
      );
    });

    if (this.state.filters.availabilityTo > 0) {
      return hotelsFilteredByGetOutDate;
    } else if (this.state.filters.availabilityFrom > 0) {
      return hotelsFilteredByGetInDate;
    }
    return hotelsFilteredByRooms;
  };

  render() {
    return (
      <div className="aplication">
        <Header
          filterHotel={this.filterHotelsById}
          fechaDesde={this.state.filters.availabilityFrom}
        />
        <Hotels filteredHotels={this.state.filteredHotels} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
