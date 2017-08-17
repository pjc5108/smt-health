class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return(
    <div className="footer">
      <div className="col-xs-3 footer-column">
        <h5 className="footer-column-header">About</h5>

      </div>
      <div className="col-xs-3 footer-column">
        <h5 className="footer-column-header">Links</h5>

      </div>
      <div className="col-xs-3 footer-column">
        <h5 className="footer-column-header">Resources</h5>

      </div>
      <div className="col-xs-3 footer-column">
        <h5 className="footer-column-header">Contact</h5>

      </div>


    </div>
    )
  }
}
