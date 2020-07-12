const Hotel = (props) => {
  let {slug,price, photo,name, description, country, city, rooms} = props
  const showHotelPrice = Array.from(new Array(4), (n, index) => (
    <i
      key={slug + index}
      className={
        index < price ? "fa fa-2x fa-usd solid" : "fa fa-2x fa-usd empty"
      }
    ></i>
  ));

  return (
    <div className="card">
      <div className="card-hotel">
        <img src={photo} />
        <h2 className="card-title"> {name} </h2>
        <p className="card-description"> {description}</p>
        <div>
          <div className="card-ubication">
            <span>
              <i className="fa fa-2x fa-map-marker" aria-hidden="true"></i>
            </span>
            <p>{`${city}, ${country}`} </p>
          </div>{" "}
          <div className="card-rooms">
            <span>
              <i className="fa fa-2x fa-bed" aria-hidden="true"></i>
            </span>
            <p> {rooms} Habitaciones</p>
          </div>{" "}
          <div className="card-price">{showHotelPrice}</div>
          <button className="reserve"> Reservar</button>
        </div>
      </div>
    </div>
  );
};
