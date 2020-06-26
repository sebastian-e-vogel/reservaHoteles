const Filters = () => {
  return (
    <div>
    <input type="date"/>
    <input type="date"/>
       <select id="country" name="country">
  <option value="all">Todos los paises</option>
  <option value="argentina">Argentina</option>
  <option value="brasil">Brasil</option>
  <option value="chile">Chile</option>
  <option value="uruguay">Uruguay</option>
</select>  
    <select id="price" name="price">
  <option value="all">Cualquier Precio</option>
  <option value="$">$</option>
  <option value="$$">$$</option>
  <option value="$$$">$$$</option>
  <option value="$$$$">$$$$</option>
</select>  
  <select id="room" name="room">
  <option value="all">Cualquier tamaño</option>
  <option value="pequeño">hotel pequeño</option>
  <option value="mediano">hotel mediano</option>
  <option value="grande">hotel grande</option>
</select>
    

    </div>
  );
};
