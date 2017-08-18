class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render(){
    return(
      <nav className="health-navbar">
        <ul className="nav navbar-nav nav-list">
          <li><a href="#">Home</a></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Health Counseling <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#">Program 1</a></li>
                <li><a href="#">Program 2</a></li>
                <li><a href="#">Program 3</a></li>

              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Yoga <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#">Private Session</a></li>
                <li><a href="#">Group Session</a></li>
                <li><a href="#">Corporate Yoga</a></li>
              </ul>
            </li>
          <li><a href="#">JuicePlus+</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Blog</a></li>
          <li className="left-divider"><a href="#">Testimonials</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>






        {/* This is inside the div so that it can actually run. May revert back to the bootstrap nav if I can get it working. */}
        {/*<nav className="navbar navbar-default">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <div className="collapse navbar-collapse aaaa" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav bbbb">
              <li><a href="#">Home</a></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Health Counseling <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Program 1</a></li>
                    <li><a href="#">Program 2</a></li>
                    <li><a href="#">Program 3</a></li>

                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Yoga <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Private Session</a></li>
                    <li><a href="#">Group Session</a></li>
                    <li><a href="#">Corporate Yoga</a></li>
                  </ul>
                </li>
              <li><a href="#">Juice+</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Blog</a></li>
              <li className="left-divider"><a href="#">Testimonials</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </nav>*/}
      </nav>

    )
  }
}
