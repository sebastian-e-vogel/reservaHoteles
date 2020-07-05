class Header extends React.Component {
  state = {
    availabilityFrom: "Seleccionar fecha de entrada",
    availabilityTo: "Seleccione fecha de salida",
  };

  textoFecha = (fecha) => {
    var numDiaSem = fecha.getDay(); //getDay() devuelve el dia de la semana.(0-6).
    //Creamos un Array para los nombres de los días
    var diasSemana = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    var diaLetras = diasSemana[fecha.getDay()]; //El día de la semana en letras. getDay() devuelve el dia de la semana.(0-6).
    //Otro Array para los nombres de los meses
    var meses = new Array(
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    );
    var mesLetras = meses[fecha.getMonth()]; //El mes en letras
    var diaMes = fecha.getDate(); //getDate() devuelve el dia(1-31).
    var anho = fecha.getFullYear(); //getFullYear() devuelve el año(4 dígitos).
    var devolver =
      diaLetras + ", " + diaMes + " de " + mesLetras + " de " + anho;
    return devolver;
  };

  updateDate = (dateValue, filterId) => {
    let filtroFecha = dateValue.split("-").join(",");
    let fecha = new Date(filtroFecha);
    this.textoFecha(fecha);
    fecha.setHours(23);
    fecha.setMinutes(59);
    fecha.setSeconds(59);
    this.setState({ [filterId]: this.textoFecha(fecha) });
    this.props.filterHotel(fecha.valueOf(), filterId);
  };

  render() {
    return (
      <div className="header">
        <h1 className="header-title"> Hoteles </h1>

        <p className="date-header">
          Desde el <span className="date">{this.state.availabilityFrom}</span>{" "}
          hasta el <span className="date">{this.state.availabilityTo}</span>
        </p>
        <Filters
          selectCountry={(countryValue, filterId) =>
            this.props.filterHotel(countryValue, filterId)
          }
          selectPrice={(priceValue, filterId) =>
            this.props.filterHotel(priceValue, filterId)
          }
          selectRooms={(roomsValue, filterId) =>
            this.props.filterHotel(roomsValue, filterId)
          }
          sinceDate={this.updateDate}
          untilDate={this.updateDate}
        />
      </div>
    );
  }
}
