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
    let { filters, hotels } = this.state;
    //filtrado por pais
    let hotelsFilteredByCountry = hotels.filter((hotel) => {
      if (filters.country === "all") {
        return hotel;
      }
      return hotel.country === this.state.filters.country;
    });
    //la lista filtrada por pais ahora se filtra por precio
    let hotelsFilteredByPrice = hotelsFilteredByCountry.filter((hotel) => {
      if (filters.price === "all") {
        return hotel;
      }
      return hotel.price.toString() === filters.price;
    });
    // la lista filtrada por pais y precio se filtra por cantidad de habitaciones
    let hotelsFilteredByRooms = hotelsFilteredByPrice.filter((hotel) => {
      if (filters.room === "all") {
        return hotel;
      } else if (filters.room === "pequeño") {
        return hotel.rooms <= 10;
      } else if (filters.room === "mediano") {
        return hotel.rooms > 10 && hotel.rooms <= 20;
      }
      return hotel.rooms > 20;
    });
    debugger;
    //filtrado por fecha de entrada
    let hotelsFilteredByGetInDate = [];
    if (
      filters.availabilityFrom < today.valueOf() &&
      filters.availabilityFrom
    ) {
      alert("la fecha de entrada no puede ser anterior a hoy");
      return hotelsFilteredByGetInDate;
    } else {
      hotelsFilteredByGetInDate = hotelsFilteredByRooms.filter((hotel) => {
        return (
          filters.availabilityFrom >= hotel.availabilityFrom &&
          filters.availabilityFrom <= hotel.availabilityTo
        );
      });
    }

    let hotelsFilteredByGetOutDate = [];
    //filtrado por fecha de salida
    if (
      hotelsFilteredByGetInDate.length > 0 &&
      filters.availabilityTo < filters.availabilityFrom &&
      filters.availabilityTo
    ) {
      alert("la fecha de salida no puede ser anterior a la de entrada");
      return hotelsFilteredByGetOutDate;
    } else if (hotelsFilteredByGetInDate.length) {
      hotelsFilteredByGetOutDate = hotelsFilteredByGetInDate.filter((hotel) => {
        return filters.availabilityTo <= hotel.availabilityTo;
      });
    }
    hotelsFilteredByGetOutDate = hotelsFilteredByRooms.filter((hotel) => {
      return (
        filters.availabilityTo >= hotel.availabilityFrom &&
        filters.availabilityTo <= hotel.availabilityTo
      );
    });

    if (filters.availabilityTo > 0) {
      return hotelsFilteredByGetOutDate;
    } else if (filters.availabilityFrom > 0) {
      return hotelsFilteredByGetInDate;
    }
    return hotelsFilteredByRooms;
  };

  render() {
    let { filters, filteredHotels } = this.state;

    return (
      <div className="aplication">
        <Header
          filterHotel={this.filterHotelsById}
          fechaDesde={filters.availabilityFrom}
        />
        <Hotels filteredHotels={filteredHotels} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
