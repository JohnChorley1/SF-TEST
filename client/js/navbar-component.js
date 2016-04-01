var Badge = ReactBootstrap.Badge;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var OverlayTrigger = ReactBootstrap.OverlayTrigger;
var Popover = ReactBootstrap.Popover;
var count = 0;

    //GET SESSION DATA
  //    var requestNotifications = $.get('/session' + getID, function (data) {
  //    var message = data.message;

   //   });

//_____________________________________________

var getID = function() {
  return 1;
};

//Notifications Content

var Content = React.createClass({

    getInitialState: function() {
    return {
      message: '',
    };
  },

    componentDidMount: function(req) {

  /*    this.requestNotifications = $.get('/notifications/' + getID, function (data) {
      var message = data.message;
      this.setState({
        message: message
      });
    }.bind(this));  */
  },


    handleMessage: function() {

        for(var i = 0; i < 5; i++) {
        var content = <div><p>{this.state.message} </p><br /></div>;
        count++;
        }

        return content;
    },

    render: function() {

        if(getID) {

    return (
        <div>
        <NavLoggedIn handleMessage={this.handleMessage}/>
        </div>
      )  ;
        } else {

    return (
        <div>
        <NavLoggedOut handleMessage={this.handleMessage}/>
        </div>
    )}
    }
});

var NavLoggedIn = React.createClass({

    render: function() {

    return (

     <nav className="navbar-fixed-top  navbar-inverse" id="navColor" >
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
		  data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div id="navbar" className="collapse navbar-collapse" >
          <ul className="nav navbar-nav" id="center myNavbar">

            <li><a href='/pod-search' id="color">POD Search</a></li>
            <li> <a href='/current-bookings' id="color">Current Bookings</a> </li>
            <li> <a href='/historic-bookings' id="color">Historic Bookings</a></li>
            <li><a href='/contact-us' id="color">Contact Us</a> </li>
            <li><a href='/index' id="color">Log Out</a> </li>
            </ul>

            <ButtonToolbar id="notification">
            <OverlayTrigger trigger="click" placement="bottom" overlay={<Popover id ="nav">{this.props.handleMessage}</Popover>}>
                <li id="color">Notifications <Badge>{count}</Badge></li>
            </OverlayTrigger>
            </ButtonToolbar>


        </div>
      </div>
    </nav>

            )}
        });

var NavLoggedOut = React.createClass({

    render: function() {
    return (

     <nav className="navbar-fixed-top  navbar-inverse" id="navColor" >
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
		  data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div id="navbar" className="collapse navbar-collapse" >
          <ul className="nav navbar-nav" id="center myNavbar">
           <li><a href='/pod-search'>POD Search</a></li>
                <li><a href='/contact-us'>Contact Us</a></li>
                <li><a href='/login'>Log In</a></li>
          </ul>
        </div>
      </div>
    </nav>
            )}
        });

    ReactDOM.render(<Content />, document.getElementById('navbar'));
