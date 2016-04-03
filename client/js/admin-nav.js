var AdminNav = React.createClass({

    render: function() {
    return (


     <nav className="navbar-fixed-top navbar-inverse" id="navColor" >
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
		        data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div id="navbar" className="collapse navbar-collapse" >
          <ul className="nav navbar-nav" id="center">
		   <div className="dropdown">
            <a  data-toggle="dropdown" data-target="#"  id="color" href="/page.html">
                Dropdown <span className="caret"></span>
            </a>
    		<ul className="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
              <li><a href="#">Some action</a></li>
              <li><a href="#">Some other action</a></li>
              <li className="divider"></li>
              <li className="dropdown-submenu">
                <a tabindex="-1" href="#">Hover me for more options</a>
                <ul className="dropdown-menu">
                  <li><a tabindex="-1" href="#">Second level</a></li>
                  <li className="dropdown-submenu">
                    <a href="#">Even More..</a>
                    <ul className="dropdown-menu">
                        <li><a href="#">3rd level</a></li>
                    	<li><a href="#">3rd level</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Second level</a></li>
                  <li><a href="#">Second level</a></li>
                </ul>
              </li>
            </ul>
        </div>
          </ul>
        </div>
      </div>
    </nav>


            )}
        });


    ReactDOM.render(<AdminNav/>, document.getElementById('AdminNav'));
