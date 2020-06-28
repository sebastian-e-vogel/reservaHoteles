class Filters extends React.Component {
  handleSinceDateChange = (e) => {
    this.props.sinceDate(e.target.value);
  };

  handleUntilDateChange = (e) => {
    this.props.untilDate(e.target.value);
  };

  handleSelectCountry = (e) => {
    this.props.selectCountry(e.target.value, e.target.id);
  };
  handleSelectPrice = (e) => {
    this.props.selectPrice(e.target.value, e.target.id);

  };
  handleSelectRooms = (e) => {
    this.props.selectRooms(e.target.value, e.target.id);

  };

  render() {
    return (
      <div className='cointaner-filters'>
        <input type="date" onChange={this.handleSinceDateChange} />
        <input type="date" onChange={this.handleUntilDateChange} />

        <select id="country"  onChange={this.handleSelectCountry}>
          <option value="all">Todos los paises</option>
          <option value="Argentina">Argentina</option>
          <option value="Brasil">Brasil</option>
          <option value="Chile">Chile</option>
          <option value="Uruguay">Uruguay</option>
        </select>
        <select id="price"  onChange={this.handleSelectPrice}>
          <option value="all">Cualquier Precio</option>
          <option value={1}>$</option>
          <option value={2}>$$</option>
          <option value={3}>$$$</option>
          <option value={4}>$$$$</option>
        </select>
        <select id="room"  onChange={this.handleSelectRooms}>
          <option value="all">Cualquier tamaño</option>
          <option value="pequeño">hotel pequeño</option>
          <option value="mediano">hotel mediano</option>
          <option value="grande">hotel grande</option>
        </select>
      </div>
    );
  }
}
