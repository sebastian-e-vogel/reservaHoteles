const Hotels = (props) => {



  return (
    
    <div className="card-container">
      {props.filteredHotels.map((hotel) => {
        return (
          <Hotel
          key={hotel.slug}
          slug={hotel.slug}
            name={hotel.name}
            photo={hotel.photo}
            description={hotel.description}
            city={hotel.city}
            country={hotel.country}
            rooms={hotel.rooms}
            price={hotel.price}
          />
        );
      })}
    </div>
  );
};
