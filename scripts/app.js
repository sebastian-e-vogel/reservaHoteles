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
    if (filterId === "availabilityFrom" || filterId === "availabilityTo") {
      let filtroFecha = filterValue.split("-").join(",");
      let fecha = new Date(filtroFecha);
      fecha.setHours(23)
      fecha.setMinutes(59)
      fecha.setSeconds(59)


      return this.setState({
        filters: { ...this.state.filters, [filterId]: fecha.valueOf() },
      });
    }

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
    //filtrado por fecha de entrada
    let hotelsFilteredByGetInDate = hotelsFilteredByRooms.filter((hotel) => {
      return  (this.state.filters.availabilityFrom >= hotel.availabilityFrom && 
      this.state.filters.availabilityFrom <= hotel.availabilityTo );
    });
  


let hotelsFilteredByGetOutDate = []
    //filtrado por fecha de salida
     if(hotelsFilteredByGetInDate.length > 0 && this.state.filters.availabilityTo < this.state.filters.availabilityFrom 
     && this.state.filters.availabilityTo){
        alert('la fecha de salida no puede ser anterior a la de entrada')
        return hotelsFilteredByGetOutDate = []
    }else if( hotelsFilteredByGetInDate.length ){
       hotelsFilteredByGetOutDate =  hotelsFilteredByGetInDate.filter((hotel) => {
      return  (
      this.state.filters.availabilityTo <= hotel.availabilityTo  )
       })
    }
     hotelsFilteredByGetOutDate = hotelsFilteredByRooms.filter((hotel) => {
      return(
      this.state.filters.availabilityTo >= hotel.availabilityFrom &&
      this.state.filters.availabilityTo <= hotel.availabilityTo
      )
       })

     if(hotelsFilteredByGetOutDate.length){
      return hotelsFilteredByGetOutDate
    }else if(hotelsFilteredByGetInDate.length){
      return hotelsFilteredByGetInDate
    } return hotelsFilteredByRooms

  };

  render() {
    return (
      <div className="aplication">
        <Header
          filterCountry={this.filterHotelsById}
          filterPrice={this.filterHotelsById}
          filterRooms={this.filterHotelsById}
          filterDateFrom={this.filterHotelsById}
          filterDateTo={this.filterHotelsById}
        />
        <Hotels filteredHotels={this.state.filteredHotels} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
