const Hotels = () => {
 return(
   <div>
   {hotelsData.map((hotel)=>{
       return(

           <Hotel 
           name={hotel.name}
           photo={hotel.photo}
           description={hotel.description}
           city={hotel.city}
           country={hotel.country}
           rooms={hotel.rooms}
           price={hotel.price}
           />

       )
   })}

   </div>
)
};