const Hotel = (props) => {
  const showHotelPrice = Array.from(new Array(4), (n, index) => (
    <i
      key={props.slug + index}
      className={
        index < props.price ? "fa fa-2x fa-usd solid" : "fa fa-2x fa-usd empty"
      }
    ></i>
  ));

  return (
    <div className="card">
      <div className="card-hotel">
        <img src={props.photo} />
        <h2 className="card-title"> {props.name} </h2>
        <p className="card-description"> {props.description}</p>
        <div>
          <div className="card-ubication">
            <span>
              <i className="fa fa-2x fa-map-marker" aria-hidden="true"></i>
            </span>
            <p>{`${props.city}, ${props.country}`} </p>
          </div>{" "}
          <div className="card-rooms">
            <span>
              <i className="fa fa-2x fa-bed" aria-hidden="true"></i>
            </span>
            <p> {props.rooms} Habitaciones</p>
          </div>{" "}
          <div className="card-price">{showHotelPrice}</div>
          <button className="reserve"> Reservar</button>
        </div>
      </div>
    </div>
  );
};
