class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return(
    <div className="app">
      <NavBar/>
      <Body/>
      <Footer/>
    </div>
    )
  }
}
