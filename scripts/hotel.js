const Hotel = (props) => {
  return (
    <div>
      <div>
        <img src={props.photo} />
        <h2> {props.name} </h2>
        <p> {props.description}</p>
        <p>ubicacion: {`${props.city}, ${props.country}`} </p>
        <p> habitaciones: {props.rooms}</p>
        <p> precio: {props.price}</p>
      </div>
    </div>
  );
};
