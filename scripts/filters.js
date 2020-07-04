class Filters extends React.Component {
  
 

  render() {
    return (
      <div className="cointaner-filters">
        <div className="inside-input">
          <i className="fa fa-1x fa-sign-in" aria-hidden="true"></i>
          <input id="availabilityFrom" type="date" onChange={(e) => this.props.sinceDate(e.target.value, e.target.id)} />
        </div>
        <div className="outside-input">
          <i className="fa fa-1x fa-sign-out" aria-hidden="true"></i>
          <input id="availabilityTo" type="date" onChange={(e)=> this.props.untilDate(e.target.value, e.target.id)} />
        </div>
        <div className='ubication-input'> 
        <i className="fa fa-1x fa-map-marker" aria-hidden="true"></i>
        <select id="country" onChange={(e) => this.props.sinceDate(e.target.value, e.target.id)}>
          <option value="all">Todos los paises</option>
          <option value="Argentina">Argentina</option>
          <option value="Brasil">Brasil</option>
          <option value="Chile">Chile</option>
          <option value="Uruguay">Uruguay</option>
        </select>
        </div>
         <div className='price-input'> 
          <i className= "fa fa-1x fa-usd"></i>
        <select id="price" onChange={(e)=> this.props.selectPrice(e.target.value, e.target.id)}>
          <option value="all">Cualquier Precio</option>
          <option value={1}>$</option>
          <option value={2}>$$</option>
          <option value={3}>$$$</option>
          <option value={4}>$$$$</option>
        </select>
        </div>
         <div className='room-input'> 
         <i className="fa fa-1x fa-bed" aria-hidden="true"></i>
        <select id="room" onChange={(e)=> this.props.selectRooms(e.target.value, e.target.id)}>
          <option value="all">Cualquier tamaño</option>
          <option value="pequeño">hotel pequeño</option>
          <option value="mediano">hotel mediano</option>
          <option value="grande">hotel grande</option>
        </select>
        </div>
      </div>
    );
  }
}
