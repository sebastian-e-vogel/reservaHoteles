class Header extends React.Component {
  state = {
    since: "Seleccione una fecha",
    until: "Seleccione una fecha",
  };

  handleSinceDate = (dateValue, filterId) => {
    this.setState({ since: dateValue });
    this.props.filterDateFrom(dateValue, filterId)
  };

  handleUntilDate = (dateValue, filterId) => {
    this.setState({ until: dateValue });
    this.props.filterDateTo(dateValue, filterId)

  };

  selectedCountry = (countryValue, filterId) => {
    this.props.filterCountry(countryValue, filterId);
  };
  selectedPrice = (priceValue, filterId) => {
    this.props.filterPrice(priceValue, filterId);
  };
  selectedRooms = (roomsValue, filterId) => {
   this.props.filterRooms(roomsValue, filterId);
  };

  render() {
    return (
      <div className="header">
        <h1 className="header-title"> Hoteles </h1>
        
        <p className="date-header">
          Desde el {this.state.since} hasta el {this.state.until}
        </p>
        <Filters
          sinceDate={this.handleSinceDate}
          untilDate={this.handleUntilDate}
          selectCountry={this.selectedCountry}
          selectPrice={this.selectedPrice}
          selectRooms={this.selectedRooms}
        />
      </div>
    );
  }
}
