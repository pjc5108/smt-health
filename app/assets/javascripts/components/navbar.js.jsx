class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render(){
    return(
      <nav className="health-navbar">
        <div className="link-container">
          <a className="navbar-link" href="#">Home</a>
          <div className="dropdown">
            <a className="navbar-link dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Health Counseling <span className="caret"></span></a>
            <ul className="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another Action</a></li>
            </ul>
          </div>
          <a className="navbar-link" href="#">Yoga <span className="caret"></span></a>
          <a className="navbar-link" href="#">JuicePlus+</a>
          <a className="navbar-link" href="#">Products</a>
          <a className="navbar-link" href="#">Blog</a>
          <a className="left-divider navbar-link" href="#">Testimonials</a>
          <a className="navbar-link" href="#">About</a>
          <a className="navbar-link" href="#">Contact</a>
        </div>
      </nav>

    )
  }
}
