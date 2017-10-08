class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render(){
    return(
      <div>
        <div className="top-banner">
          <p className="top-banner-text">
            Simone's Complete Health
          </p>
        </div>
        <nav className="health-navbar">
          <div className="link-container">
            <a className="navbar-link" href="#">Home</a>
            <div className="dropdown">
              <a className="navbar-link dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Health Counseling <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#">Private Counseling</a></li>
                <li><a href="#">Corporate Counseling</a></li>
              </ul>
            </div>
            <a className="navbar-link" href="#">Yoga <span className="caret"></span></a>
            <a className="navbar-link" href="#">JuicePlus+</a>
            <a className="navbar-link" href="#">Products</a>
            <a className="navbar-link" href="#">Blog</a>
            <a className="navbar-link" href="#">Testimonials</a>
            <a className="navbar-link" href="#">About</a>
            <a className="navbar-link" href="#">Contact</a>
          </div>
        </nav>
      </div>


    )
  }
}
