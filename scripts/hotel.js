const Hotel = (props) => {
  return (
    <div className="card">
      <div className="card-hotel">
        <img src={props.photo} />
        <h2 className='card-title'> {props.name} </h2>
        <p className='card-description'> {props.description}</p>
        <p className='card-ubication'>ubicacion: {`${props.city}, ${props.country}`} </p>
        <p className='card-rooms'> habitaciones: {props.rooms}</p>
        <p className='card-price'> precio: {props.price}</p>
      </div>
    </div>
  );
};
