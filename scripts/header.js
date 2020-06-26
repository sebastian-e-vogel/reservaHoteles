const Header = () => {
  return (
    <div className="header">
      <h1 className="header-title"> Hoteles</h1>
      <p className="date-header">
        desde el{" "}
        {`${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`}{" "}
      </p>
    </div>
  );
};
