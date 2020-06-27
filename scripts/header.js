class Header extends React.Component {
  state = {
    since: 4,
    until: 4,
  };

  handleSinceDate = (fecha) => {
    this.setState({ since: fecha });
  };

  handleUntilDate = (fecha) => {
    this.setState({ until: fecha });
  };

  selectedCountry = (country) => {
    this.props.filterCountry(country);
  };
  selectedPrice = (price) => {
    this.props.filterPrice(price);
  };
  selectedRooms = (rooms) => {
   this.props.filterRooms(rooms);
  };

  render() {
    return (
      <div className="header">
        <h1 className="header-title"> Hoteles</h1>
        <p className="date-header">
          desde el {this.state.since} hasta el {this.state.until}
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
