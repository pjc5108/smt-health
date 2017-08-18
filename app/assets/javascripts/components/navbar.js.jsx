class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render(){
    return(
      <div className="full-navbar">
        <nav className="navbar navbar-default navbar-upper">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a href="#">Home</a></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Health Counseling <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Program 1</a></li>
                    <li><a href="#">Program 2</a></li>
                    <li><a href="#">Program 3</a></li>
                    {/*}<li role="separator" className="divider"></li>*/}
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
        </nav>
        <div className="navbar-lower">

        </div>
      </div>
    )
  }
}
