const Hotels = (props) => {



  return (
    
    <div>
      {props.filteredHotels.map((hotel) => {
        return (
          <Hotel
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
