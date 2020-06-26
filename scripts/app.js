const App = () => {
  return (
    <div>
      <Header />
      <Filters />
      <Hotels />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
